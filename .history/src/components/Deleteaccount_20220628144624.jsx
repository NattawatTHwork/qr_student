import React from 'react'

const Deleteaccount = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      {!error ? 
      null :(
      <div className={"text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500"}>
        <span className="text-xl inline-block mr-5 align-middle">
          <i className="fas fa-bell" />
        </span>
        <span className="inline-block align-middle mr-8">
          <b className="capitalize">{error}</b>
        </span>
        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={() => setError(false)}>
          <span>×</span>
        </button>
      </div>)}

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