import React, { useState } from 'react'
import Card from './Card'

export default function App() {
  const User = {
    FirstName: 'Roisin',
  }

  return (
    <div className="bg-sky-200 h-screen flex justify-center items-center">
      <div className="bg-gradient-to-bl from-slate-200 to-slate-200 via-white w-96 p-8 rounded-lg shadow-xl">
        <Card FirstName={User.FirstName} />
      </div>
    </div>
  )
}
