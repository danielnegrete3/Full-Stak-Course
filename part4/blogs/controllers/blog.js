
class BlogController{
    constructor({BlogModel}){
        this.BlogModel = BlogModel;
        this.getAll = this.getAll.bind(this);
    }

    async getAll(req, res){
        const blogs = await this.BlogModel.getAll();
        res.json(blogs);
    }
}

module.exports = {BlogController};