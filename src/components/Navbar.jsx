'use client'
import React from 'react'
import Scrambler from './Scrambler'
import GradientText from './GradientText'

export default function Navbar() {
  return (
    <>

<div className="flex flex-col items-center justify-center mt-4 "  x-data="appData()" x-init="appInit()">
    <div className="flex flex-col">
      
       
        {/* <!-- Navbar --> */}
        <nav className="flex justify-around py-4 backdrop-blur-md fixed top-0 left-0 right-0 z-10">
  


            {/* <!-- Logo Container --> */} 
            <div className="flex items-center">
                {/* <!-- Logo --> */}
                <a className="cursor-pointer"  rel="noreferrer" href="/" >
                    <GradientText styling={
        "text-xl md:text-xl text-transparent  flex items-center justify-center"
      }
      gradient={"#2c3e50 ,#4ca1af  "}>

                        <Scrambler texts={['Mostofa D.']}  speed={.7} tick={1} scramble={4}  seed={0} chance={0.5} overDrive={35}/>
                         </GradientText>
                </a>
            </div>

            {/* <!-- Links Section --> */}
            <div className="items-center hidden space-x-8 lg:flex">
                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Home
                </a>

        

                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Blog
                </a>

                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    About Me
                </a>
            </div>

            {/* <!-- Icon Menu Section --> */}
            <div className="flex items-center space-x-5">
                {/* <!-- Register --> */}
                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">

              
                    Contact
                </a>

              
            </div>
        </nav>
    </div>

</div>


    </>

  )
}
