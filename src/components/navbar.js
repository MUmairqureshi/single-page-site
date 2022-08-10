import React, { useState } from "react";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from "react-scroll";
export function Navbar() {


    const [nav, setNav] = useState(false)
    const Submit = () => setNav(!nav)
    const handleClick = () => setNav(!nav)
    return (
        <div  className="w-screen  h-[80px] bg-zinc-200 z-10 fixed drop-shadow-lg " >
            <div className=" px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center ">
                    <h1 className="text-3xl  mr-4 sm:text-4xl font-bold">BRAND</h1>



                    <ul className=" hidden md:flex ">
                        <li><Link  to="home">Home</Link></li>
                        <li><Link  to="about">About</Link></li>
                        <li><Link  to="support">Support</Link></li>
                        <li><Link  to="platforms">Platforms</Link></li>
                        <li><Link  to="pricing">Pricing</Link></li>

                    </ul>

                </div>
                <div className="hidden md:flex  pr-3">
                    <button className="border-none bg-transparent text-black mr-4 ">Sign in
                    </button>
                    <button className="py-2 px-4">
                        Sign Up</button>
                        </div>
                    <div className="md:hidden mr-4" onClick={Submit}>
                        {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                    </div>
            </div>
            <ul className={!nav ? 'hidden' : ' absolute w-full px-8 bg-zinc-200 '} >
                    <li className="border-b-2 border-zinc-300 w-full"><Link onClick={()=>handleClick()}  to="home">Home</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full "><Link onClick={()=>handleClick()} to="about">About</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full "><Link onClick={()=>handleClick()} to="support">Support</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full "><Link onClick={()=>handleClick()} to="platforms">Platforms</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full "><Link onClick={()=>handleClick()} to="pricing">Pricing</Link></li>

                </ul>

        </div>
    )
}