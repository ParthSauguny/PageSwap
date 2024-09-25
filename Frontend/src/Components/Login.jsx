import React, { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify';

function Login() {
  const [logindata,setLogindata] = useState({email:"" , password:""});

  function changehandler(event){
    setLogindata((prevdata)=>{
      return {
        ...prevdata,
        [event.target.name] : event.target.value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    axios.post("/user/login" , {
      email: logindata.email,
      password: logindata.password,
    })
    toast.success("logged in successfully !!!!!");
  }

  return (
    <div className='flex justify-between flex-col mx-96 bg-slate-400'>
      <h1 className='text-center text-6xl my-2'>Login</h1>
      <form action="" method="post" className=' flex justify-between flex-col px-24 my-6'>
          <div className=' flex justify-between m-4 text-xl'>
              <label>Enter your email</label>
              <input type="email" placeholder='enter email' name="email" onChange={changehandler} value={logindata.email}/>
          </div>

          <div className=' flex justify-between m-4 text-lg'>
              <label>Enter your password</label>
              <input type="password" placeholder='enter password' name="password" onChange={changehandler} value={logindata.password}/>
          </div>

          <div className='mx-48 my-6'>
            <button type='submit' onClick={submitHandler} className='bg-black text-white border-white border-2 hover:bg-slate-400 rounded-lg p-2'>Login</button>
          </div>

      </form>

      <h1 className='text-center'>New User? <Link className=' text-blue-600' to="/user/signup"> Register yourself here </Link> </h1>
    </div>
  )
}

export default Login