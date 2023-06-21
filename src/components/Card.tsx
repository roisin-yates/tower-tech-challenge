import { useState } from 'react'

export interface userProps {
  FirstName: string
}

export default function Card({ FirstName }: userProps) {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cardType, setCardType] = useState('none')

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

  const validateCard = () => {
    const cardArray = creditCardNumber.split('').map(Number)
    if (cardArray[0] === 4) {
      setCardType('visa')
    } else if (cardArray[0] === 2 || cardArray[0] === 5) {
      setCardType('mastercard')
    } else if (cardArray[0] === 3) {
      setCardType('amex')
    } else {
      setCardType('none')
    }
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\s/g, '')
    const cardNumberFormatted = input
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
    setCreditCardNumber(cardNumberFormatted)
    validateCard()
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
    <div className="p-8">
      <h2 className="font-bold text-center text-xl py-4 ">
        Welcome {FirstName}
      </h2>
      <p className="text-sm text-center text-slate-600 pb-16">
        Enter your card details below:
      </p>
      <div className="flex justify-around">
        <img
          src="/visa-logo-800x450.png"
          alt="visa logo"
          className={
            cardType === 'none' || cardType === 'visa'
              ? 'h-10'
              : 'h-10 opacity-30'
          }
        />
        <img
          src="/mc_symbol_opt_45_3x.png"
          alt="mastercard logo"
          className={
            cardType === 'none' || cardType === 'mastercard'
              ? 'h-10'
              : 'h-10 opacity-30'
          }
        />
        <img
          src="/1200px-American_Express_logo_(2018).svg.png"
          alt="american express logo"
          className={
            cardType === 'none' || cardType === 'amex'
              ? 'h-10'
              : 'h-10 opacity-30'
          }
        />
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col mb-10">
          <label htmlFor="cc-number" className="text-sm text-slate-600">
            Credit Card Number
          </label>
          <input
            className="bg-transparent py-2 px-4"
            type="text"
            name="cc-number"
            id="cc-number"
            placeholder="e.g 0000 0000 0000 0000"
            maxLength={19}
            value={creditCardNumber}
            onChange={handleCardNumberChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col mr-5">
            <label htmlFor="cvc" className="text-sm text-slate-600">
              CVC
            </label>
            <input
              className="bg-transparent w-24 py-2 px-4"
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
          </div>
          <div className="flex flex-col ml-5">
            <label htmlFor="expiry" className="text-sm text-slate-600">
              Expiry
            </label>
            <input
              className="bg-transparent w-24 py-2 px-4"
              type="text"
              name="expiry"
              id="expiry"
              placeholder="MM/YY"
              maxLength={5}
              value={expiry}
              onChange={handleDateChange}
              required
            />
          </div>
        </div>
        <button className="mt-10  py-2 px-4 w-full bg-gradient-to-br from-sky-500 to-sky-700 text-sky-100 text-lg font-bold rounded-lg hover:shadow-xl cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  )
}
