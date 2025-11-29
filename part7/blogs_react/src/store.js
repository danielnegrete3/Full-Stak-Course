import { configureStore } from '@reduxjs/toolkit'
import blog from './features/blogs/blogSlice'
import auth from './features/auth/authSlice'
import message from './features/messages/messageSlice'
import user from './features/users/slice'

export default configureStore({
  reducer: {
    blog,
    auth,
    message,
    user,
  },
})