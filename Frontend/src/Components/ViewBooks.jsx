import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

function ViewBooks() {
  const [books , setBooks] = useState([]);

  useEffect(() => {
    axios.get("/book/show-books")
    .then(res => {
      setBooks(res.data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    }) , []}
  )

  return (
    <div className='my-5'>
      {books.map(book => (
        <Card 
          key={book._id} 
          title={book.title} 
          author={book.author} 
          genre={book.genre} 
          owner={book.owner.username}
          available={book.available} 
        />
      ))}
    </div>
  )
}

export default ViewBooks