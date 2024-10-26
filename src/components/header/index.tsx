/* eslint-disable @next/next/no-img-element */
"use client"

import Link from 'next/link'
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center justify-between py-2 px-4 sm:px-6 bg-white w-full border-b-gray-700">
      <div className='max-w-7xl mx-auto w-full flex justify-between items-center'>
        <div className="flex items-center">
          <img src="https://www.ongsalvacao.com/wp-content/uploads/2024/10/123123124-1.svg" alt="logo" className='w-[150px] h-[50px] sm:w-[200px] sm:h-[60px]' />
        </div>
        
        {/* <nav className="hidden md:flex space-x-6">
          <Link href="/#" className="text-black font-bold">Como ajudar</Link>
          <Link href="/#" className="text-black font-bold">Descubra</Link>
          <Link href="/#" className="text-black font-bold">Como funciona</Link>
          <Link href="/#" className="text-black font-bold">Minha conta</Link>
        </nav> */}

        <button className=" bg-[#24CA68] hover:bg-[#15a34a] text-white p-2 px-3 rounded-md text-sm sm:text-base font-bold">
          Doar agora
        </button>

        {/* <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button> */}
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-lg z-50 md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/#" className="text-black font-bold">Como ajudar</Link>
            <Link href="/#" className="text-black font-bold">Descubra</Link>
            <Link href="/#" className="text-black font-bold">Como funciona</Link>
            <Link href="/#" className="text-black font-bold">Minha conta</Link>
            <button className="bg-[#15a34a] hover:bg-[#15a34a] text-white p-2 px-3 rounded-md text-sm font-bold">
              Criar vaquinha
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
