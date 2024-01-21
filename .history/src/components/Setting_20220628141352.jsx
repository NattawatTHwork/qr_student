import React from 'react'
import { Link } from 'react-router-dom';

const Setting = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <button className='border border-black hover:bg-gray-300 w-full p-4 my-2 rounded'>
        <Link to='/updatepassword'>Update Password</Link>
      </button>
      <button className='border border-black hover:bg-gray-300 w-full p-4 my-2 rounded'>Delete Account</button>
    </div>
  )
}

export default Setting