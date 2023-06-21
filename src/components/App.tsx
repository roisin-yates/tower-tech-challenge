import React, { useState } from 'react'
import Card from './Card'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoArrowBack } from 'react-icons/io5'
import Menu from './Menu'

export default function App() {
  const User = {
    FirstName: 'Roisin',
  }

  const [menu, setMenu] = useState(false)

  return (
    <div className="bg-sky-200 h-screen flex justify-center items-center flex-wrap">
      <div className="bg-gradient-to-bl from-slate-200 to-slate-200 via-white w-96 rounded-lg shadow-xl h-custom-height">
        <div className="border-b-2">
          <header className="p-4 flex items-center text-slate-700">
            {menu ? (
              <>
                <IoArrowBack
                  className="text-2xl hover:text-blue-800 cursor-pointer"
                  onClick={() => setMenu(false)}
                  data-testid="back-button"
                />
                <h1 className="pl-10">Menu</h1>
              </>
            ) : (
              <>
                <GiHamburgerMenu
                  className="text-2xl hover:text-blue-800 cursor-pointer"
                  onClick={() => setMenu(true)}
                  data-testid="burger-icon"
                />
                <h1 className="pl-10">Register card form</h1>
              </>
            )}
          </header>
        </div>
        <div>{menu ? <Menu /> : <Card FirstName={User.FirstName} />}</div>
      </div>
    </div>
  )
}
