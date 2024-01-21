import React from 'react'

const Updatepassword = () => {
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
          <label className='py-2 font-medium'>Ne</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded' type='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3 rounded' type='password' />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white rounded'>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Updatepassword