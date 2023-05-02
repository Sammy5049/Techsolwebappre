import React from 'react';
import whitetechol from '../Images/LOGOsolcopy.png';
import {MdKeyboardArrowRight, MdCall, MdAttachEmail} from 'react-icons/md';
import {GrFacebook} from 'react-icons/gr';
import {ImInstagram} from 'react-icons/im';
import {BsLinkedin} from 'react-icons/bs';
import {FaWhatsappSquare, FaTwitterSquare} from 'react-icons/fa';

import {  useNavigate } from "react-router";


const Footer = () => {

  // const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer>
     <div className="w-full px-28 py-16 bg-blue-800 grid lg:grid-cols-4 md:grid-cols-4 gap-16 mx-auto">

      <div>
       <img className='h-6 mt-2 mb-8' src={whitetechol} alt="logo sol" />
       <p className='mb-8 text-lg text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ratione neque at, cupiditate magnam illo.
       </p>
        <div className='flex items-center space-x-4'>
          <a target={'_blank'} rel='noreferrer' href="https://www.facebook.com/adeola.dammy/"><GrFacebook className=' cursor-pointer text-white hover:text-gray-400 ease-in-out' size={30} /></a>
          <a target={'_blank'} rel='noreferrer' href="https://www.facebook.com/adeola.dammy/"><ImInstagram className=' cursor-pointer text-white hover:text-gray-400 ease-in-out' size={30} /></a>
          <a target={'_blank'} rel='noreferrer' href="https://www.facebook.com/adeola.dammy/"><BsLinkedin className=' cursor-pointer text-white hover:text-gray-400 ease-in-out' size={30} /></a>
          <a target={'_blank'} rel='noreferrer' href="https://www.facebook.com/adeola.dammy/"><FaWhatsappSquare className=' cursor-pointer text-white hover:text-gray-400 ease-in-out' size={30} /></a>
          <a target={'_blank'} rel='noreferrer' href="https://www.facebook.com/adeola.dammy/"><FaTwitterSquare className=' cursor-pointer text-white hover:text-gray-400 ease-in-out' size={30} /></a>
      
        </div>
      </div>

      <div>
        <h2 className='text-2xl mb-8 text-gray-300'>Our Company</h2>
        <div>
          <div className='flex items-center'>
            <MdKeyboardArrowRight color='white' size={25} />  
            <p onClick={() => navigate('/')}  className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>Home</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <MdKeyboardArrowRight color='white' size={25} />
            <p className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>About Us</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
          <MdKeyboardArrowRight color='white' size={25} />
            <p className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>Work</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
          <MdKeyboardArrowRight color='white' size={25} />
            <p className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>Price</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <MdKeyboardArrowRight color='white' size={25} />
            <p className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>Contact</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-2xl mb-8 text-gray-300 leading-10'>Our Works</h2>
        <div>
          <div className='flex items-center'>
            <MdKeyboardArrowRight color='white' size={25} />
            <p className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>Branding</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
           <MdKeyboardArrowRight color='white' size={25} />
            <p className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>Computer Repair</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <MdKeyboardArrowRight color='white' size={25} />
            <p className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>Logo Design</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
           <MdKeyboardArrowRight color='white' size={25} />
            <p className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>Web Development</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
          <MdKeyboardArrowRight color='white' size={25} />
            <p className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>Graphic</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-2xl mb-8 text-gray-300'>For Client</h3>
         <div  className='flex space-x-2 items-center'>
            <MdCall color='white' />
            <a href='Tel:23470544477908' className='text-lg text-gray-300  cursor-pointer hover:text-gray-400 ease-in-out leading-10'>23470-544-4779-08</a>
          </div>

           <div  className='flex space-x-2 items-center'>
            <MdAttachEmail color='white' />
            <a href='mailto:samadedammy@gmail.com' className='text-lg text-gray-300 cursor-pointer hover:text-gray-400 ease-in-out leading-10'>info@Techsol.com</a>
          </div>

      </div>

     </div>

     
     <div className='px-28 pt-4 pb-8 flex justify-between items-center flex-wrap bg-blue-900'>
      <p className='text-gray-300 text-xl'>&copy; Copyright 2023 Techsol Company. All Rights Reserved.</p>
      <p className='text-gray-300 text-xl'>Designed by <span onClick={() => navigate('/')} className='font-bold cursor-pointer hover:text-gray-400 ease-in-out'> TechSol</span> </p>
     </div>

    </footer>
  )
}

export default Footer