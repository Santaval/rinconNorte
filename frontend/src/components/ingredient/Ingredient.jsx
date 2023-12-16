import React from 'react'
import useIngredient from '../../hooks/useIngredient'

function Ingredient({ingredientId: id, milk, quantity}) {
    const {ingredient} = useIngredient(id)
    if (!ingredient) return null
  return (
    <div className='flex items-center gap-3 justify-between'>
      <span className='text-md font-semibold'>
        {ingredient.name}
      </span>
        <span className='text-md text-primary '>
           {(milk * quantity).toFixed(3)} <span className='text-foreground'>{ingredient.measuramentUnit}</span>
        </span>
    </div>
  )
}

export default Ingredient
