import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../components/App'

afterEach(() => {
  cleanup()
})

test('renders hello world', () => {
  render(<App />)
  const helloWorld = screen.getByText(/hello world/i)
  expect(helloWorld).toBeInTheDocument()
})
