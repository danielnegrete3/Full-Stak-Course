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
        const authors = await this.AuthorModel.getAll()
        const counts = await this.BookModel.authorsGroup()
        console.log(authors,counts)
        const countMap = Object.fromEntries(
            counts.map(c => [c._id.toString(), c.count])
        )
        return authors.map((a) => ({...a.toObject(),bookCount: countMap[a._id.toString()] ?? 0,id:a._id.toString()}))
    }

    editAuthor = async(root,args,context)=>{
        IsLoged({context})
        
        let author = (await this.AuthorModel.findBy({filter:{name:args.name}}))[0]
        author = await this.AuthorModel.update({id:author._id,data:{born:args.born}})

        return author
    }

}