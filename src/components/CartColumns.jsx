import React from 'react'

function CartColumns() {
  return (
    <div className='w-full'>
        <div className='flex justify-evenly gap-x-4'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </div>
  )
}

export default CartColumns