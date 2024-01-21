import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => (
    setNav(!nav)
  )

  const handleLogout = async () => {
    try {
      await logout();
      setNav(!nav);
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-black'>QR STUDENT</h1>
      {!user ?c
      <ul>
        <li></li>
      </ul> :
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to='/'>HOME</Link></li>
        <li className='p-4'><Link to='/scan'>SCAN</Link></li>
        <li className='p-4'><Link to='/setting'>SETTING</Link></li>
        <li className='p-4'><button onClick={handleLogout}>LOGOUT</button></li>
      </ul>}
      {!user ? '' :
        <div>
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%] top-0 h-full w-[60%] ease-in-out duration-500'}>
            <ul className='uppercase p-4'>
              <li className='p-4 border-b border-gray-600 text-center'><Link to='/' onClick={handleNav}>HOME</Link></li>
              <li className='p-4 border-b border-gray-600 text-center'><Link to='/scan' onClick={handleNav}>SCAN</Link></li>
              <li className='p-4 border-b border-gray-600 text-center'><Link to='/setting' onClick={handleNav}>SETTING</Link></li>
              <li className='p-4 border-b border-gray-600 text-center'><button onClick={handleLogout}>LOGOUT</button></li>
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar