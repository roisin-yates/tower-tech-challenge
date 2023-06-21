import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Card from '../components/Card'

afterEach(() => {
  cleanup()
})

export const DefaultUser = {
  FirstName: 'Alice',
}

test('renders user.firstName dynamically', () => {
  const User = {
    FirstName: 'Alice',
  }
  render(<Card FirstName={User.FirstName} />)
  let welcomeMessage = screen.getByText(/welcome Alice/i)
  expect(welcomeMessage).toBeInTheDocument()

  const SecondUser = {
    FirstName: 'Bob',
  }
  render(<Card FirstName={SecondUser.FirstName} />)
  welcomeMessage = screen.getByText(/welcome Bob/i)
  expect(welcomeMessage).toBeInTheDocument()
})

test('renders input labels', () => {
  render(<Card FirstName={DefaultUser.FirstName} />)

  const creditCardNumber = screen.getByText(/credit card number/i)
  expect(creditCardNumber).toBeInTheDocument()

  const cvc = screen.getByText(/cvc/i)
  expect(cvc).toBeInTheDocument()

  const expiry = screen.getByText(/expiry/i)
  expect(expiry).toBeInTheDocument()
})

test('form submits correctly with valid inputs', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  render(<Card FirstName={DefaultUser.FirstName} />)

  const creditCardNumberInput = screen.getByLabelText('Credit Card Number')
  const cvcInput = screen.getByLabelText('CVC')
  const expiryInput = screen.getByLabelText('Expiry')
  fireEvent.change(creditCardNumberInput, {
    target: { value: '4242 4242 4242 4242' },
  })
  fireEvent.change(cvcInput, { target: { value: '123' } })
  fireEvent.change(expiryInput, { target: { value: '07/23' } })

  const submit = screen.getByText('Submit')
  fireEvent.click(submit)

  expect(consoleSpy).toHaveBeenCalledWith(
    'credit card number: 4242 4242 4242 4242; \n cvc: 123 \n expiry: 07/23'
  )

  consoleSpy.mockRestore()
})

test('form throws error with invalid inputs', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

  render(<Card FirstName={DefaultUser.FirstName} />)

  const creditCardNumberInput = screen.getByLabelText('Credit Card Number')
  const cvcInput = screen.getByLabelText('CVC')
  const expiryInput = screen.getByLabelText('Expiry')
  fireEvent.change(creditCardNumberInput, {
    target: { value: '4242 4242 4242 4242' },
  })
  fireEvent.change(cvcInput, { target: { value: '123' } })
  fireEvent.change(expiryInput, { target: { value: '04/23' } })

  const submit = screen.getByText('Submit')
  fireEvent.click(submit)

  expect(consoleSpy).toHaveBeenCalledWith('The expiry is not valid')
})
