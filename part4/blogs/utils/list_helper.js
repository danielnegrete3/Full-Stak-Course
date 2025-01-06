const dummy = (blogs) => {
    return 1
  }

const totalLikes  = (blogs) => {
    const total = blogs.reduce((pre,curr) => pre+=curr.likes ,0)
    return total
}

const favoriteBlog = (blogs) => {
    const favorite = blogs.reduce((pre,curr) => pre.likes > curr.likes? pre:curr,{likes:0})
    return favorite.author?favorite:null
}

const mostBlogs = (blogs) => {
    const authorBlogs = {}
    blogs.forEach(blog =>{
        const author = blog.author
        authorBlogs[author] = authorBlogs[author]? authorBlogs[author] + 1:1
    })

    const author = Object.entries(authorBlogs).reduce((pre,curr)=> pre[1] > curr[1]? pre:curr,['',0])

    return author[0]?{author:author[0],blogs:author[1]}:null
}

const mostLikes = (blogs) => {
    const authorBlogs = {}
    blogs.forEach(blog =>{
        const author = blog.author
        authorBlogs[author] = authorBlogs[author]? authorBlogs[author] + blog.likes:blog.likes
    })

    const author = Object.entries(authorBlogs).reduce((pre,curr)=> pre[1] > curr[1]? pre:curr,['',0])

    return author[0]?{author:author[0],likes:author[1]}:null
}
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }