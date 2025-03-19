
class TestController {
    constructor({BlogModel,UserModel}){
        this.BlogModel = BlogModel
        this.UserModel = UserModel
        this.reset = this.reset.bind(this)
    }

    async reset(req,res){
        this.BlogModel.deleteAll()
        this.UserModel.deleteAll()
        res.status(204).end()
    }
}

module.exports = {TestController}