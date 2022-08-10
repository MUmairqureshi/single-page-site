import React from "react";
import cyber from './cyber-bg.png'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

export function Hero() {
    return (
        <div name="home" className="w-full bg-zinc-200 h-screen flex justify-between flex-col">
            <div className=" grid md:grid-cols-2 m-auto max-w-[1240px]">
                <div className="flex flex-col justify-center md:items-start py-8 w-full px-2">
                    <h3 className="text-2xl  ">Unique Sequencing & Production
                    </h3>
                    <h1 className="text-5xl md:text-7xl font-bold py-3 ">Cloud Management</h1>
                    <p className="text-2xl ">This is our Tech brand.</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
                </div>
                <div>
                    <img className="w-full" src={cyber}  alt="home "/>
                </div>



                <div className="bg-zinc-200 shadow-xl text-center flex flex-col absolute
            py-8  mx-1 md:left-1/2 transform md:-translate-x-1/2
             border border-slate-300 rounded-xl md:min-w-[760px] bottom-[5%] ">
                    <p >Data Services</p>
                    <div className="flex px-4 flex-wrap justify-bteween">
                        <p className="flex px-4 py-2 text-slate-500"><CloudUploadIcon className="h-6 text-blue-500 " /> App Security</p>
                        <p className="flex px-4 py-2 text-slate-500"><DatabaseIcon className="h-6 text-blue-500 " /> Dashboard Design</p>
                        <p className="flex px-4 py-2 text-slate-500"><PaperAirplaneIcon className="h-6 text-blue-500 " /> Cloud Data</p>
                        <p className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-blue-500 " /> API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}