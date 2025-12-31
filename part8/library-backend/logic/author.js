
export class AuthorFunctions{
    constructor({AuthorModel,BookModel}){
        this.AuthorModel = AuthorModel
        this.BookModel = BookModel
    }

    async bookCount(root){
        return this.BookModel.count({filter:{author:root.id}})
    }

    async authorCount(){
        return await this.AuthorModel.count()
    }

    async allAuthors(){
        return await this.AuthorModel.getAll()
    }

    async editAuthor(root,args){
        let author = (await this.AuthorModel.findBy({filter:{name:args.name}}))[0]
        author = await this.AuthorModel.update({id:author._id,data:{born:args.born}})
        
        return author
    }

}