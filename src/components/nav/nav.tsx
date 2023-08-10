"use client";

import { Link, animateScroll as scroll, } from 'react-scroll'
import { useState } from "react"
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid';

const Nav = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)


    return (
        <>
   

        <nav className='w-screen h-[80px] z-10 bg-gray-200 fixed drop-shadow-lg'>

                <div className='px-2 flex justify-between items-center w-full h-full'>
                    <div >
                        <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>DRYBOX</h1>
                    </div>
                    <div className='flex items-center'>
                        <ul className='hidden md:flex md:items-center md:gap-[4vw] gap-8'>

                            <li className='hover:text-gray-500'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li className='hover:text-gray-500'><Link to="home" smooth={true} duration={500}>Documentation</Link></li>
                            <li className='hover:text-gray-500'><Link to="home" smooth={true} duration={500}>About</Link></li>

                        </ul>
                    </div>

                    <div className='hidden md:flex pr-4 items-center gap-6'>
                    <button className='bg-red-300 text-white px-5 py-2 rounded-full hover:bg-green-300'>Sign up</button>
                    <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Sign in</button>
                    </div>

                    <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <Bars3Icon className='w-5 hover:text-gray-500' /> : <XMarkIcon className='w-5 hover:text-gray-500' />}
                    </div>

                </div>

                <ul className={!nav ? 'hidden md:hidden' : 'md:hidden mr-4 text-center absolute bg-zinc-200 w-full px-8 pb-4 mx-auto space-y-2'}>
                <li className='hover:text-gray-500 border-b-2 border-gray-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='hover:text-gray-500 border-b-2 border-gray-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>Documentation</Link></li>
                <li className='hover:text-gray-500 border-b-2 border-gray-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>About</Link></li>

                <div className='flex flex-col my-4 items-center'>
                <button className='bg-[#a6c1ee] text-white w-[70%] px-5 py-2 rounded-full hover:bg-[#87acec]'>Sign In</button>
                </div>

                <div className='flex flex-col my-4 items-center'>
                <button className='bg-red-300 text-white w-[70%] px-5 py-2 rounded-full hover:bg-green-300 '>Sign Up</button>
                </div>
                </ul>

        </nav>


        </>
    )

}

export default Nav
