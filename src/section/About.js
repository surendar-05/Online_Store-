import React from 'react'
import AboutGrid from '../components/AboutGrid'
import {aboutgrids} from '../exports' 
const About = () => {
  return (
   <section className='w-full bg-slate-200 flex flex-col lg:flex-row  gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-16 lg:py-12'>
  <div className='flex  justify-center items-start flex-col gap-8 lg:w-1/2'>
    <h1 className='text-green-600 font-bold text-6xl'>Hosting Solutions with benefits</h1>
    <p className='text-slate-05 text-2xl'>
    lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    </p>
    <div className='flex justify-center items-center gap-7 '>
      <button className='bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-18px hover:bg-black hover:text-white cursor-pointer'>Read More</button>
      </div>
  </div>
  <div className='flex justify-between items-center w-full lg:w-1/2 flex-wrap'>
  {aboutgrids.map((grid) => (
  <div key={grid.label} className='w-full lg:w-1/2'>
    <AboutGrid {...grid}/>
  </div>
))}

  </div>
   </section>
  )
}

export default About