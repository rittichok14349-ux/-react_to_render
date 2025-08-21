import React from 'react'

const Button = ({ nameButton }) => {
  return (
    <button className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded">
      {nameButton}
    </button>
  )
}

export default Button
