import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
         <div>
       <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block  md:mt-4  text-3xl bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text font-bold " href="#">
                GOKULNATH 
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex lg:me-10 items-center font-medium md:mt-6 gap-6 text-lg">
                {["Home","Table"].map((item) => (
                  <li key={item}>
                    <Link className="nav-des text-base font-medium border border-transparent hover:border-b-blue-500 hover:scale-110    hover:text-blue-500 transition-all duration-500  " to={item === "Home" ? "/" : `/${item.toLowerCase()}`} >
                      {item}
                    </Link>
                    
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center  md:mt-6 gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="rounded-md hidden md:block  bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm border border-transparent hover:bg-white hover:text-black hover:border-blue-500 " href="#">
                Login
              </a>

              
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                {isOpen ? (
                  /* Close (X) icon */
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  /* Hamburger (☰) icon */
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden">
            <ul className="mt-4 space-y-2 text-center">
              {["Home","Table"].map((item) => (
                <li key={item}>
                  <Link
                    className="block text-gray-500 transition hover:text-gray-700"
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)} // Close menu when clicking a link
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
    </div>
    </div>
  )
}
