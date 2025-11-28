import store from '../../store'

export async function IsLoggedMiddleware() {
  const user = JSON.parse(globalThis.localStorage.getItem('blogsUser'))
  if(store.getState().auth.user) return
  store.dispatch({type:'auth/setAuthUser',payload:{user}})
}