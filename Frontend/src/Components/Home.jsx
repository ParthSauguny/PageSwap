import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <>
        <div className='text-center my-4 py-4 text-6xl font-extrabold font-mono'>
          Welcome to PageSwap!
        </div>

        <h1 className='text-center my-2 py-4 text-2xl font-semibold font-sans'>A community made by the book enthusiasts, for the book enthusiasts.</h1>
        
        <div className='flex flex-row p-4 mx-48'>
          <div className='text-2xl flex flex-col m-28'>
            Donate a book?
            <Link to="book/donate"> <button className=' bg-black text-white border-white border-2 rounded-xl p-2 my-4 mx-3 hover:bg-slate-700'>Donate an E-Book</button> </Link>
          </div>

          <div className='text-2xl flex flex-col m-28'>
            Exchange a book? 
            <Link to="/book/exchange"> <button className=' bg-black text-white border-white border-2 rounded-xl p-2 my-4 mx-3 hover:bg-slate-700'> Go to exchange page </button> </Link>
          </div>
        </div>

        <div>
          
        </div>
    </>
  )
}

export default Home