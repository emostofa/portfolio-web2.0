import React from 'react'

export default function Navbar() {
  return (
    <>

<div className="flex flex-col items-center justify-center mt-32"  x-data="appData()" x-init="appInit()">
    <div className="flex flex-col">
      
        <div className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"></div>

        {/* <!-- Navbar --> */}
        <nav className="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10">

            {/* <!-- Logo Container --> */} 
            <div className="flex items-center">
                {/* <!-- Logo --> */}
                <a className="cursor-pointer" target='_blank' rel="noreferrer" href="https://github.com/emostofa" >
                    <h3 className="text-2xl font-medium text-blue-500">
                        Mostofa D.
                         </h3>
                </a>
            </div>

            {/* <!-- Links Section --> */}
            <div className="items-center hidden space-x-8 lg:flex">
                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Home
                </a>

                <a className="flex text-gray-600 
                    cursor-pointer transition-colors duration-300
                    font-semibold text-blue-600">
                    Themes
                </a>

                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Developers
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
