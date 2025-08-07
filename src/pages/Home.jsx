import React from 'react'
import Button from '../components/Button'
import CardList from '../components/CardList'

const Home = () => {
  return (
    <>
    <section className='h-screen bg-cover bg-center flex items-center justify-between text-white' style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/06/21/07/50/dogs-7275314_960_720.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='container absolute top-50 right-0 left-100 mx-auto p-4'>
                    <h2 className='text-5xl font-bold mb-4 text-blue-800'>Welcome to the Animal Paradise</h2>
                    <p className='text-white mb-6 text-lg font-semibold'>Browse through our collection of cards and discover amazing designs.</p>
                    <Button nameButton="Explore Cards" />
                </div>
          </section>
            <main className='container mx-auto my-8 p-4'>
                <h2 className='text-2xl font-semibold mb-4'>Card Gallery Reccommended</h2>
                <p className='text-gray-700 mb-4'>Explore our collection of cards showcasing various items.</p>
                <hr className='text-purple-200' />
                <CardList />
                <div className='flex justify-end mt-4'>
                    <Button nameButton="Load More" />
                </div>
            </main>
    </>
  )

}

export default Home
