import React from 'react'
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className='flex justify-between flex-col mx-96 bg-amber-600'>
      <h1 className='text-center text-6xl my-2'>Login</h1>
      <form action="/" method="post" className=' flex justify-between flex-col px-24 my-6'>
          <div className=' flex justify-between m-4 text-xl'>
              <label>Enter your email</label>
              <input type="email" placeholder='email' />
          </div>

          <div className=' flex justify-between m-4 text-lg'>
              <label>Enter your password</label>
              <input type="password" placeholder='password' />
          </div>

          <div className='mx-48 my-6'>
            <button type='submit' className=' bg-green-600 rounded-lg p-2 border-fuchsia-800 hover:border-4'>Login</button>
          </div>

      </form>

      <h1 className='text-center'>New User? <Link className=' text-green-800' to="/user/signup"> Register yourself here </Link> </h1>
    </div>
  )
}

export default Login