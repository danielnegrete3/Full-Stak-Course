import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './features/blogs/blogSlice'

export default configureStore({
  reducer: {
    blog: blogReducer,
  },
})