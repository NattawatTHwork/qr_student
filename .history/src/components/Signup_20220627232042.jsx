import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatpassword] = useState('');
  const [error, setError] = useState('')
  const { createUser, user } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password1 === password2) {
      setPassword(password1)
      console.log(password)
      // try {
      //   await createUser(email, password);
      // } catch (e) {
      //   setError(e.message);
      //   console.log(e.message);
      // }
    } else {
      setError('Your password not match.')
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      {!error ? 
      null :(
      <div className={"text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500"}>
        <span className="text-xl inline-block mr-5 align-middle">
          <i className="fas fa-bell" />
        </span>
        <span className="inline-block align-middle mr-8">
          <b>{error}</b>
        </span>
        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={() => setError(false)}>
          <span>×</span>
        </button>
      </div>)}

      <div>
        <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
        <p className='py-2'>
          Already have an account yet?{' '}
          <Link to='/' className='underline'>
            Sign in.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded' type='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword1(e.target.value)} className='border p-3 rounded' type='password' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Repeat Password</label>
          <input onChange={(e) => setPassword2(e.target.value)} className='border p-3 rounded' type='password' />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white rounded'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;