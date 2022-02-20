import {useRef, useState} from 'react'
import {useNavigate} from "react-router-dom"

function CreateUserPage() {

  const nav = useNavigate()

  const emailRef = useRef()
  const password1Ref = useRef()
  const password2Ref = useRef()

  const [error, setError] = useState(null)

  
  async function createUser() {
    
    if(password1Ref.current.value !== password2Ref.current.value){
      setError('password does not match')
      return 
    }
    const user = {
        email: emailRef.current.value,
        password1: password1Ref.current.value,
        password2: password2Ref.current.value
    }
    const options = {
      method: "POST",
      headers: { 
        "content-type": "application/json"
      },
      body:JSON.stringify(user)
    }
    const res = await fetch("http://localhost:4000/registerUser", options)
    const data = await res.json()
    console.log(data);

    if(data.success) {
      console.log('user info from back');
      nav("/")
    }else {
      setError(data.message)
    }
  }


  return (
    <div className='d-flex j-center column'>
        <h2>Create User Form</h2>

        <input type="text" placeholder='email' ref = {emailRef}/>
        <input type="text" placeholder='password1' ref = {password1Ref}/>
        <input type="text" placeholder='password2' ref={password2Ref}/>
        <button onClick={createUser}>Create User</button>
        <h3>{error}</h3>

    </div>
  )
}

export default CreateUserPage