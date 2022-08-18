import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

export function Footer() {
    return (
        <div className='w-full  mt-24 '>




            <div className='flex flex-col max-w-[1240px] px-2 py-4  mx-auto text-center  justify-between sm:flex-row   text-gray-500'>

                <div className='sm:text-left py-4'>
                    <p className='  font-bold text-gray-800  text-xl max-w-sm  '>Lorem Ipsum </p>
                    <p className='  text-gray-800 max-w-md '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    <div className=' py-4 flex   gap-1  justify-between sm:w-[300px]  text-xl  text-center  '>
                        <FaFacebook className='  bg-white   p-2 w-14  text-center   text-5xl text-blue-600 border rounded-full  shadow-xl' />
                        <FaGithub className='w-14  p-2  text-5xl border rounded-full bg-white shadow-xl text-blue-400' />
                        <FaInstagram className='w-14 p-2  text-5xl  border rounded-full bg-white shadow-xl text-black-400' />
                        <FaTwitter className='w-14 p-2  text-5xl  border rounded-full bg-white shadow-xl  text-red-600' />
                        <FaTwitch className='w-14 p-2  text-5xl  border rounded-full bg-white shadow-xl  text-black ' />
                    </div>                      
                     </div>

                <div className=' grid  md:grid-cols-2   grid-cols-1 justify-between sm:w-[300px]  text-center pt-4'>

                        <div className='justify-end sm:text-left'>

                            <p className='italic font-bold ' >USEFUL LINKS</p>
                            <p className='py-2'> About Us</p>
                            <p className='py-2'> Blog</p>
                            <p className='py-2'> Github</p>
                            <p className='py-2'> Free Products</p>

                        </div>
                        <div className='justify-end sm:text-left'>

                            <p className='italic font-bold '>OTHER RESOURCES</p>
                            <p className='py-2'> MIT license</p>
                            <p className='py-2'> Contribute</p>
                            <p className='py-2'> Code of Conduct</p>
                            <p className='py-2'> Contact Us</p>

                        </div>

                    </div>

                </div>
            </div>


     )
}