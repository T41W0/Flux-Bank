import React from 'react'
import Navbar_li from './Data/Navbar_li'

const Navbar = () => {
  return (
    <div>
      <header className='
      flex 
      justify-between 
      fixed w-full px-4 md:px-12 
      py-3 items-center 
      bg-gradient-to-r from-purple-500 to-black-500
      '>
        <div> 
            <h1 className=' logo text-2xl font-bold font-sans'>
                Flux Bank
            </h1>
        </div>
        <nav>
         <button className='md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 h-6">
          <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>
        </button>
        <div className='fixed right-0 left-0 w-full z-50 p-4 md:relative md:flex'> 
        {Navbar_li.map((item,index)=>(
            <div key={index} className=''>
                <ul className='md:px-4'>
                    <li><a href={item.link}>{item.name}</a></li>
                </ul>
            </div>
        ))}
        <ul>
            <li>
             <button>
               <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="w-6 h-6">
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
           </li>
        </ul>
        </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
