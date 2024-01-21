import React from 'react'

const Reset = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Reset Password</h1>
        <p className='py-2'>
        Please enter your email address.{' '}
          <Link to='/signup' className='underline'>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded' type='email' />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white rounded'>
          ฑำ
        </button>
      </form>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  )
}

export default Reset