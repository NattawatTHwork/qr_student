import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Deleteaccount = () => {
  const { deleteaccount } = UserAuth();
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await deleteaccount()
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Delete Password</h1>
        <p className='py-2'>
            Are you sure delete this account?{' '}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white rounded'>
          Delete
        </button>
      </form>
    </div>
  )
}

export default Deleteaccount