import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <>
        <div className='text-center my-4 py-4 text-6xl font-extrabold font-mono'>
          Welcome to PageSwap!
        </div>

        <h1 className='text-center my-4 py-4 text-2xl font-semibold font-sans'>A community made by the book enthusiasts, for the book enthusiasts.</h1>
        
        <div className='text-2xl'>
          Wanna Donate a book? Click here.
          <Link to="book/donate"> <button className='bg-black border-white border-2 rounded-xl p-2'>Donate an E-Book</button> </Link>
        </div>
    </>
  )
}

export default Home