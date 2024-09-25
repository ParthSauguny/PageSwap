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
        
        <div className='flex justify-center py-4 my-4'>
          <div className='text-2xl'>
              Add a book 
              <Link to="/book/add-book"> <button className=' bg-black text-white border-white border-2 rounded-xl p-2 my-4 mx-3 hover:bg-slate-700'> Click Here </button> </Link>
          </div>
        </div>
    </>
  )
}

export default Home