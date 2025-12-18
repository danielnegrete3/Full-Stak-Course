const { thorwOwnError } = require('../utils/ownErrors');

class CommentController{
    constructor({Model,UserModel}){
        this.Model = Model;
        this.UserModel = UserModel;
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.getById = this.getById.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(req, res){
        const data = await this.Model.getAll();
        res.json(data);
    }

    async getById(req,res){
        const id = req.params.id
        const data = await this.Model.findById({id})
        res.json(data)
    }

    async create(req, res){
        const user = req.user
    
        const {body} = req
        const newData = {
            message : body.message,
            blog: body.blog,
            user: user.id
        }

        const data = await this.Model.create({input:newData,user})
        if(data === 400) res.status(400)

        res.status(201)
        res.json(data)

    }

    async update(req,res){
        const user = req.user

        const body = req.body;
        const id = req.params.id;

        const data =
        {
             message : body.message,
        }

        const dataUpdated = await this.Model.update({id,data,user})

        thorwOwnError({opt:!dataUpdated,message:'User does not own this blog'})

        res.json(dataUpdated)
    }

    async delete(req,res){
        const user = req.user

        const id = req.params.id
        const dataDeleted = await this.Model.delete({id,user})

        thorwOwnError({opt:!dataDeleted,message:'User does not own this blog'})

        res.json(dataDeleted)
    }
}

module.exports = {CommentController};