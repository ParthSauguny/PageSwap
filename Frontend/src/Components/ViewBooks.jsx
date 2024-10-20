import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

function ViewBooks() {
  const [books , setBooks] = useState(null);

  useEffect(() => {
    axios.get("/book/show-books")
    .then(res => {
      setBooks(res.data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    })
  } , []);

  return (
    <div className='my-5'>
      {books ? (
        books.length > 0 ? (
          books.map(book => (
            <Card
              key={book._id}
              title={book.title}
              author={book.author}
              url={book.image_url}
              genre={book.genre}
              owner={book.owner?.username || 'Unknown Owner'}  // Safe access with a fallback
              available={book.available}
              address={book.address}
            />
          ))
        ) : (
          <div className='flex justify-center text-4xl'>No books available at the moment.</div> // Fallback message for null/undefined books
        )
      ) : (
        <div className='flex justify-center text-4xl'>Please register yourself first</div> // Message for empty array
      )}
    </div>
  )
}

export default ViewBooks