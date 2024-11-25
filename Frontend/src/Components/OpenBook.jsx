import React, { useState } from 'react'
import BorrowForm from './BorrowForm';
import ExchangeForm from './ExchangeForm';
import { useLocation } from 'react-router-dom';

function OpenBook() {
  const [willBorrow , setWillborrow] = useState(true);
  const loc = useLocation();
  const {key , title , owner_id , owner_name} = loc.state;

  const handleBorrowClick = () => {
    setWillborrow(true);
  };

  const handleExchangeClick = () => {
    setWillborrow(false);
  };

  return (
    <div>
      <h1 className='flex justify-center text-4xl text-orange-900'> {title} - {owner_name} </h1>
      
      <div className='flex flex-row p-4 justify-around mx-auto'>
        <button onClick={handleBorrowClick}
          className='rounded-2xl border-2 border-pink-700 bg-blue-900 text-fuchsia-300 px-2 py-1 text-4xl'
        >
          Borrow
        </button>

        <button onClick={handleExchangeClick}
          className='rounded-2xl border-2 border-pink-700 bg-blue-900 text-fuchsia-300 px-2 py-1 text-4xl'
        >
          Exchange
        </button>
      </div>

      <div>
        {
          willBorrow ? <BorrowForm book_id={key} book={title} owner={owner_id} /> : <ExchangeForm book_id={key} book={title} owner={owner_id} />
        }
      </div>

    </div>
  )
}

export default OpenBook