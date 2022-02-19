import React from 'react'


function LoginPage() {
  return (
    <div className='d-flex j-center column w300' >
      <h2>User Login Form</h2>

      <input type="text" placeholder='user name' />
      <input type="text" placeholder='password' />
      <input type="button" value='Login'/>
     
    </div>
  )
}

export default LoginPage