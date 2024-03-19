import { useState } from 'react';
import {logo, hamburgerMenu, close} from '../assets'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            <div><img src={logo} className="h-[45px]"/>PressMentor </div>  
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-20'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#course-details">Course Details</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>
            <div className='hidden md:flex px-8 py-3 rounded-md bg-[#20B486] hover:bg-[#0b5840] hover:text-[#20B486] text-white font-bold'><a href="#enroll-now">Enroll Now</a></div>
            <div className='md:hidden' onClick={handleClick}>
                <img src={toggle?close:hamburgerMenu} />
            </div>
        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                <li className='p-4 hover:bg-gray-100'>About</li>
                <li className='p-4 hover:bg-gray-100'>Course Details</li>
                <li className='p-4 hover:bg-gray-100'>Testimonials</li>
                <div className='flex flex-col my-4 gap-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Enroll Now</div>
            </ul>
        </div>   
    </div>
  )
}

export default Navbar