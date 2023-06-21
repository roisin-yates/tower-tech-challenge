import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import Menu from '../components/Menu'

afterEach(() => {
  cleanup()
})

test('renders menu content', () => {
  render(<Menu />)

  const home = screen.getByText(/home/i)
  expect(home).toBeInTheDocument()

  const payments = screen.getByText(/payments/i)
  expect(payments).toBeInTheDocument()

  const profile = screen.getByText(/profile/i)
  expect(profile).toBeInTheDocument()
})
