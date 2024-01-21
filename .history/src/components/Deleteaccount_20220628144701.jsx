import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Deleteaccount = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Update Password</h1>
        <p className='py-2'>
            Please enter your new password.{' '}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>New Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3 rounded' type='password' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Repeat New Password</label>
          <input onChange={(e) => setRepeatpassword(e.target.value)} className='border p-3 rounded' type='password' />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white rounded'>
          Update
        </button>
      </form>
    </div>
  )
}

export default Deleteaccount