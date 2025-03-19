
const Login = async ({page,user})=>{
    await page.getByTestId('username').fill(user.username)
    await page.getByTestId('password').fill(user.password)

    await page.getByRole('button', { name: 'login' }).click()
}

const InsertUsers = async ({request}) =>{

    for(const user of users){
        await request.post('/api/users', {
            data: user
        })
    }

}

const CreateBlogs = async ({page,blogs}) => {

    for(const blog of blogs){
        await page.getByRole('button', { name: 'Create a new Blog' }).click()
        await page.getByPlaceholder('title').fill(blog.title)
        await page.getByPlaceholder('url').fill(blog.url)
        await page.getByPlaceholder('author').fill(blog.author)
        
        await page.getByRole('button', { name: 'Create' }).click()
        await page.waitForResponse(response => 
            response.url().includes('/api/blogs') && response.status() === 201
        );
    }
}

const users = [
    {
        name: 'Matti Luukkainen',
        username: 'dann',
        password: 'hee'
    },
    {
        name: 'Matti Luukkainen',
        username: 'Leo',
        password: 'hee'
    }
]

const blogs = [
    {
        title: "New blog by playwright",
        url: "https://hi",
        author: "daniel",
    },
    {
        title: "Two Blogs",
        url: "https://Ariel",
        author: "Ariel",
    },
    {
        title: "three Blogs",
        url: "https://Ariel",
        author: "Sammuel",
    }
]


module.exports = {
    Login,
    users,
    InsertUsers,
    CreateBlogs,
    blogs
}