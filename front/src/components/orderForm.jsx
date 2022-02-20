import { useEffect, useRef, useState }from 'react'
import OrderCard from './OrderCard'


function OrderForm() {

  const [error, setError] = useState(null)
  const [getOrders, setOrders] = useState([])

  const orderNameRef = useRef()
  const productRef = useRef()
  const quantityRef = useRef()

  async function createOrder() {
    const order = {
      orderName: orderNameRef.current.value,
      product: productRef.current.value,
      quantity: quantityRef.current.value,
      secretKey: localStorage.getItem('secret')
    }

    const options = {
      method: "POST",
      headers: { 
        "content-type": "application/json"
      },
      body:JSON.stringify(order)
    }

    const res = await fetch("http://localhost:4000/createorder", options)
    const data = await res.json()
    console.log(data);

    if(data) {
      console.log('order created');

      fetch("http://localhost:4000/allOrders")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrders(data.orders)
      })
     
    } else {
      setError(data.message)
    }
  }

    useEffect(() => {
      fetch("http://localhost:4000/allOrders")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrders(data.orders)
      })
    }, [])

    function orderUpdate(){
      
    }

  return (
    <div className='d-flex column'>
      
      <input type="text" placeholder='Order Name' ref={orderNameRef} />
      <input type="text" placeholder='Product' ref={productRef} />
      <input type="text" placeholder='Quntity' ref={quantityRef} />
      <input type='button' value="Submit Order" onClick={createOrder} />
      <h3>{error}</h3>
      
      <div className='d-flex column'> 
      Orders:
        <div className=' d-flex cartItem'>
          <h6>Order Name</h6>
          <h6>Product</h6>
          <h6>Quantity</h6>
        
        </div>
         {getOrders.map((x, i) => <OrderCard key={x._id} order={x} onClick={orderUpdate}/>)}
      </div>
    </div>
  )
}

export default OrderForm