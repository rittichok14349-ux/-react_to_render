import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-700 p-2 border border-red-400 rounded mb-4">
      {message}
    </div>
  )
}

export default ErrorMessage
