import React from "react";
import { CheckIcon } from '@heroicons/react/solid';

export function Pricing() {
    return (
        <div name="pricing" className='w-full h-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute '> </div>
            <div className="mx-auto max-w-[1240px] py-12 pt-50">
                <div className="relative text-center py-4">
                    <h1 className="text-3xl py-3 text-gray-400 ">PRICING</h1>
                    <h2 className="text-5xl py-3 font-bold text-white ">The right price for your research.</h2>
                    <p className="text-3xl py-3   font-bold text-gray-400" > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                        laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
                        voluptatum iste.</p></div>

                <div className="grid md:grid-cols-2 ">

                    <div className="bg-white text-black shadow-xl border m-4  rounded-xl py-6 p-8 relative">
                        <span className=" text-blue-700 bg-gray-300 rounded-2xl p-2">
                            STANDARD
                        </span>
                        <div className=""><h2 className="text-7xl py-4   font-bold  flex ">$49 <span className="text-gray-400 text-xl justify-end flex-col flex "> /mo</span></h2 ></div>
                        <p className="py-8 text-2xl text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <div className="py-3 ">
                            <div className="flex py-3"><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl  ">Lorem, ipsum dolor.</p></div>
                            <div className="flex py-3"><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl ">Lorem, ipsum dolor.</p></div>
                            <div className="flex py-3"><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl ">Lorem, ipsum dolor.</p></div>
                            <div className="flex py-3"><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl ">Lorem, ipsum dolor.</p></div>
                            <div className="flex py-3"><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl ">Lorem, ipsum dolor.</p></div>
                        </div>
                        <button className="p-2 w-full my-5 py-3 text-2xl">Get Started</button>
                    </div>
                    <div className="bg-white text-black shadow-xl border m-4  rounded-xl py-6 p-8 relative">                        <span className=" text-blue-700 bg-gray-300 rounded-2xl p-2">
                            STANDARD
                        </span>
                        <div className=""><h2 className="text-7xl py-4   font-bold  flex ">$49 <span className="text-gray-400 text-xl justify-end flex-col flex "> /mo</span></h2 ></div>
                        <p className="py-8 text-2xl text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <div className="py-3 ">
                            <div className="flex py-3 "><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl  ">Lorem, ipsum dolor.</p></div>
                            <div className="flex py-3"><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl  ">Lorem, ipsum dolor.</p></div>
                            <div className="flex py-3"><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl  ">Lorem, ipsum dolor.</p></div>
                            <div className="flex py-3"><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl  ">Lorem, ipsum dolor.</p></div>
                            <div className="flex py-3"><CheckIcon className="text-green-700 w-8 mr-5" /><p className=" text-2xl  ">Lorem, ipsum dolor.</p></div>
                        </div>
                        <button className="p-2 w-full my-5 py-3 text-2xl">Get Started</button>
                    </div></div>
                </div>


            </div>
        // </div>
    )
}