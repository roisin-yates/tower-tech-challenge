import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from '../components/App'

afterEach(() => {
  cleanup()
})

test('renders with register card form first', () => {
  render(<App />)
  const registerCardForm = screen.getByText(/register card form/i)
  expect(registerCardForm).toBeInTheDocument()

  const welcome = screen.getByText(/welcome/i)
  expect(welcome).toBeInTheDocument()

  const burgerIcon = screen.getByTestId('burger-icon')
  expect(burgerIcon).toBeInTheDocument()
})

test('clicking on the burger icon changes state', () => {
  render(<App />)

  const burgerIcon = screen.getByTestId('burger-icon')
  fireEvent.click(burgerIcon)

  const menu = screen.getByText('Menu')
  expect(menu).toBeInTheDocument()

  const backButton = screen.getByTestId('back-button')
  expect(backButton).toBeInTheDocument()
})
