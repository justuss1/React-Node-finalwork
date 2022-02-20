import React from 'react'


function OrderCard({order}) {
  return (
    <div className='d-flex cartItem'>
      <p>{order.orderName}</p>
      <p>{order.product}</p>
      <p>{order.quantity}</p>
    </div>
  )
}

export default OrderCard