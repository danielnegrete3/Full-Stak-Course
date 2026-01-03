import { IsLoged } from "../utils/IsLoged.js"

export class AuthorFunctions{
    constructor({AuthorModel,BookModel}){
        this.AuthorModel = AuthorModel
        this.BookModel = BookModel
        this.bookCount = this.bookCount.bind(this)
        this.authorCount = this.authorCount.bind(this)
        this.allAuthors = this.allAuthors.bind(this)
        this.editAuthor = this.editAuthor.bind(this)
    }

    bookCount = async (root) => {
        return this.BookModel.count({filter:{author:root.id}})
    }

    authorCount = async()=>{
        return await this.AuthorModel.count()
    }

    allAuthors = async()=>{
        return await this.AuthorModel.getAll()
    }

    editAuthor = async(root,args,context)=>{
        IsLoged({context})
        
        let author = (await this.AuthorModel.findBy({filter:{name:args.name}}))[0]
        author = await this.AuthorModel.update({id:author._id,data:{born:args.born}})

        return author
    }

}