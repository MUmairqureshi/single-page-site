import React from "react";

export function About() {
    return (
        <div name="about" className="w-full mt-[2%] my-32 ">
            <div className="  max-w-[1240px] mx-auto ">
                <div className="text-center py-7 mt-[100px]">
                    <h1 className="font-bold py-8 text-5xl">Trusted by developers across the world
                    </h1>
                    <h3 className=" text-gray-700 px-4 text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.

                    </h3>
                </div>



                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className=" border shadow-xl   rounded-xl  py-8 " >
                        <p className="text-6xl font-bold text-blue-800"> 100%</p>
                        <p className="text-gray-400 mt-2">Completion</p></div>
                    <div className="shadow-xl border   rounded-xl   py-8 ">
                        <p className="text-6xl font-bold text-blue-800"> 24/7</p >
                        <p className="text-gray-400 mt-2" >Delivery</p></div>
                    <div className="shadow-xl border   rounded-xl py-8 ">
                        <p className="text-6xl font-bold text-blue-800"> 100K</p>
                        <p className="text-gray-400 mt-2">Transactions</p>
                    </div>
                </div>

            </div>
        </div>
    )
}