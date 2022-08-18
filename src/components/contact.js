import React from 'react'
import { StarIcon, ExternalLinkIcon, ChartBarIcon } from '@heroicons/react/outline'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

export function Contact() {
    return (
        <div name='pricing' className='w-full  bg-gray-100 '>
            <div className='  mx-auto m-auto max-w-[1240px]'>
                <div className='text-center'>
                    <h2 className='font-bold text-4xl  '>Build something</h2>
                    <p className='text-xl max-w-prose  mx-auto' >Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3  mx-auto  justify-center '>
                    <div className='text-center  py-6   justify-center p-6 '>
                        <div className=' justify-center py-4 flex text-2xl '>
                            <StarIcon className=' w-14 p-3  max-w-sm justify-between text-2xltext-center flex  text-black border rounded-full bg-white shadow-xl' />
                        </div>
                        <div>
                            <h3 className='font-bold  text-xl'>Excelent Services</h3>
                            <p className='max-w-sm sm:max-w-[70%]  mx-auto   py-2'>
                                Some quick example text to buil d on the card title and make
                                up the bulk of the card's content</p>

                        </div>
                    </div>

                    <div className='text-center  py-6   justify-center p-6 '>
                        <div className=' justify-center py-4 flex text-2xl '>
                            <ChartBarIcon className=' w-14  justify-between p-3 te4t-2xl text-black border rounded-full bg-white shadow-xl' />
                        </div>
                        <div>
                            <h3 className='font-bold  text-xl'>Grow Your Market</h3>
                            <p className='max-w-sm sm:max-w-[70%]  mx-auto   py-2'>
                                Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>  </div>

                    <div className='text-center  py-6   justify-center p-6 '>
                        <div className=' justify-center py-4 flex text-2xl '>
                            <ExternalLinkIcon className='  justify-between w-14 p-3 text-2xl text-black border rounded-full bg-white shadow-xl' />
                        </div>
                        <div>  <h3 className='font-bold  text-xl'>Launch Time</h3>
                            <p className='max-w-sm sm:max-w-[70%]  mx-auto   py-2'>
                                Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className='text-center py-8'>
                        <h2 className='text-2xl font-bold'>Want to work with us?</h2>
                        <p className='py-2'>Complete this form and we will get back to you in 24 hours.</p>
                    </div>
                    <div className='py-8  max-w-[1240px]  text-center'>
                        <Box >
                            <div className=" flex justify-center   space-x-6  ">
                                <div className='lg:py-3'>

                                    <TextField className='sm:w-[300px] w-[100px]'
                                        id="standard-search"
                                        label="Full Name "
                                        type="Full Name"
                                        variant="standard"
                                    />
                                </div>
                                <div className='lg:py-3'>
                                    <TextField className=' sm:w-[300px] w-[100px]'
                                        id="standard-search"
                                        label="Email "
                                        type="Email"
                                        variant="standard"
                                    />
                                </div>
                            </div>
                            <div className=' py-8'>
                                <TextField className=' py-4 sm:w-[500px]'
                                    id="standard-search"
                                    label="Message "
                                    type="Message"
                                    variant="standard"
                                />

                            </div>
                            <button className='bg-blue p-2  ' >Submit</button>

                        </Box>

                    </div>

                </div>
            </div>
        </div>

    )
}