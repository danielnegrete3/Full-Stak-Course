
class BlogController{
    constructor({BlogModel}){
        this.BlogModel = BlogModel;
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
        try{
            console.log(req.body)
            const newBlog = await this.BlogModel.create({input:req.body})
            res.status(201)
            res.json(newBlog)
        }
        catch(e){
            console.error(e)
        }
    }

    async update(req,res){
        const body = req.body;
        const id = req.params.id;
        const blog = {
            title: body.title,
            author: body.author,
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