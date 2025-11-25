
export async function IsLoggedMiddleware({ request },next) {
  console.log('🔵 Middleware ejecutado para:', request.url);
  return await next()
}