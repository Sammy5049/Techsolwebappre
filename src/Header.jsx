import React, { useState } from 'react'
import './Header.css'
import I4g from './Images/LOGOsol.png'
import {MdNotificationsNone} from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineSetting, AiOutlineClose} from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [harmshow, setHarmshow] = useState(false)

  const handleHarmshow = () => {
    setHarmshow(!harmshow)
  }

  return (
    <div className='bg-white border-b w-full lg:fixed z-20 py-0 md:px-10 xl:px-20 2xl:px-28 top-0 shadow-2xl'>
     <header className='flex py-4 xl:gap-6 justify-between m-auto items-center md:container max-w-full'>

      <div className='hidden lg:block'>
        
     <img className='h-14' src={I4g} alt="logo" />
      </div>


        <div>
         <ul className='hidden lg:flex items-center  md:space-x-12'>
          <li onClick={() => navigate('/')} className={`px-5 py-2 text-lg ${(location.pathname === '/' && 'bg-blue-700 text-white rounded-3xl hover:rounded-3xl' ) } cursor-pointer hover:border-b-blue-700 font-light text-black-400 border-b-[4px] hover:rounded-3xl  border-b-transparent`}>Home</li>
          <li onClick={() => navigate('/about')} className={`px-5 py-2 text-lg ${(location.pathname === '/about' && 'bg-blue-700 text-white rounded-3xl hover:rounded-3xl' ) } cursor-pointer hover:border-b-blue-700 font-light text-black-400  border-b-[4px] hover:rounded-3xl border-b-transparent`}>About</li>
          <li onClick={() => navigate('/work')} className={`px-5 py-2 text-lg ${(location.pathname === '/work' && 'bg-blue-700 text-white rounded-3xl hover:rounded-3xl' ) } cursor-pointer hover:border-b-blue-700 font-light text-black-400  border-b-[4px] hover:rounded-3xl   border-b-transparent`}>Work</li>
          <li onClick={() => navigate('/pricing')} className={`px-5 py-2 text-lg ${(location.pathname === '/pricing' && 'bg-blue-700 text-white rounded-3xl hover:rounded-3xl' ) } cursor-pointer hover:border-b-blue-700 font-light text-black-400  border-b-[4px] hover:rounded-3xl   border-b-transparent`}>Pricing</li>
          <li onClick={() => navigate('/contact')} className={`px-5 py-2 text-lg ${(location.pathname === '/contact' && 'bg-blue-700 text-white rounded-3xl hover:rounded-3xl' ) } cursor-pointer hover:border-b-blue-700 font-light text-black-400 border-b-[4px] hover:rounded-3xl   border-b-transparent`}>Contact</li>
         </ul>
        </div>


      
        



        <div>
          <ul className='hidden lg:flex space-x-8'>
            <div className='relative'>
            <li> <MdNotificationsNone size={28} className='text-blue-700 cursor-pointer wiggle hover:text-gray-500 ease-in-out' /> </li>
           
            <div className="w-2 hover:animate-ping ease-in-out rounded absolute h-2 top-1 right-1 bg-red-600"></div>

            </div>
            <li> <AiOutlineSetting size={28} className='text-blue-700 cursor-pointer hover:text-gray-500 ease-in-out' /> </li>
            <li> <BiUserCircle size={28} className='text-blue-700 cursor-pointer hover:text-gray-500 ease-in-out' /> </li>
           
          </ul>
        </div>
     </header>

       {/* media screen display for large screen downwards */}

        <div className='px-5 md:px-0 -mt-5 lg:hidden h-auto'>

      <div className='flex justify-between m-auto items-center max-w-lg sm:max-w-xl md:max-w-3xl'>


      <div>
        
     <img className='h-14 -ml-3' src={I4g} alt="logo" />
      </div>

      <div className='cursor-pointer transition-all ease-in-out delay-300' onClick={handleHarmshow}>
        {!harmshow ? 
        
        <RxHamburgerMenu size={35} /> :
        <AiOutlineClose size={35} /> 


      }
      </div>

      </div>

      {
        harmshow && (

        <div className='flex transition-all ease-in-out duration-1000 flex-col justify-center items-center mx-auto space-y-5'>
         <ul className='items-center justify-center w-full mx-auto  gap-5 lg:hidden '>
          {/* <div className='w-96 bg-blue-600'>
            <li className='inline-block'>menument</li>
          </div> */}
          <li onClick={() => navigate('/')} className={` ${(location.pathname === '/' && 'text-blue-600 font-semibold')}   max-w-lg sm:max-w-xl  md:max-w-3xl mx-auto text-center  py-2 text-lg cursor-pointer hover:'bg-blue-700 rounded-3xl font-light text-black-400 hover:rounded-3xl hover:bg-blue-700 hover:text-white border-b-transparent`}>Home</li>

           <li onClick={() => navigate('/about')} className={` ${(location.pathname === '/about' && 'text-blue-600 font-semibold')}   max-w-lg sm:max-w-xl  md:max-w-3xl mx-auto text-center  py-2 text-lg cursor-pointer hover:'bg-blue-700 rounded-3xl font-light text-black-400 hover:rounded-3xl hover:bg-blue-700 hover:text-white border-b-transparent`}>About</li>
 <li onClick={() => navigate('/work')} className={` ${(location.pathname === '/work' && 'text-blue-600 font-semibold ')}   max-w-lg sm:max-w-xl  md:max-w-3xl mx-auto text-center  py-2 text-lg cursor-pointer hover:'bg-blue-700 rounded-3xl font-light text-black-400 hover:rounded-3xl hover:bg-blue-700 hover:text-white border-b-transparent`}>Work</li>

 <li onClick={() => navigate('/pricing')} className={` ${(location.pathname === '/pricing' && 'text-blue-600 font-semibold')}   max-w-lg sm:max-w-xl  md:max-w-3xl mx-auto text-center  py-2 text-lg cursor-pointer hover:'bg-blue-700 rounded-3xl font-light text-black-400 hover:rounded-3xl hover:bg-blue-700 hover:text-white border-b-transparent`}>Pricing</li>
         <li onClick={() => navigate('/contact')} className={` ${(location.pathname === '/contact' && 'text-blue-600 font-semibold')}   max-w-lg sm:max-w-xl  md:max-w-3xl mx-auto text-center  py-2 text-lg cursor-pointer hover:'bg-blue-700 rounded-3xl font-light text-black-400 hover:rounded-3xl hover:bg-blue-700 hover:text-white border-b-transparent`}>Contact</li>
         </ul>

         <div className='lg:hidden w-full pb-10'>
          <ul className='flex justify-between m-auto items-center max-w-lg sm:max-w-xl md:max-w-3xl px-3'>
            <div className='relative'>
            <li> <MdNotificationsNone size={28} className='text-blue-700 cursor-pointer wiggle hover:text-gray-500 ease-in-out' /> </li>
           
            <div className="w-2 hover:animate-ping ease-in-out rounded absolute h-2 top-1 right-1 bg-red-600"></div>

            </div>
            <li> <AiOutlineSetting size={28} className='text-blue-700 cursor-pointer hover:text-gray-500 ease-in-out' /> </li>
            <li> <BiUserCircle size={28} className='text-blue-700 cursor-pointer hover:text-gray-500 ease-in-out' /> </li>
           
          </ul>
        </div>
        </div>
        )
      }

        </div>
    </div>
  )
}

export default Header