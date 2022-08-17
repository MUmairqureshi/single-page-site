import { MenuAlt1Icon, StarIcon, FingerPrintIcon, RefreshIcon, XIcon, DocumentTextIcon, ViewGridIcon, TemplateIcon, PhoneIcon } from '@heroicons/react/outline'
import React, { useState } from 'react';
import { Link } from "react-scroll";
export function Home() {
    const [nav, setNave] = useState(false)

    const handlesubmit = () => setNave(!nav)
    const handleClose = () => setNave(!nav)

    return (
        <div name='support' className='w-full '>
            <div className='w-full h-[750px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src='https://cimam.org/media/images/Rupert.width-2480.jpg' alt="/" />
            </div>

            <div className='max-w-[1240px] mx-auto relative'>

                <div className='mx-auto justify-center py-4 px-3 text-white  max-w-[1240px] relative'>
                    <div className=' flex justify-between  w-full h-full px-2 items-center '>
                        <h2 className='font-bold sm:text-3xl  mr-4 text-4xl'>Brand</h2>
                        <div className='flex items-center'>
                            <ul className='hidden md:flex'><li > <Link className='flex ' to="document"><DocumentTextIcon className='w-5 mr-2  ' />DOCS </Link></li>
                                <li ><Link className='flex ' to="components"> <ViewGridIcon className='w-5 mr-1  ' /> COMPONENTS </Link></li>
                                <li ><Link className='flex ' to="document"><TemplateIcon className='w-5 mr-1  ' />Templates</Link></li>
                                <li > <Link className='flex ' to="document">  <PhoneIcon className='w-5 mr-1 ' /> Contact </Link></li>
                                <li >  <Link className='flex ' to="issue">ISSUE</Link></li>
                            </ul>
                        </div>
                        <div className='md:hidden mr-4' onClick={handlesubmit}>
                            {!nav ? <MenuAlt1Icon className='w-6' /> : <XIcon className='w-6' />}
                        </div>
                    </div>
                </div>
                <ul className={!nav ? 'hidden' : ' absolute w-full  px-2 text-white'}>
                     <li className='flex '><Link className='flex ' onClick={handleClose} to="document"><DocumentTextIcon className='w-5 mr-1  ' />DOCS </Link> </li>
                    <li className='flex '><Link className='flex ' onClick={handleClose} smooth={true} to="components"> <ViewGridIcon className='w-5 mr-1  ' /> COMPONENTS </Link></li>
                    <li className='flex '> <Link className='flex ' onClick={handleClose} smooth={true} to="document"><TemplateIcon className='w-5 mr-1  ' />Templates</Link></li>
                    <li className='flex '><Link className='flex ' onClick={handleClose} smooth={true} to="document">  <PhoneIcon className='w-5 mr-1 ' /> Contact </Link></li>
                    <li className='flex '> <Link className='flex ' onClick={handleClose} smooth={true} to="issue">ISSUE</Link></li>
                </ul>

                <div className='text-white mx-auto justify-center  py-5 mt-6 text-center relative' >
                    <h1 className='font-bold md:text-4xl'>Your story starts with us.
                    </h1>
                    <p className='text-gray-200 text-center py-7 md:text-2xl mx-auto max-w-xl  '>
                        Your story starts with us.
                        This is a simple example of a Landing Page you can build using Material Tailwind.
                        It features multiple components based on the Tailwind
                        CSS and Material Design by Google.</p>
                </div>

                <div className='grid   md:grid-cols-3 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 my-20 pt-40 md:pt-40 text-black'>


                    <div className='bg-white  content-center text-center 
                 justify-between flex-wrap px-4 shadow-xl  
                  rounded-lg p-4  text-black '>
                        <div className=' justify-center flex  '>
                       <StarIcon className='bg-red-600  w-14 p-3  max-w-sm justify-between text-2xltext-center flex  border rounded-full shadow-xl
                     text-white '/>
                        </div>
                        <h3 className='font-bold text-xl  py-3'> Awarded Agency</h3>
                        <p className='px-2 text-gray-600 '>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Excepturi
                            provident
                        </p>
                        </div>








                    <div className='bg-white text-center  shadow-xl rounded-lg p-4 py-6 text-black '>
                        <div className='justify-center flex '>
                            <RefreshIcon className='bg-indigo-600  text-white shadow-xl  border p-3 rounded-full  w-14' /></div> <h3 className='font-bold text-xl py-3'> Awarded Agency</h3>
                        <p className='px-2  text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            provident
                        </p>
                    </div>
                    <div className='bg-white text-center shadow-xl rounded-lg p-4 py-6 text-black '>
                        <div className='justify-center flex '>
                            <FingerPrintIcon className='bg-gray-500 text-white shadow-xl justify-between  border p-3 rounded-full  w-14' /> </div> <h3 className='font-bold text-xl py-3'>Awarded Agency</h3>
                        <p className='px-2 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            provident
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
