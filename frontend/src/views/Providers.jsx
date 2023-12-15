import React from 'react'
import ProvidersRender from '../components/provider/Render'
import { Link } from 'react-router-dom'

function Providers() {
  return (
    <main className='p-8'>
        <header className='flex justify-between items-center mb-8'>
            <h1 className='text-xl font-bold'>Proveedores</h1>
            <Link to='/providers/new' className='text-primary'>Nuevo proveedor</Link>
        </header>

        <ProvidersRender />
    </main>
  )
}

export default Providers