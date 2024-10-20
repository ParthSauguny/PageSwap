import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <>
        <br />
        <br />
        <div className='text-center my-4 py-4 text-6xl font-extrabold font-mono'>
          PageSwap
            <div>Where books find new adventures!</div>
        </div>

        <h1 className='text-center my-2 py-4 text-2xl font-semibold font-sans'>A community made by the book enthusiasts, for the book enthusiasts.</h1>

        <div className='flex justify-center text-3xl my-10'>
          Start sharing books and knowledge. Register today!
          <Link to="/user/signup"> <button className='rounded-2xl mx-2 text-3xl border-2 border-white p-1 text-white hover:bg-gray-400 hover:text-gray-700 bg-black'> Register </button> </Link>
        </div>
        
        <div className='flex justify-center py-4 my-4'>
          <div className='text-2xl'>
              Add a book 
              <Link to="/book/add-book"> <button className=' bg-black text-white border-white border-2 rounded-3xl p-2 my-4 mx-3 hover:bg-slate-700'> Click Here </button> </Link>
          </div>
          <div className='text-2xl'>
              View books
              <Link to="/books"> <button className=' bg-black text-white border-white border-2 rounded-3xl p-2 my-4 mx-3 hover:bg-slate-700'> Click Here </button> </Link>
          </div>
        </div>
    </>
  )
}

export default Home