import React from 'react'

const Card = ({ title, description }) => {
  return (
    <div className="border p-4 mb-4 shadow">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
