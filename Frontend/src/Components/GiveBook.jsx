import React from 'react'

function GiveBook() {
  return (
    <div className='flex flex-col justify-between my-4 mx-96 text-2xl'>
      <form action="/" method="post">
        <div className='flex justify-evenly'>
          <label>title of the book</label>
          <input className='border-2 border-white' type="text" placeholder='book title' />
        </div>
      </form>
    </div>
  )
}

export default GiveBook