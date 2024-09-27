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
  <div className="flex justify-center items-center h-screen bg-gray-900">
  <div className="w-full max-w-md p-8 mx-auto bg-slate-400 shadow-lg rounded-xl">
    <h1 className="text-center text-5xl font-semibold text-gray-800 mb-6">Login</h1>
    <form action="" method="post" className="space-y-6">
      <div className="flex flex-col space-y-2">
        <label className="text-lg font-medium text-gray-700">Enter your email</label>
        <input
          type="email"
          placeholder="enter email"
          name="email"
          onChange={changehandler}
          value={logindata.email}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-lg font-medium text-gray-700">Enter your password</label>
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={changehandler}
          value={logindata.password}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full py-3 bg-black text-white border-2 border-black rounded-xl transition-colors duration-200 hover:bg-slate-100 hover:text-black hover:border-black"
        >
          Login
        </button>
      </div>
    </form>

    <h1 className="text-center mt-6 text-gray-600">
      New User?{" "}
      <Link className="text-blue-600 hover:underline" to="/user/signup">
        Register here
      </Link>
    </h1>
  </div>
  </div>
  )
}

export default Login