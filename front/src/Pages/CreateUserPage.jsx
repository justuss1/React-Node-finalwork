import React from 'react'

function CreateUserPage() {
  return (
    <div className='d-flex j-center column'>
        <h2>Create User Form</h2>

        <input type="text" placeholder='user name' />
        <input type="text" placeholder='password1' />
        <input type="text" placeholder='password2' />
        <button>Create User</button>


    </div>
  )
}

export default CreateUserPage