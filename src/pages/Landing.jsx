import React from 'react'

const Landing = ({ user }) => {
  return (
    <div>
      <h1>{user ? "Welcome home." : "Come on in."}</h1>
    </div>
  )
}

export default Landing