import React from 'react'
import { Link } from 'react-router-dom';

const Setting = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>    
      <Link to='/updatepassword'>
        <button className='border border-black hover:bg-gray-300 w-full p-4 my-2 rounded'>
            Update Password
        </button>
      </Link>
      <Link to='/deleteaccount'>
        <button className='border border-black hover:bg-gray-300 w-full p-4 my-2 rounded'>
            Delete Account
        </button>
      </Link>
    </div>
  )
}

export default Setting