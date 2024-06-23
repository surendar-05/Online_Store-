import React, { useEffect, useState } from 'react';
import {menu,close} from '../assets/icons'

const Navbar = () => {

  const[toggle,settoggle]=useState(false);
  const[iconToggle,seticonToggle]=useState(false);
  const[menuClass,setMenuClass]=useState(false);

  const toggleMenu=()=>{
    settoggle(!toggle);
  }
  const toggleIcon=()=>{
    seticonToggle(!toggle);
  }
  
  useEffect(()=>{
    setMenuClass(toggle ?'transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100':'transition-opacity ease-in-out duration-300 transform -translate-y-full opacity-0 ');
  },[toggle]);

  return (
    <section className='w-full bg-black text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40'>
   <h1 className='text-green-600 text-3xl font-bold' >NEBULA</h1>
   <div className='hidden lg:flex justify-end items-center gap-2'>
  <ul className='flex justify-center items-center gap-3'>
  <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white' href='/'> Home</a>
  </li>
  <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white' href='#services'>Services</a>
  </li>
  <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white' href='#testimonials'>Testimonials</a>
  </li>
  <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white' href='#pricing'>Pricing</a>
  </li>
  <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white' href='#contact'>contact</a>
  </li>
  </ul>
   </div>
  <div className='flex lg:hidden flex-col'>
  {iconToggle?(
    <img src={close} width={40} height={40} onClick={()=>{toggleMenu();toggleIcon();}}/>
  ):(
  <img src={menu} width={40} height={40} onClick={()=>{toggleMenu();toggleIcon();}}/>
  )}

 {toggle &&(
  <div id='mob-menu' className={`bg-green-500 text-white py-4 absolute top-20 right-0 w-full ${menuClass}`}>
    <ul className='flex flex-col justify-center items-center gap-2'>
      <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Home</li>
      <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Services</li>
      <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Testimonials</li>
      <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Pricing</li>
      <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Contact</li>

    </ul>
  </div>
 )}

  </div>
    </section>
  );
}

export default Navbar;
