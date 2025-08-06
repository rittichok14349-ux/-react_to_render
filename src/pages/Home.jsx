import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Site</h1>
      <p className="mb-4">Explore our products and learn more about us.</p>
      <Link to="/products">
        <Button nameButton="Browse Products" />
      </Link>
    </div>
  )
}

export default Home
