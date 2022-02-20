import {useRef, useState} from 'react'
import {useNavigate} from "react-router-dom"



function LoginPage() {

  const [error, setError] = useState(null)
  const [getUser, setUser] = useState()
  const nav = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  async function loginUser() {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    const options = {
      method: "POST",
      headers: { 
        "content-type": "application/json"
      },
      body:JSON.stringify(user)
    }
    const res = await fetch("http://localhost:4000/loginUser", options)
    const data = await res.json()

    if(data) {
      localStorage.setItem('secret', data.validateUser.secretKey)
      localStorage.setItem('email', data.validateUser.email)
      setUser(validateUser)
      nav("/createorder")
    } else {
      setError(data.message)
    }
  }
  

  return (
    <div className='d-flex j-center column w300' >
      <h2>User Login Form</h2>

      <input type="text" placeholder='user name' ref={emailRef}/>
      <input type="text" placeholder='password' ref={passwordRef}/>
      <input onClick={loginUser} type="button" value='Login'/>
      <h3>{error}</h3>
    </div>
  )
}

export default LoginPage