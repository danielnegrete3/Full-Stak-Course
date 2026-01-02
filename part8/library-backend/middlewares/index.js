
export const ExcecuteMiddlewares = (middlewares) => {
   return ({req, res}) => {
        middlewares.forEach(middleware => {
            middleware(req,res)
        })
   }
}