const {test, describe } = require('node:test')
const assert = require('node:assert')

const {dummy,totalLikes, favoriteBlog, mostBlogs,mostLikes} = require('../utils/list_helper')

const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]

const blogs = [
{
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
},
{
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
},
{
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
},
{
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
},
{
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
},
{
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
}  
]

describe("Test of dummy helper",()=>{
    test("Dummy helper",()=>{
        const blogs = []

        const result = dummy(blogs)
        assert.strictEqual(result, 1)
    })
})

describe("Test of total likes",()=>{
       
    test('when list has only one blog, equals the likes of that', () => {
        const result = totalLikes(listWithOneBlog)
        assert.strictEqual(result, 5)
    })

    test("when list has mor than one blog, equals the sum of these",()=>{
        const result = totalLikes(blogs)
        assert.strictEqual(result, 36)
    })

    test('when list is empty return 0', () => {
        const result = totalLikes([])
        assert.strictEqual(result, 0)
    })
})

describe("Test of the favorite blog in a list", ()=>{
    test('When the list has one blog the favorite is that blog',()=>{
        const result = favoriteBlog(listWithOneBlog)
        assert.deepStrictEqual(result,listWithOneBlog[0])
    })
    test('When the list has mor than one it select the blog with more likes',()=>{
        const result = favoriteBlog(blogs)
        assert.deepStrictEqual(result,blogs[2])
    })
    test('when list is empty return null', () => {
        const result = favoriteBlog([])
        assert.strictEqual(result, null)
    })
})

describe("Test of the authors blogs", ()=>{
    test('When the list has only one blog it return the name of the author',()=>{
        const result = mostBlogs(listWithOneBlog)
        assert.deepStrictEqual(result,{author:'Edsger W. Dijkstra',blogs:1})
    })
    test('When the list has most that one blog it return the name of the author with more blogs',()=>{
        const result = mostBlogs(blogs)
        assert.deepStrictEqual(result,{author:'Robert C. Martin',blogs:3})
    })
    test('when list is empty return null', () => {
        const result = mostBlogs([])
        assert.strictEqual(result, null)
    })
})

describe("Test of the authors likes", ()=>{
    test('When the list has only one blog it return the name of the author with the likes',()=>{
        const result = mostLikes(listWithOneBlog)
        assert.deepStrictEqual(result,{author:listWithOneBlog[0].author,likes:listWithOneBlog[0].likes})
    })
    test('When the list has most that one blog it return the name of the author with more likes',()=>{
        const result = mostLikes(blogs)
        assert.deepStrictEqual(result,{author:'Edsger W. Dijkstra',likes:17})
    })
    test('when list is empty return null', () => {
        const result = mostLikes([])
        assert.strictEqual(result, null)
    })
})