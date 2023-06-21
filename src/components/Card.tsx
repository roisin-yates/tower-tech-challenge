import { useState } from 'react'

export interface userProps {
  FirstName: string
}

export default function Card({ FirstName }: userProps) {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')

  const validateExpiry = () => {
    const currentDate = new Date()
    const [month, year] = expiry.split('/').map(Number)
    const inputDate = new Date(2000 + year, month - 1)
    if (month < 1 || month > 12 || inputDate <= currentDate || !year) {
      return false
    } else {
      return true
    }
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\s/g, '')
    const cardNumberFormatted = input
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')

    setCreditCardNumber(cardNumberFormatted)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\s/g, '')
    const expiryFormatted = input
      .replace(/\D/g, '')
      .replace(/(\d{2})(?=\d)/g, '$1/')
    setExpiry(expiryFormatted)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validateExpiry()
    if (validateExpiry()) {
      console.log(
        `credit card number: ${creditCardNumber}; \n cvc: ${cvc} \n expiry: ${expiry}`
      )
    } else {
      console.log('The expiry is not valid')
    }
  }

  return (
    <div>
      <p>Welcome {FirstName}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cc-number">Credit Card Number</label>
        <input
          type="text"
          name="cc-number"
          id="cc-number"
          placeholder="e.g 0000 0000 0000 0000"
          maxLength={19}
          value={creditCardNumber}
          onChange={handleCardNumberChange}
          required
        />

        <label htmlFor="cvc">CVC</label>
        <input
          type="text"
          name="cvc"
          id="cvc"
          maxLength={3}
          inputMode="numeric"
          placeholder="eg. 000"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          required
        />

        <label htmlFor="expiry">Expiry</label>
        <p>{validateExpiry() ? '' : 'invalid date'}</p>
        <input
          type="text"
          name="expiry"
          id="expiry"
          placeholder="e.g MM/YY"
          maxLength={5}
          value={expiry}
          onChange={handleDateChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
