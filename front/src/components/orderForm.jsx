import { useRef, useState }from 'react'

function OrderForm() {

  const [error, setError] = useState(null)

  const orderNameRef = useRef()
  const productRef = useRef()
  const quantityRef = useRef()

  async function createOrder() {
    const order = {
      orderName: orderNameRef.current.value,
      product: productRef.current.value,
      quantity: quantityRef.current.value,
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
     
    } else {
      setError(data.message)
    }
  }

  return (
    <div className=''>
      <input type="text" placeholder='Order Name' ref={orderNameRef} />
      <input type="text" placeholder='Product' ref={productRef} />
      <input type="text" placeholder='Quntity' ref={quantityRef} />
      <input type='button' value="Submit Order" onClick={createOrder} />
      <h3>{error}</h3>
    </div>
  )
}

export default OrderForm