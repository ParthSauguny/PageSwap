import React from 'react'
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className='flex justify-between flex-col mx-96 bg-amber-600'>
      <h1 className='text-center text-6xl my-2'>Login</h1>
      <form action="/" method="post" className=' flex justify-between flex-col px-24 my-6'>
          <div className=' flex justify-between'>
              <label>Enter your email</label>
              <input type="email" placeholder='email' />
          </div>

          <div className=' flex justify-between'>
              <label>Enter your password</label>
              <input type="password" placeholder='password' />
          </div>

          <div>
            <button className=' bg-green-600 border-orange-500 border-2 rounded-lg p-2'>Login</button>
          </div>

      </form>

      <h1>New User? <Link className=' text-pink-400' to="/user/signup"> Register yourself here </Link> </h1>
    </div>
  )
}

export default Login