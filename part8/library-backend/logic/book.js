import { IsLoged } from "../utils/IsLoged.js"

export class BookFunctions{
    constructor({BookModel,AuthorModel}){
        this.BookModel = BookModel
        this.AuthorModel = AuthorModel
        this.author = this.author.bind(this)
        this.bookCount = this.bookCount.bind(this)
        this.allBooks = this.allBooks.bind(this)
        this.addBook = this.addBook.bind(this)
    }

    author = async (root) => {
        return (await this.AuthorModel.findBy({filter:{id:root.author}}))[0]
    }

    bookCount = async () => {
        return await this.BookModel.count()
    }

    allBooks = async (root,args)=> {
        let filter = {}
        if(args.name)filter.title = args.name
        if(args.genres)filter.genres = {$all:args.genres}
        if(args.author){
            let author = (await this.AuthorModel.findBy({filter:{name:args.author}}))[0]
            filter.author = author._id
        }

        return await this.BookModel.findBy({filter})
    }

    addBook = async (root,args,context)=>{
        IsLoged({context})

        let author = await this.AuthorModel.findBy({filter:{name:args.author}})
        if(author.length == 0){
          author =  await this.AuthorModel.create({input:{name:args.author}})
        }

        let book = await this.BookModel.create({input:{
            title: args.title,
            author: author._id,
            published: args.published,
            genres:args.genres,
        }})

        return book
    }

}