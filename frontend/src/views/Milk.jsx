import React from 'react'
import { Link } from 'react-router-dom'
import MilkRender from '../components/milk/Render'

function Milk() {
  return (
    <main className='p-8'>
    <header className='flex justify-between items-center mb-8'>
        <h1 className='text-xl font-bold'>Leche</h1>
        <Link to='/milk/new' className='text-primary'>Nuevo registro</Link>
    </header>

    <MilkRender />
</main>
  )
}

export default Milk