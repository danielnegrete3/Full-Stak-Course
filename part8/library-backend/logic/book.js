
export class BookFunctions{
    constructor({BookModel,AuthorModel}){
        this.BookModel = BookModel
        this.AuthorModel = AuthorModel
    }

    async author(root){
        return (await this.AuthorModel.findBy({filter:{id:root.author}}))[0]
    }

    async bookCount(){
        return await this.BookModel.count()
    }

    async allBooks(root,args){
        let filter = {}
        if(args.name)filter.title = args.name
        if(args.genres)filter.genres = {$all:args.genres}
        if(args.author){
            let author = (await this.AuthorModel.findBy({filter:{name:args.author}}))[0]
            filter.author = author._id
        }

        return await this.BookModel.findBy({filter})
    }

    async addBook(root,args){
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