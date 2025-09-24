import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import userEvent from '@testing-library/user-event'
import NewBlog from '../pages/blogs/NewBlog'
import { expect } from 'vitest'

const blog = {
  title: 'Component testing is done with react-testing-library',
  author: 'danyel',
  url:'shaod.com',
}
const userDany = { username:'dany',name:'dany',token:'iasbdi' }

test('renders only basic content', async () => {
  const createBlog = vi.fn()
  render(<NewBlog user={userDany} insertNewBlog={createBlog} showMessage={() => {}} test/> )

  const user = userEvent.setup()
  const title = screen.getByPlaceholderText('title')
  const url = screen.getByPlaceholderText('url')
  const author = screen.getByPlaceholderText('author')

  await user.type(title,blog.title)
  await user.type(url,blog.url)
  await user.type(author,blog.author)

  const button = screen.getByText('Create')
  await user.click(button)

  expect(createBlog.mock.calls).toHaveLength(1)
  expect(createBlog).toHaveBeenCalledWith({
    title: blog.title,
    author: blog.author,
    url: blog.url
  })

})