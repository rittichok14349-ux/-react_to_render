import React from 'react'
import Card from '../components/Card'

const Products = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Our Products</h2>
      <Card title="Product A" description="This is product A." />
      <Card title="Product B" description="This is product B." />
    </div>
  )
}

export default Products
