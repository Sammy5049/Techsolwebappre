import React from "react";
import Service from '../Images/services-01.jpg'
import imagesample from '../Images/recent-work-01.jpg'
import {GrBusinessService} from 'react-icons/gr'
import {MdWorkHistory} from 'react-icons/md'

const Services = () => {
  return (
    <div className="pt-20">
     <div className="mx-auto max-w-6xl flex justify-center items-center flex-col">

      <h1 className="text-5xl font-medium text-red-600">Services</h1>

      <div className="mt-20 px-3 flex flex-row space-x-10 max-w-screen-md">
        <div>
          <h3><GrBusinessService className="mt-2" size={28} /> </h3>
        </div>
        <div>
          <h2 className="text-4xl">Make Success for future</h2>
          <div className="w-44 my-5 h-2 bg-red-600"></div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            sapiente quibusdam. Exercitationem iste doloribus unde nostrum ex
            vero! Similique quidem magnam blanditiis omnis eum saepe recusandae
            hic illum ex quaerat!
          </p>
        </div>
      </div>
     </div>

      <div className="bg-blue-600 py-16 w-full my-16">

       <ul className="flex mx-auto items-center justify-center flex-row space-x-10">
        <li className="text-white text-lg bg-blue-800 drop-shadow-xl py-3 px-7 rounded-full">All</li>
        <li className="text-white text-lg py-3 px-7 ">Graphics</li>
        <li className="text-white text-lg py-3 px-7 ">Web Development</li>
        <li className="text-white text-lg py-3 px-7 ">Computer Repair</li>
       </ul>

      </div>

      <div className="container grid  lg:grid-cols-4 md:grid-cols-3 gap-10 mx-auto">
      
        <div class="w-full rounded">

       <img src={Service} alt="imddage sauumple" className="block h-full w-full rounded-lg object-cover object-center" />
        </div>
        <div class="w-full rounded">

       <img src={Service} alt="imagdde sampuule" className="block h-full w-full rounded-lg object-cover object-center" />
        </div>
        <div class="w-full rounded">

       <img src={Service} alt="imaguue sample" className="block h-full w-full rounded-lg object-cover object-center" />
        </div>
        <div class="w-full rounded">

       <img src={Service} alt="imaguue sample" className="block h-full w-full rounded-lg object-cover object-center" />
        </div>
        <div class="w-full rounded">

       <img src={Service} alt="imauuge sample" className="block h-full w-full rounded-lg object-cover object-center" />
        </div>
        <div class="w-full rounded">

       <img src={Service} alt="imauge sample" className="block h-full w-full rounded-lg object-cover object-center" />
        </div>
        <div class="w-full rounded">

       <img src={Service} alt="imague sample" className="block h-full w-full rounded-lg object-cover object-center" />
        </div>
        <div class="w-full rounded">

       <img src={Service} alt=" sample" className="block h-full w-full rounded-lg object-cover object-center" />
        </div>
       
      </div>


      <div className="bg-blue-600 py-20 w-full my-32 flex mx-auto items-center justify-around flex-row">

       
   

       <h3><MdWorkHistory className="mt-2" color="white" size={80} /> </h3>
     

     
       <div className="flex flex-col items-center">
        <p className="text-white text-2xl">Great transformations successful</p>
        <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
       </div>
       <p className="text-white text-lg cursor-pointer bg-blue-800 drop-shadow-xl py-3 px-7 rounded-full">View Our Work</p>

      </div>



      <div className="flex flex-col justify-center items-center mx-auto">
       <h1 className="text-5xl text-red-600 font-semibold">Recent Works</h1>
       <div className="container mt-32 grid lg:grid-cols-3 md:grid-cols-3 gap-16 mx-auto">
        <div className="w-full rounded-2xl">
            <img className="block h-full w-full rounded-lg object-cover object-center" src={imagesample} alt="imagesample" />
        </div>
        <div className="w-full  rounded-2xl">
            <img className="block h-full w-full rounded-lg object-cover object-center" src={imagesample} alt="imagesample" />
        </div>
        <div className="w-full rounded-2xl">
            <img className="block h-full w-full rounded-lg object-cover object-center" src={imagesample} alt="imagesample" />
        </div>
        <div className="w-full  rounded-2xl">
            <img className="block h-full w-full rounded-lg object-cover object-center" src={imagesample} alt="imagesample" />
        </div>
        <div className="w-full  rounded-2xl">
            <img className="block h-full w-full rounded-lg object-cover object-center" src={imagesample} alt="imagesample" />
        </div>
        <div className="w-full  rounded-2xl">
            <img className="block h-full w-full rounded-lg object-cover object-center" src={imagesample} alt="imagesample" />
        </div>

       </div>
      </div>
    </div>
  );
};

export default Services;
