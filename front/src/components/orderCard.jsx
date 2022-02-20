import React from 'react'
import {useNavigate} from "react-router-dom";



const OrderCard = ({order}) => {
  const nav = useNavigate()
  function navToPage() {
    nav("/order/"+order._id)
  }

  return (
    <div onClick={navToPage} className='d-flex cartItem'>
      <p>{order.orderName}</p>
      <p>{order.product}</p>
      <p>{order.quantity}</p>
    </div>
  )
}

export default OrderCard