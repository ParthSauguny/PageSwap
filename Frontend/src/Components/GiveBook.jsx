import React from 'react'

function GiveBook() {
  return (
    <div className='flex flex-col justify-between my-4 mx-96 text-2xl'>
      <form action="/" method="post">
        <div className='flex justify-evenly m-4'>
          <label>title of the book</label>
          <input className='border-2 border-white' type="text" placeholder='book title' name='title' />
        </div>

        <div className='flex justify-evenly m-6'>
          <label> Genre of the book </label>
          <select name="genre" className=' border-2 border-white'>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="mystery">Mystery</option>
            <option value="study-related">Study-related</option>
            <option value="romantic">Romantic</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default GiveBook