
class BlogController{
    constructor({BlogModel}){
        this.BlogModel = BlogModel;
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
    }

    async getAll(req, res){
        const blogs = await this.BlogModel.getAll();
        res.json(blogs);
    }

    async create(req, res){
        try{
            console.log(req.body)
            const newBlog = await this.BlogModel.create({input:req.body})
            res.json(newBlog)
        }
        catch(e){
            console.error(e)
        }
    }
}

module.exports = {BlogController};