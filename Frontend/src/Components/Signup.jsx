import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import { useState } from 'react';

function Signup() {
  const [signupData , setsignupData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const changeHandler = (event)=> {
    setsignupData((prevData) => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  function submitHandler(e){
    e.preventDefault();
    axios.post("/user/signup",
      {username: signupData.username,
      email: signupData.email,
      password: signupData.password,}
    )
  }

  return (
    <div className='flex justify-between flex-col mx-96 bg-slate-400'>
      <h1 className='text-center text-6xl my-2'>Sign up</h1>
      <form action="/" method="post" className=' flex justify-between flex-col px-24 my-6'>
          <div className=' flex justify-between m-4 text-lg'>
              <label>Enter your username</label>
              <input type="text" onChange={changeHandler} placeholder='username' name='username' />
          </div>

          <div className=' flex justify-between m-4 text-xl'>
              <label>Enter your email</label>
              <input type="email" onChange={changeHandler} placeholder='email' name='email'/>
          </div>

          <div className=' flex justify-between m-4 text-lg'>
              <label>Enter your password</label>
              <input type="password" onChange={changeHandler} placeholder='password' name='password'/>
          </div>

          <div className='mx-44 my-5'>
            <button onClick={submitHandler} className='bg-black text-white border-white border-2 hover:bg-slate-400 rounded-lg p-2'>Sign Up</button>
          </div>

      </form>

      <h1 className='text-center'>Already have an Account? <Link className=' text-blue-600' to="/user/login"> Click to login </Link> </h1>
    </div>
  )
}

export default Signup