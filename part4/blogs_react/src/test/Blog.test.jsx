import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import userEvent from '@testing-library/user-event'
import Blog from '../components/Blog'
import { expect } from 'vitest'

const blog = {
  title: 'Component testing is done with react-testing-library',
  author: 'danyel',
  url:'shaod.com',
  likes:0,
  user:{ username:'Danywritter' },
  id:1
}
const userDany = { username:'dany',name:'dany',token:'iasbdi' }

test('renders only basic content', () => {

  render(<Blog blog={blog} user={userDany} showMessage={() => {}}/> )

  const element = screen.getByText(`${blog.title}: ${blog.author}`, { exact: false })
  const likes = screen.queryByText(blog.likes,{ exact:false })
  const url = screen.queryByText(blog.url,{ exact:false })
  const writter = screen.queryByText(blog.user.username, { exact:false })

  expect(likes).toBeNull
  expect(url).toBeNull
  expect(writter).toBeNull
  expect(element).toBeDefined()
})

test('clicking the button to view complete content', async () => {

  render(
    <Blog blog={blog} user={userDany} showMessage={() => {}}/>
  )

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)

  const likes = screen.queryByText(blog.likes,{ exact:false })
  const url = screen.queryByText(blog.url,{ exact:false })
  const writter = screen.queryByText(blog.user.username, { exact:false })

  expect(likes).toBeDefined
  expect(url).toBeDefined
  expect(writter).toBeDefined

})

test('hidde extra content',async () => {
  render(
    <Blog blog={blog} user={userDany} showMessage={() => {}}/>
  )

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)
  const hidden = screen.getByText('hide')
  await user.click(hidden)

  const likes = screen.queryByText(blog.likes,{ exact:false })
  const url = screen.queryByText(blog.url,{ exact:false })
  const writter = screen.queryByText(blog.user.username, { exact:false })

  expect(likes).toBeNull
  expect(url).toBeNull
  expect(writter).toBeNull

})

test('Two likes',async () => {
  const mockHandler = vi.fn()

  render(
    <Blog blog={blog} user={userDany} test={mockHandler} showMessage={() => {}}/>
  )

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)
  const like = screen.getByText('like')
  await user.click(like)
  await user.click(like)

  expect(mockHandler.mock.calls).toHaveLength(2)

})

