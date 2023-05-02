import React, { useEffect, useState } from 'react'
import workpic1 from './Images/workpic1.jpg'
import {RxDoubleArrowRight} from 'react-icons/rx'



const Work = () => {

  const allwork = [{img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:RxDoubleArrowRight}]



    const alllogo = [

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}]


    const allweb = [{img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  ]


    const allcomputer = [{img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,


  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},


  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}]


    const allgraphics = [{img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'},

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}
  ,

  {img:workpic1, name:'Corporate branding', details: 'orem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos de', read:'Read More' , arrow:'ghabiaefvf'}]




  

const [all, setAll] = useState(false)
const [logo, setLogo] = useState(false)
const [web, setWeb] = useState(false)
const [graphic, setGraphic] = useState(false)
const [repair, setRepair] = useState(false)

const handleAll = () => {
  setAll(true)
  setLogo(false)
  setWeb(false)
  setGraphic(false)
  setRepair(false)
 

}

useEffect(() => {
  setAll(true)

 
}, [])


const handleLogo = () => {
  setAll(false)
  setLogo(true)
  setWeb(false)
  setGraphic(false)
  setRepair(false)
 

}



const handleWeb = () => {
  setAll(false)
  setLogo(false)
  setWeb(true)
  setGraphic(false)
  setRepair(false)
 

}

const handleGraphic = () => {
  setAll(false)
  setLogo(false)
  setWeb(false)
  setGraphic(true)
  setRepair(false)
 

}
const handleRepair = () => {
  setAll(false)
  setLogo(false)
  setWeb(false)
  setGraphic(false)
  setRepair(true)
 

}


  return (
    <>
    <div className="bg-[url('./Images/landing.jpg')] relative bg-cover bg-center  bg-no-repeat">
      <div className='w-full h-full bg-black opacity-60 py-10'>
        
      <div className='mx-auto z-50 pt-28 max-w-3xl pb-20 items-center space-y-7 justify-center flex-col flex'>
        <h1 className='text-5xl font-semibold text-white'>Our Work</h1>
        <div className='h-2 w-44 bg-blue-600 rounded-full'></div>
        <h2 className='text-3xl text-center text-white'>Lorem ipsum dolor sit, amet consectetur  elit.</h2>
        <p className='text-lg text-center font-light text-gray-100'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit sapiente eos libero, nihil debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eveniet, enim optio nihil quo rerum! ipsum dolor sit amet consectetur adipisicing elit. Rerum harum maiores voluptates natus eveniet ut laudantium temporibus dolore, tempora repellat.</p>
        <div className='mx-auto flex justify-center items-center gap-8'>
          <button className='text-xl font-light py-2 px-6 text-white border-2 border-white rounded-full'>Learn More</button>
          <button className='rounded-full text-xl font-light py-2 px-6 text-white bg-blue-700 hover:bg-gray-100'>Contact Us</button>
        </div> 
        

      </div>
      </div>

    </div>

      <div className='flex mt-20 lg:mt-32'>
        <div className='mx-auto pb-24'>
          <ul className='md:gap-0 gap-3 mx-auto max-w-md md:max-w-3xl px-5 flex-row flex-wrap justify-center flex items-center'>
            <li onClick={handleAll} className={`text-md md:text-lg ${(all ? 'bg-blue-700 text-white' : 'text-blue-600' )} hover:bg-blue-700 rounded-full px-4 md:px-8 py-2 cursor-pointer hover:text-white`}>All</li>
            <li onClick={handleLogo} className={`text-md md:text-lg ${(logo ? 'bg-blue-700 text-white' : 'text-blue-600' )} hover:bg-blue-700 rounded-full px-4 md:px-7 py-2 cursor-pointer hover:text-white`}>Logo</li>
            <li onClick={handleWeb} className={`text-md md:text-lg ${(web ? 'bg-blue-700 text-white' : 'text-blue-600' )} hover:bg-blue-700 rounded-full px-3 md:px-6 py-2 cursor-pointer ho  ver:text-white`}>Web Development</li>
            <li onClick={handleGraphic}className={`text-md md:text-lg ${(graphic ? 'bg-blue-700 text-white' : 'text-blue-600' )} hover:bg-blue-700 rounded-full px-3 md:px-6 py-2 cursor-pointer hover:text-white`}>Graphics</li>
            <li onClick={handleRepair} className={`text-md md:text-lg ${(repair ? 'bg-blue-700 text-white' : 'text-blue-600' )} hover:bg-blue-700 rounded-full px-3 md:px-6 py-2 cursor-pointer hover:text-white`}>Computer Repair</li>
          </ul>
        </div>
      </div>

      <div className='max-w-screen-2xl items-center mx-auto'>

        {all && 
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-28 lg:px-16 xl:px-24 2xl:px-32 lg:grid-cols-3 items-center gap-8 lg:gap-5 xl:gap-12  justify-center py-5'>
          {
              allwork && allwork.map((allworks,index) => (

                <div key={index} className='mx-auto '>
                    <div className='flex flex-col items-center border-2  border-gray-300 rounded-2xl shadow-md mx-auto max-w-sm'>


                        <img src={allworks.img} className='w-full h-full object-cover object-center rounded-t-2xl' alt="list of works" />
                        <div className='ml-5 pr-7 pt-4'>

                        <h1 className='text-lg 2xl:text-2xl lg:text-xl text-gray-600'>{allworks.name}</h1>
                        <p className='text-lg 2xl:text-xl lg:text-lg pt-2 text-gray-500'>{allworks.details}</p>

                        <div className='flex items-center cursor-pointer gap-3 py-4 '>

                        <p className='text-blue-400 text-xl font-light'>Read more</p>
                        <div className='text-blue-400'>
                             < RxDoubleArrowRight size={25}  />
                        </div>
                     
                       
                        </div>

                        </div>


                    </div>

                </div>
              ))

          }

        </div>
        }
        {logo && 
        <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-28 lg:px-16 xl:px-24 2xl:px-32 lg:grid-cols-3 items-center gap-8 lg:gap-5 xl:gap-12 justify-center py-5'>
          {
              alllogo && alllogo.map((alllogos,index) => (

                <div key={index} className='mx-auto '>
                    <div className='flex flex-col items-center border-2  border-gray-300 rounded-2xl shadow-md mx-auto max-w-sm'>


                        <img src={alllogos.img} className='w-full h-full object-cover object-center rounded-t-2xl' alt="list of works" />
                        <div className='ml-5 pr-7 pt-4'>

                        <h1 className='text-lg 2xl:text-2xl lg:text-xl text-gray-600'>{alllogos.name}</h1>
                        <p className='text-lg 2xl:text-xl lg:text-lg pt-2 text-gray-500'>{alllogos.details}</p>

                         <div className='flex items-center cursor-pointer gap-3 py-4 '>

                        <p className='text-blue-400 text-xl font-light'>Read more</p>
                        <div className='text-blue-400'>
                             < RxDoubleArrowRight size={25}  />
                        </div>
                     
                       
                        </div>
                        </div>


                    </div>

                </div>
              ))

          }



          




        </div>
        }
       {web && 
        <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-28 lg:px-16 xl:px-24 2xl:px-32 lg:grid-cols-3 items-center gap-8 lg:gap-5 xl:gap-12 justify-center py-5'>
          {
              allweb && allweb.map((allwebs,index) => (

                <div key={index} className='mx-auto '>
                    <div className='flex flex-col items-center border-2  border-gray-300 rounded-2xl shadow-md mx-auto max-w-sm'>


                        <img src={allwebs.img} className='w-full h-full object-cover object-center rounded-t-2xl' alt="list of works" />
                        <div className='ml-5 pr-7 pt-4'>

                        <h1 className='text-lg 2xl:text-2xl lg:text-xl text-gray-600'>{allwebs.name}</h1>
                        <p className='text-lg 2xl:text-xl lg:text-lg pt-2 text-gray-500'>{allwebs.details}</p>

                        <div className='flex items-center cursor-pointer gap-3 py-4 '>

                        <p className='text-blue-400 text-xl font-light'>Read more</p>
                        <div className='text-blue-400'>
                             < RxDoubleArrowRight size={25}  />
                        </div>
                     
                       
                        </div>
                        </div>


                    </div>

                </div>
              ))

          }



          




        </div>
        }
        {graphic && 
        <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-28 lg:px-16 xl:px-24 2xl:px-32 lg:grid-cols-3 items-center gap-8 lg:gap-5 xl:gap-12 justify-center py-5'>
          {
              allgraphics && allgraphics.map((allgraphicss,index) => (

                <div key={index} className='mx-auto '>
                    <div className='flex flex-col items-center border-2  border-gray-300 rounded-2xl shadow-md mx-auto max-w-sm'>


                        <img src={allgraphicss.img} className='w-full h-full object-cover object-center rounded-t-2xl' alt="list of works" />
                        <div className='ml-5 pr-7 pt-4'>

                        <h1 className='text-lg 2xl:text-2xl lg:text-xl text-gray-600'>{allgraphicss.name}</h1>
                        <p className='text-lg 2xl:text-xl lg:text-lg pt-2 text-gray-500'>{allgraphicss.details}</p>

                        <div className='flex items-center cursor-pointer gap-3 py-4 '>

                        <p className='text-blue-400 text-xl font-light'>Read more</p>
                        <div className='text-blue-400'>
                             < RxDoubleArrowRight size={25}  />
                        </div>
                     
                       
                        </div>
                        </div>


                    </div>

                </div>
              ))

          }



          




        </div>
        }
       {repair && 
        <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-28 lg:px-16 xl:px-24 2xl:px-32 lg:grid-cols-3 items-center gap-8 lg:gap-5 xl:gap-12 justify-center py-5'>
          {
              allcomputer && allcomputer.map((allcomputers,index) => (

                <div key={index} className='mx-auto '>
                    <div className='flex flex-col items-center border-2  border-gray-300 rounded-2xl shadow-md mx-auto max-w-sm'>


                        <img src={allcomputers.img} className='w-full h-full object-cover object-center rounded-t-2xl' alt="list of works" />
                        <div className='ml-5 pr-7 pt-4'>

                        <h1 className='text-lg 2xl:text-2xl lg:text-xl text-gray-600'>{allcomputers.name}</h1>
                        <p className='text-lg 2xl:text-xl lg:text-lg pt-2 text-gray-500'>{allcomputers.details}</p>

                         <div className='flex items-center cursor-pointer gap-3 py-4 '>

                        <p className='text-blue-400 text-xl font-light'>Read more</p>
                        <div className='text-blue-400'>
                             < RxDoubleArrowRight size={25}  />
                        </div>
                     
                       
                        </div>
                        </div>


                    </div>

                </div>
              ))

          }



          




        </div>
        }
      </div>
    
    

      <div className='mx-auto p-10'>
        <div className='mt-24 mx-24 mb-14 items-center grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15'>
          <div className='max-w-lg'>
            <h1 className='text-gray-600 font-light mb-7 text-3xl'>Featured Work</h1>
            <h1 className='text-black text-5xl mb-7 font-semibold'>Transform with us</h1>
            <p className='font-light text-gray-600 text-lg mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa omnis deserunt perferendis! Deleniti error, porro, odio quos et, amet quisquam eveniet expedita saepe quis earum! Impedit excepturi consectetur, quas nobis fugit!</p>
            <p className='font-light text-gray-600 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis eligendi saepe. Suscipit possimus similique ipsam animi voluptatum, eos delectus deleniti, omnis voluptatem pariatur consectetur facere illo placeat eveniet ullam quo dolores im!</p>
          </div>

        <div className='grid gap-10 lg:gap-5 grid-cols-2 w-full'>
        
          <img className="w-full h-full object-cover object-center" src={workpic1} alt="workpic1" />
          <img className="w-full h-full object-cover object-center" src={workpic1} alt="workpic2" />
          <img className="w-full h-full object-cover object-center" src={workpic1} alt="workpic3" />
          <img className="w-full h-full object-cover object-center" src={workpic1} alt="workpic4" />
        </div>
        </div>
      </div>
    </>
  )
}

export default Work