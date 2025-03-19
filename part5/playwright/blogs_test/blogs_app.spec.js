const { test, expect, beforeEach, describe } = require('@playwright/test')
const { InsertUsers, Login, users, CreateBlogs, blogs } = require('./helpers')

describe('Blogs App',()=>{
    beforeEach(async ({ page, request }) => {
        await request.post('/api/test/reset')
        await InsertUsers({request})

        await page.goto('/')
    })

    test('Login form is shown', async ({ page }) => {
        page.getByText('Log in to application')
    })

    describe('Login', () => {
        test('succeeds with correct credentials', async ({ page }) => {
            await Login({page,user:users[0]})
            await expect(page.getByText('Loged Correctly')).toBeVisible()
        })
        
        test('fails with wrong credentials', async ({ page }) => {
            await Login({page,user:{
                username: 'sim',
                password: 'sim',
            }})
            
            await expect(page.getByText('invalid username or password')).toBeVisible()
        })
    })

    describe('when logged in', () => {
        beforeEach(async ({ page }) => {
            await Login({page,user:users[0]})
          })

        test('a new blog can be created', async ({ page }) => {
            await CreateBlogs({page,blogs:[blogs[0]]})

            await expect(page.getByText(/New Blog created*/)).toBeVisible()

            await expect(page.getByText('New blog by playwright: daniel')).toBeVisible()
        })

        describe('when blog has created', () => {
            beforeEach(async ({page})=>{
                await CreateBlogs({page,blogs:[blogs[0]]})

                await page.getByRole('button', {name:'view'}).click()
            })
            
            test('user can edit the blog', async ({page})=> {

                const [response] = await Promise.all([
                    page.waitForResponse(async response => {
                        if(response.url().includes('/api/blog')){
                            const json = await response.json();  
                            return json.likes === 1;
                        }
                        return false
                    }),
                    page.getByRole('button', { name: 'like' }).click()
                  ]);

                await expect(page.getByRole('button', { name: 'like' }).locator('..')).toHaveText(/1*/)

            })

            test('user can delete', async ({page})=>{
                page.on('dialog', async dialog => {
                    await dialog.accept(); // Hace clic en "Aceptar"
                });

                await page.getByRole('button', { name: 'delete' }).click()
                await expect(page.getByRole('button', {name:'hide'})).not.toBeVisible();
            })
        })

        describe('when has a lot blogs', ()=>{

            beforeEach(async ({page})=>{
                await CreateBlogs({page,blogs:blogs})
            })

            test('Likes rank', async ({page})=>{

                await page.getByRole('button', { name: 'view' }).last().click()

                const lastBlog = page.getByRole('button', { name: 'like' })
                const lastText = lastBlog.locator('..').textContent()

                await lastBlog.click()

                const firstBlog = page.getByRole('button', { name: 'like' })
                const firstText = firstBlog.locator('..').textContent()
                console.log(lastText,firstText)

                await page.getByRole('button', { name: 'hide' }).click()

            })
        })

    })
    describe('When the user has no permissions', () =>{
        beforeEach(async ({page})=>{
            await Login({page, user:users[0]})

            await CreateBlogs({page,blogs:[blogs[0]]})

            await page.getByRole('button', { name: 'logout' }).click()

            await Login({page, user:users[1]})

            await page.getByRole('button', {name:'view'}).click()
        })

        test('Delete Button dont render' , async ({page})=>{

            await expect(page.getByRole('button', {name:'delete'})).not.toBeVisible();
        })
    })
    
})