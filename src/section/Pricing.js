import React from 'react'
import {tick} from'../assets/icons';
import {pricing} from'../exports'
import PriceGrid from'../components/PriceGrid';

const Pricing = () => {
  return (
    <section id='pricing' className='w-full bg-slate-200 flex flex-col justify-center items-starth-fit px-7 py-14 lg:p-20 gap-5'>
      <h1 className='text-green-600 font-bold text-6xl'> Pricing Table</h1>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full mt-5'>
        <p className='text-slate-950 text-2xl'>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
      <div className='w-full lg:w-2/4'>
      <ul className='flex flex-col justify-center items-start gap-4 '>
        <li className='flex justify-center items-center gap-4 text-21 text-gray-800'>
          <span className='bg-green-400 p-1 rounded-full' style={{ display: 'inline-block' }}>
            <img src={tick} alt='tick' width={30} height={30} style={{ borderRadius: '50%' }} />
          </span>
          <span className='text-slate-800 text-2xl'>Unlimited Pages</span>
        </li>
        <li className='flex justify-center items-center gap-4 text-21 text-gray-800'>
          <span className='bg-green-400 p-1 rounded-full' style={{ display: 'inline-block' }}>
            <img src={tick} alt='tick' width={30} height={30} style={{ borderRadius: '50%' }} />
          </span>
          <span  className='text-slate-800 text-2xl'>Unlimited Pages</span>
        </li>
        <li className='flex justify-center items-center gap-4 text-21 text-gray-800'>
          <span className='bg-green-400 p-1 rounded-full' style={{ display: 'inline-block' }}>
            <img src={tick} alt='tick' width={30} height={30} style={{ borderRadius: '50%' }} />
          </span>
          <span  className='text-slate-800 text-2xl'>Unlimited Pages</span>
        </li>
      </ul>
    </div>
    <div className='w-full lg:w-2/4'>
      <ul className='flex flex-col justify-center items-start gap-4 '>
        <li className='flex justify-center items-center gap-4 text-21 text-gray-800'>
          <span className='bg-green-400 p-1 rounded-full' style={{ display: 'inline-block' }}>
            <img src={tick} alt='tick' width={30} height={30} style={{ borderRadius: '50%' }} />
          </span>
          <span className='text-slate-800 text-2xl'>Free Sub-Domain</span>
        </li>
        <li className='flex justify-center items-center gap-4 text-21 text-gray-800'>
          <span className='bg-green-400 p-1 rounded-full' style={{ display: 'inline-block' }}>
            <img src={tick} alt='tick' width={30} height={30} style={{ borderRadius: '50%' }} />
          </span>
          <span  className='text-slate-800 text-2xl'>Free SSL Certificate</span>
        </li>
        <li className='flex justify-center items-center gap-4 text-21 text-gray-800'>
          <span className='bg-green-400 p-1 rounded-full' style={{ display: 'inline-block' }}>
            <img src={tick} alt='tick' width={30} height={30} style={{ borderRadius: '50%' }} />
          </span>
          <span  className='text-slate-800 text-2xl'>24/7 Support</span>
        </li>
      </ul>
    </div>
      </div>

      <div className='flex w-full justify-around items-center flex-wrap gap-10 mt-20'>
      {pricing.map((price) => {
  return (
    <div key={price.plan} className='w-96'>
      <PriceGrid {...price} />
    </div>
  );
})}

      </div>
    </section>
  )
}

export default Pricing