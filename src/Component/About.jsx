import React from 'react'
import about from '../Images/about.jpg'
import sampleteam from '../Images/sampleteam.jpg'
import artmage from '../Images/choosegirl.png'
import './About.css'
import {FcSmartphoneTablet} from 'react-icons/fc'
import {MdWebStories} from 'react-icons/md'
import {CgDesignmodo} from 'react-icons/cg'
import {SiSimilarweb} from 'react-icons/si'
import {BsLightbulbFill} from 'react-icons/bs'
import {GoTasklist} from 'react-icons/go'
import {RiFocus2Fill} from 'react-icons/ri'



const About = () => {
  return (
    <>

    <div className='grid lg:grid-cols-2 justify-center gap-10 py-24 lg:py-14 mt-20 mx-auto bg-gray-100 lg:h-screen shadow-md items-center px-10 md:px-32'>
     <div className='max-w-full'>
      <h1 className='text-red-700 font-medium text-5xl'>About Us</h1>
      <div className='bg-red-500 my-5 w-44 h-2'></div>
      <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum delectus. Placeat pariatur laboriosam in eveniet sapiente commodi vero libero.</p>
     </div>


     <div className='relative w-full h-full lg:block'>
      <img className='h-full w-full lg:absolute inset-0 object-cover rounded-extraLarge lg:rounded-full object-center' src={about} alt="about illustration" />
     </div>
    </div>


    <div className='my-48 container grid px-4 lg:grid-cols-4 md:grid-cols-2 gap-10 mx-28 justify-center items-center'>

     <div className='max-w-md'>
      <h1 className='text-black font-medium text-5xl'>Our Team</h1>
      <div className='bg-blue-700 my-5 w-44 h-2'></div>
      <p className='text-lg mt-11 text-gray-600 font-light max-w-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum delectus. Placeat pariatur laboriosam in eveniet sapiente commodi vero libero.</p>
     </div>

     <div className='flex flex-col items-center'>
      

       <img className='sample hover:scale-110 ease-in-out transition-all duration-200 mb-14' src={sampleteam} alt="sampleteam mg" />
    
       <p className='text-lg text-gray-600 font-light'>Lorem, ipsum dolor.</p>
       <p className='text-lg text-gray-600 font-light'>Lorem ipsum dolor sit.</p>
     </div>
     <div className='flex flex-col items-center'>
       <img className='sample hover:scale-110 ease-in-out transition-all duration-200 mb-14' src={sampleteam} alt="sampleteam ig" />
       <p className='text-lg text-gray-600 font-light'>Lorem, ipsum.</p>
       <p className='text-lg text-gray-600 font-light'>Lorem, ipsum dolor.</p>
     </div>
     <div className='flex flex-col items-center'>
       <img className='sample hover:scale-110 ease-in-out transition-all duration-200 mb-14' src={sampleteam} alt="sampleteam img" />
       <p className='text-lg text-gray-600 font-light'>Lorem, ipsum.</p>
       <p className='text-lg text-gray-600 font-light'>Lorem, ipsum dolor.</p>
     </div>

    </div>


    <div className='px-10 lg:px-32 justify-center items-center flex flex-col pt-28 pb-20 bg-blue-500'>
      <h1 className='text-5xl text-white font-bold mb-16 text-center'>Our Partner</h1>
      <div className='grid lg:grid-cols-2 w-full xl:grid-cols-4 gap-24 xl:gap-10 mx-auto'>
        <div className='bg-gray-300 hover:bg-white hover:bg-opacity-50 transition-all ease-in-out duration-1000 bg-opacity-25 shadow-md h-48 flex items-center justify-center'>
          <FcSmartphoneTablet size={70} />
        </div>
        <div className='bg-gray-300 hover:bg-white hover:bg-opacity-50 transition-all ease-in-out duration-1000 bg-opacity-25 shadow-md h-48 flex items-center justify-center'>
          <MdWebStories color='white' size={70} />
        </div>
        <div className='bg-gray-300 hover:bg-white hover:bg-opacity-50 transition-all ease-in-out duration-1000 bg-opacity-25 shadow-md h-48 flex items-center justify-center'>
          <CgDesignmodo color='white' size={70} />
        </div>
        <div className='bg-gray-300 hover:bg-white hover:bg-opacity-50 transition-all ease-in-out duration-1000 bg-opacity-25 shadow-md h-48 flex items-center justify-center'>
          <SiSimilarweb color='white' size={70} />
        </div>
        
      </div>
    </div>

    <div className='flex justify-center flex-col mx-auto items-center lg:items-start mt-24 px-36'>
      <h1 className='innovate mb-10 font-semibold text-gray-800'>Innovative & Make Perfect</h1>
     <div className='grid lg:grid-cols-2 gap-10 justify-center items-center w-full lg:items-start'>
      <p className='w-sm lg:max-w-lg text-lg font-medium lg:font-light text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis provident, repellat saepe praesentium recusandae? amet consectetur adipisicing  amet consectetur adipisicing </p>

    <div className='w-full'>
      
      <div className='flex max-w-md mb-2 justify-between items-center'>
        <h1 className='text-2xl font-medium'>Development</h1>
        <p>66%</p>
      </div>
      <div className='w-full mb-3 bg-gray-200 bg-opacity-90 h-2 rounded-lg'>
        <div className='w-8/12 rounded-l-lg bg-blue-800 h-2'></div>
      </div>
      <div className='flex max-w-md mb-2 justify-between items-center'>
        <h1 className='text-2xl font-medium'>Design</h1>
        <p>80%</p>
      </div>
      <div className='w-full mb-3 bg-gray-200 bg-opacity-90 h-2 rounded-lg'>
        <div className='w-10/12 rounded-l-lg bg-blue-800 h-2'></div>
      </div>
      <div className='flex max-w-md mb-2 justify-between items-center'>
        <h1 className='text-2xl font-medium'>Reliability</h1>
        <p>91%</p>
      </div>
      <div className='w-full bg-gray-200 bg-opacity-90 h-2 rounded-lg'>
        <div className='w-11/12 rounded-l-lg bg-blue-800 h-2'></div>
      </div>
    </div>

     </div>
    </div>

    <div className='mt-24 px-8 mx-auto flex bg-gradient-to-b from-white via-white to-blue-300 py-10 w-full gap-10 flex-col items-center justify-center lg:flex-row lg:items-end'>
      <img className='max-w-sm md:max-w-lg' src={artmage} alt="art illustration" />
      <div className='w-full'>
       <h1 className='innovate mb-8 font-semibold text-gray-800'>Why Choose Us?</h1>
       <p className='lg:pr-12 max-w-xl md:max-w-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis, deserunt quam officia eveniet necessitatibus molestias at a aliquam nostrum expedita velit consequuntur dolore nam? Suscipit optio error odio nobis.</p>
      </div>
    </div>

    <div className='grid lg:grid-cols-3 gap-20 px-32 my-24'>
      <div className='flex flex-col justify-center mx-auto items-center'>
        <div className='bg-blue-600 rounded-2xl shadow-md h-32 px-12 py-5 flex justify-center items-center '>
          <BsLightbulbFill color='white' size={55} />
        </div>
        <h1 className='font-light py-6 text-3xl'>Our Vision</h1>
        <p className='text-center text-lg font-extralight text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit.</p>
      </div>
      <div className='flex flex-col justify-center mx-auto items-center'>
        <div className='bg-blue-600 rounded-2xl shadow-md h-32 px-12 py-5 flex justify-center items-center '>
          <GoTasklist color='white' size={55} />
        </div>
        <h1 className='font-light py-6 text-3xl'>Our Goal</h1>
        <p className='text-center text-lg font-extralight text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit.</p>
      </div>
      <div className='flex flex-col justify-center mx-auto items-center'>
        <div className='bg-blue-600 rounded-2xl shadow-md h-32 px-12 py-5 flex justify-center items-center '>
          <RiFocus2Fill color='white' size={55} />
        </div>
        <h1 className='font-light py-6 text-3xl'>Our Mission</h1>
        <p className='text-center text-lg font-extralight text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit.</p>
      </div>
    </div>

    <div className='bg-purple-50 py-32 px-5 lg:px-32'>
    <div className='max-w-xl space-y-6 mx-auto'>
      <h1 className='lg:text-5xl md:text-4xl text-2xl font-semibold text-center'>Stay up to date with us</h1>
      <div className='w-full flex items-center justify-center'>
        <input placeholder='Your Email' className='p-2 md:p-3 pl-5 border-gray-400 border-r-0 border-2 rounded-l-full w-10/12 bg-white rounded-l-full font-normal text-xl' type="text" />
        <button className='px-4 py-2 md:px-6 md:py-3 hover:bg-blue-600 text-white bg-blue-800 text-2xl rounded-r-full shadow-lg'>Subscribe</button>
      </div>
      <p className='text-lg font-light text-center text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit, nostrum minus distinctio repellendus facere reiciendis ratione magni odio! Quidem?</p>
    </div>

    </div>


     
    </>
  )
}

export default About