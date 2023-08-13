import React from 'react'
import AddMilk from './AddMilk'

function Process({process}) {
  return (
    <div>
        <div>
            <span className='tiny text-gray-500'>Proceso #{process.id}</span>
            
            {!process.milk || JSON.parse(process.milk).length === 0 ? <AddMilk milkArray={JSON.parse(process.milk)} id={process.id} /> : <span>Reposo</span>}
            
        </div>

    </div>
  )
}

export default Process