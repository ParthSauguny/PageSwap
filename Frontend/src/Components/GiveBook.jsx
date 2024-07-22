import React from 'react'

function GiveBook() {
  return (
    <>
    <div className='text-center text-9xl font-serif'>
      Donate an E-Book
    </div>

    <div className='flex flex-col justify-between my-4 mx-96 text-2xl py-4'>
      <form action='/' method="post" enctype="multipart/form-data">
        <div className='flex justify-evenly m-4'>
          <label>title of the book</label>
          <input className='border-2 border-white' type="text" placeholder='book title' name='title' />
        </div>

        <div className='flex justify-evenly m-6 py-4'>
          <label> Genre of the book </label>
          <select name="genre" className=' border-2 border-white'>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="mystery">Mystery</option>
            <option value="study-related">Study-related</option>
            <option value="romantic">Romantic</option>
          </select>
        </div>

        <div>
          <input type="file" name="book_file" required/>
          <button type="submit" className='bg-black border-white border-2 rounded-xl p-2 my-4 mx-3 hover:bg-slate-500'> Donate Book </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default GiveBook