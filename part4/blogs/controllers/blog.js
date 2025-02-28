const {getDecodedToken} = require('../utils/jwt');
const { thorwOwnError } = require('../utils/ownErrors');

class BlogController{
    constructor({BlogModel,UserModel}){
        this.BlogModel = BlogModel;
        this.UserModel = UserModel;
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.getById = this.getById.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(req, res){
        const blogs = await this.BlogModel.getAll();
        res.json(blogs);
    }

    async getById(req,res){
        const id = req.params.id
        const blog = await this.BlogModel.findById({id})
        res.json(blog)
    }

    async create(req, res){
        const user = req.user
    
        const {body} = req
        const bodyNewBlog = {
            title : body.title,
            author: body.author,
            url: body.url,
            user: user.id
        }

        const newBlog = await this.BlogModel.create({input:bodyNewBlog,user})
        if(newBlog === 400) res.status(400)

        res.status(201)
        res.json(newBlog)

    }

    async update(req,res){
        const user = req.user

        const body = req.body;
        const id = req.params.id;

        if(user.blogs.indexOf(id) === -1){}
        const blog = user.blogs.indexOf(id) === -1?
        {
            likes: body.likes
        }
        :
        {
            title: body.title,
            url : body.url,
            author : body.author,
            likes: body.likes
        }

        const blogUpdated = await this.BlogModel.update({id,data:blog,user})

        thorwOwnError({opt:!blogUpdated,message:'User does not own this blog'})

        res.json(blogUpdated)
    }

    async delete(req,res){
        const user = req.user

        const id = req.params.id
        const blogDeleted = await this.BlogModel.delete({id,user})

        thorwOwnError({opt:!blogDeleted,message:'User does not own this blog'})

        res.json(blogDeleted)
    }
}

module.exports = {BlogController};