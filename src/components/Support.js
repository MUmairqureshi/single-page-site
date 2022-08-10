import React from 'react'
import callcenter from './support.jpg'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
export function Support() {
    return (
        <div name="support" className='w-full mt-24  '>

            <div className=' w-full bg-gray-900/90 absolute h-[700px]' >
                <img className='mix-blend-overlay w-full h-full object-cover' src={callcenter} alt=" collcenter-image " /></div>
            <div className='text-white mx-auto max-w-[1240px] relative'>
                <div className=' py-12 px-3'>
                    <h1 className=' text-slate-200 text-3xl pt-8 text-center'> SUPPORT</h1>
                    <h3 className='text-center font-bold text-5xl py-4'>
                        Finding the right team     </h3>
                    <h3 className=' text-3xl py-4 text-slate-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</h3>
                </div>
                <div>

                    <div className='grid  grid-cols-1 lg:grid-cols-3 px-4 pt-12 gap-x-8 relative gap-y-16 sm:pt-20 text-black'>
                        <div className='grid bg-white gap-3   rounded-xl  shadow-2xl border  '>
                            <div className='p-8 '>
                                <PhoneIcon className=' bg-blue-7 bg-blue-600 rounded-lg mt-[-4rem] p-3 w-16 text-white ' />

                                <p className='font-bold text-black text-2xl my-6  '>Sales</p>
                                <p className='text-black text-xl  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                            </div>
                            <div className="bg-slate-100 pl-8 py-3">  
                            <p className='flex items-cenet'>Contact Us <ArrowSmRightIcon className="w-5 ml-2 text-blue-800" /> </p></div>

                        </div>
                        <div className='grid bg-white gap-3 rounded-xl   shadow-2xl border  '>
                            <div className='p-8'>

                                <SupportIcon className='bg-blue-7  bg-blue-600 rounded-lg mt-[-4rem] p-3 w-16 text-white' />

                                <p className='font-bold text-black text-2xl my-4  '>Technical Support</p>
                                <p className='text-black text-xl  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-3'>
                                <p className="bg-slate-100 flex items-center ">Contact Us <ArrowSmRightIcon className="w-5 ml-2 text-blue-800" /> </p>
                            </div>
                        </div>
                        <div className='grid bg-white gap-3 rounded-lg   shadow-2xl border  '>
                            <div className='p-8'>
                                <ChipIcon className=' bg-blue-7 bg-blue-600 rounded-lg mt-[-4rem] p-3 w-16 text-white' />

                                <p className='font-bold text-black  text-2xl py-4 '>Media Inquiries</p>
                                <p className='text-black text-xl  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-3'>
                                <p className="bg-slate-100 flex items-center ">Contact Us <ArrowSmRightIcon className="w-5 ml-2 text-blue-800" /> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}