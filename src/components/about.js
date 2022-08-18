import React from 'react'
import { UsersIcon } from '@heroicons/react/outline'
import img from './img.jpeg'
export function About() {
    return (
        <div className=' md:h-[600px]   flex flex-col bg-gray-100 w-full mx-auto justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] my-40 mx-auto'>
                <div className='p-8 px-7' >
                    <div className=' '>
                        <UsersIcon className='text-black shadow-xl border p-3 rounded-full w-16  bg-white ' /> </div>

                    <h2 className='font-bold text-3xl py-4 '>Working with us is a pleasure</h2>
                    <p className='text-xl text-gray-600'>Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.
                    </p>
                    <p className='text-xl text-gray-600 py-6'>    The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.</p>
                </div>
                <div className='bg-white border dark:border-gray-700  p-4 mx-auto px-4 max-w-sm rounded-xl shadow-xl  '>
                    <img src={img} className='    mt-[-2rem] w-26  border rounded-xl shadow-xl' alt='about' />
                    <div className='p-4 px-4'>
                        <h3 className='font-bold text-xl'>Top Notch Services </h3>
                        <p className='text-xl text-gray-600'>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer,
                            and that process will continue whatever happens.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}