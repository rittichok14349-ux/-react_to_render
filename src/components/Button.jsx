import React from 'react'

const Button = ({ nameButton }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {nameButton}
    </button>
  )
}

export default Button
