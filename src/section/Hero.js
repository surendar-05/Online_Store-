import React from 'react'
import heroimg from "../assets/images/heroimg.png"

const Hero = () => {
  return (
   <section id='services' className='flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen'>

    <div className='flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20'>
      <h1 className='text-green-600 font-bold text-6xl'>One Click solutions for your static website</h1>
      <p className='text-slate-90 text-2xl'>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
      <div className='flex justify-center items-center gap-7 '>
      <button className='bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-18px hover:bg-black hover:text-white cursor-pointer'>Get Started</button>
      <button className='border-2 border-green-800 text-green-800 text-18 rounded-md
      px-4 lg:px-8 py-3 hover:border-black hover:text-black cursor-pointer'>View More</button>
      </div>
      </div> 

      <div className='flex justify-center items-center
      w-1/2 px-5 py-20 object-cover'>
        <img src={heroimg} alt="Hero Img"width={500} height={500}/>
      </div>
   </section>
  )
}

export default Hero