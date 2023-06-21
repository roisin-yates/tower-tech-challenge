import React, { useState } from 'react'
import Card from './Card'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoArrowBack } from 'react-icons/io5'

export default function App() {
  const User = {
    FirstName: 'Roisin',
  }

  const [menu, setMenu] = useState(false)

  return (
    <div className="bg-sky-200 h-screen flex justify-center items-center">
      <div className="bg-gradient-to-bl from-slate-200 to-slate-200 via-white w-96 rounded-lg shadow-xl">
        <div className="border-b-2">
          <div className="p-4 flex items-center text-slate-700">
            {menu ? (
              <>
                <IoArrowBack
                  className="text-2xl hover:text-blue-800 cursor-pointer"
                  onClick={() => setMenu(false)}
                  data-testid="back-button"
                />
                <p className="pl-10">Menu</p>
              </>
            ) : (
              <>
                <GiHamburgerMenu
                  className="text-2xl hover:text-blue-800 cursor-pointer"
                  onClick={() => setMenu(true)}
                  data-testid="burger-icon"
                />
                <p className="pl-10">Register card form</p>
              </>
            )}
          </div>
        </div>
        <div>
          {menu ? (
            <p>There will be a menu here</p>
          ) : (
            <Card FirstName={User.FirstName} />
          )}
        </div>
      </div>
    </div>
  )
}
