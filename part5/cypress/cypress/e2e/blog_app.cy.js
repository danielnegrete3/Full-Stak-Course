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
    title: "New blog by cypress",
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

describe('Note app', function() {
  beforeEach(function(){
    cy.resetDB({ users })
    cy.visit('')

  })

  it('front page can be opened', function() {
    cy.contains('Log in to application')
  })

  describe('when logged in', function() {
    
    it('user can login', function() {
      cy.get('input[name = "username"]').type(users[0].username)
      cy.get('input[name = "password"]').type(users[0].password)
      cy.get('button[type = "submit"]').contains('login').click()
  
      cy.contains('Loged Correctly')
    })

    it('fails with wrong credentials', function(){
      cy.get('input[name = "username"]').type(users[0].username)
      cy.get('input[name = "password"]').type('wrong')
      cy.get('button[type = "submit"]').contains('login').click()
  
      cy.get('html').should('contain','invalid username or password')
    })

  })

  describe('When logged in', function(){
    beforeEach(function(){
      cy.login( users[0] )
    })

    it('a new blog can be created', function(){
      cy.get('button').contains('Create a new Blog').click()

      cy.get('input[name = "title"]').type(blogs[0].title)
      cy.get('input[name = "author"]').type(blogs[0].author)
      cy.get('input[name = "url"]').type(blogs[0].url)

      cy.get('button[type = "submit"]').contains('Create').click()
      cy.contains(`New Blog created ${blogs[0].title}`)
      cy.contains(`${blogs[0].title}: ${blogs[0].author}`)
    })

    describe('When blog has created', function(){
      beforeEach(function(){
        cy.createBlog( blogs[0] )
      })

      it('User can edit the blog', function(){
        cy.get('button').contains('view').click()
        cy.get('button').contains('like').click()
        cy.contains('1 like')
      })

      it('User can delete the blog', function(){
        cy.get('button').contains('view').click()
        cy.get('button').contains('delete').click()
        cy.get('html').should('not.contain','view')
      })

    })

    describe('When multiple blogs has created', function(){
      beforeEach(function(){
        for(const blog of blogs){
          cy.createBlog(blog)
        }
      })

      it('Blogs are ordered by likes', function(){
        
        cy.wait(500)
        cy.get('html').get('button:contains("view")').last().parent().as('lastBlog')
        cy.get('html').get('button:contains("view")').last().as('lastBlog').click()

        cy.get('html').get('button').contains('like').click()
        cy.wait(1000)
        
        cy.get('@lastBlog').get('button').contains('hide').click()
        cy.get('html').get('button:contains("view")').first().click()
        cy.get('html').should('contain','1 like')

      })
      
    })

  })

  describe('When the user has no permissions', function(){
    beforeEach(function(){
      cy.login(users[0])
      cy.createBlog(blogs[0])
      cy.login(users[1])
    })

    it('User can not delete other user blog', function(){
      cy.get('button').contains('view').click()
      cy.get('button').contains('delete').should('not.exist')

    })
  })

})