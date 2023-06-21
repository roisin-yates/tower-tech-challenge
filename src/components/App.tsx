import React from 'react'
import Card from './Card'

export default function App() {
  const User = {
    FirstName: 'Roisin',
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Card FirstName={User.FirstName} />
      </header>
    </div>
  )
}
