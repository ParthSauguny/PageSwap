import React from 'react'
import {Link} from "react-router-dom"

function Signup() {
  return (
    <div className='flex justify-between flex-col mx-96 bg-slate-800'>
      <h1 className='text-center text-6xl my-2'>Sign up</h1>
      <form action="/" method="post" className=' flex justify-between flex-col px-24 my-6'>
          <div className=' flex justify-between m-4 text-lg'>
              <label>Enter your username</label>
              <input type="text" placeholder='username' name='username' />
          </div>

          <div className=' flex justify-between m-4 text-xl'>
              <label>Enter your email</label>
              <input type="email" placeholder='email' name='email'/>
          </div>

          <div className=' flex justify-between m-4 text-lg'>
              <label>Enter your password</label>
              <input type="password" placeholder='password' name='password'/>
          </div>

          <div className='mx-44 my-5'>
            <button  className='bg-black hover:bg-slate-400 rounded-lg p-2'>Sign Up</button>
          </div>

      </form>

      <h1 className='text-center'>Already have an Account? <Link className=' text-blue-200' to="/user/login"> Click to login </Link> </h1>
    </div>
  )
}

export default Signup