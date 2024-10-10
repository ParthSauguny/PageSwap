import React, { useState } from 'react'
import BorrowForm from './BorrowForm';
import ExchangeForm from './ExchangeForm';

function OpenBook() {
  const [willBorrow , setWillborrow] = useState(true);

  const handleBorrowClick = () => {
    setWillborrow(true);
  };

  const handleExchangeClick = () => {
    setWillborrow(false);
  };

  return (
    <div>
      
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
          willBorrow ? <BorrowForm/> : <ExchangeForm/>
        }
      </div>

    </div>
  )
}

export default OpenBook