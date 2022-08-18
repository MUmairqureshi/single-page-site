import React from 'react'

import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.webp'
import img4 from './img4.webp'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

export function Team() {
    return (
        <div name='platforms' className='w-full bg-white my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='py-12 max-w-[1240px] container-sm'>
                    <div className=' justify-center'>
                        <h2 className=" text-center  py-6 text-4xl  px-8 font-bold">Here are our heroes </h2>
                        <p className="  max-w-md mx-auto text-center  ">                Our landing page template works on all devices,
                            so you only have to set it up once, and get beautiful results forever.
                        </p></div>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 py-24 flax'>


                        <div>
                            <div>
                                <img src={img1} alt="team" className=' shadow-xl border margin-bottom-6 rounded-lg  ' />
                            </div>
                            <div className='text-center '>
                                <h4 className='text-black font-bold py-2 text-xl '>Ryan Tompson</h4>
                                <p className=''>Web Developer</p>
                                <div className=' flex justify-center  text-2xl  py-4 '>
                                    <FaTwitter className='text-blue-500 w-10 ' />
                                    <FaFacebook className='text-blue-500 w-10 ' />
                                    <FaGithub className='text-blue-500 w-10' />
                                </div></div>
                        </div>
                        <div>
                            <div>
                                <img src={img2} alt="team" className=' shadow-xl border  margin-bottom-6 rounded-lg  ' />
                            </div>
                            <div className='text-center '>
                                <h4 className='text-black font-bold py-2 text-xl '>Ryan Tompson</h4>
                                <p className=''>Web Developer</p>
                                <div className=' justify-center  flex py-4 text-2xl'>
                                    <FaTwitter className='text-blue-500 w-10' />
                                    <FaFacebook className='text-blue-500 w-10' />
                                    <FaGithub className='text-blue-500 w-10 ' />
                                </div></div>
                        </div>
                        <div>
                            <div>
                                <img src={img3} alt="team" className=' shadow-xl border  margin-bottom-6 rounded-lg  ' />
                            </div>
                            <div className='text-center '>
                                <h4 className='text-black font-bold py-2 text-xl '>Ryan Tompson</h4>
                                <p className=''>Web Developer</p>
                                <div className=' justify-center py-4 flex text-2xl '>
                                    <FaTwitter className='text-blue-500 w-10' />
                                    <FaFacebook className='text-blue-500 w-10' />
                                    <FaGithub className='text-blue-500 w-10' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={img4} alt="team" className=' shadow-xl border margin-bottom-6 rounded-lg  ' />
                            </div>
                            <div className='text-center '>
                                <h4 className='text-black font-bold py-2 text-xl '>Ryan Tompson</h4>
                                <p className=''>Web Developer</p>
                                <div className=' justify-center  flex text-2xl py-4 '>
                                    <FaTwitter className='text-blue-500 w-10' />
                                    <FaFacebook className='text-blue-500 w-10' />
                                    <FaGithub className='text-blue-500 w-10' />
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}