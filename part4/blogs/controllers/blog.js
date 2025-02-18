const {getDecodedToken} = require('../utils/jwt')

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
        const decodedToken = req.user

        if (!decodedToken.id) {
            return res.status(401).json({ error: 'token invalid' })
        }

        const user = await this.UserModel.findById({id:decodedToken.id})
        const {body} = req
        const bodyNewBlog = {
            title : body.title,
            author: user.name,
            url: body.url,
            user: user.id
        }

        const newBlog = await this.BlogModel.create({input:bodyNewBlog})
        if(newBlog === 400) res.status(400)
        res.status(201)
        res.json(newBlog)

    }

    async update(req,res){
        if (!decodedToken.id) {
            return res.status(401).json({ error: 'token invalid' })
        }

        const user = await this.UserModel.findById({id:decodedToken.id})

        const body = req.body;
        const id = req.params.id;

        const find
        const blog = {
            title: body.title,
            url : body.url
        }

        const blogUpdated = await this.BlogModel.update({id,data:blog})
        res.json(blogUpdated)
    }

    async delete(req,res){
        const id = req.params.id
        const blogDeleted = await this.BlogModel.delete({id})
        res.json(blogDeleted)
    }
}

module.exports = {BlogController};