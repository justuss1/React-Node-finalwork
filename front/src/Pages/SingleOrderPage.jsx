import {useEffect, useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"


function SingleOrderPage() {
    const nav = useNavigate()
    const [order, setOrder] = useState([])

    const {id} = useParams()

    useEffect(()=> {
        fetch("http://localhost:4000/order/"+id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrder(data.order)
            })
    }, [])


    function deleteOrder() {
        fetch("http://localhost:4000/delete/"+id)
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    nav('/createorder')
                }
            })
    }

  return (
    <div>
        {order && <div className='d-flex column cartItem space-btw  p-20'> 
            <h1>Order Name: {order.orderName}</h1>
            <h1>Product: {order.product}</h1>
            <h1>Quantity: {order.quantity}</h1>
            <div className='space-btw'><button onClick={deleteOrder}>Delete</button>
            <button>Update</button></div>
            </div>}

    </div>
  )
}

export default SingleOrderPage