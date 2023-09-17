import React from 'react'
import Navbar_li from './Data/Navbar_li'
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <div className=' flex gap-6'>
            <Sidebar />
      <header className='flex justify-between w-[70%]'>
        <div> 
            <h1 className=' logo text-2xl font-bold font-sans'>
                Flux Bank
            </h1>
        </div>
        <nav>
         <button type="button" title='navigate' className="text-slate-500 w-8 h-8  md:hidden flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
           <svg width="24" height="24" fill="none" aria-hidden="true">
             <path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
           </svg>
            </button>
        <div className='fixed right-0 left-0 w-full z-50 p-4 md:relative md:flex'> 
        {Navbar_li.map((item,index)=>(
            <div key={index} className=''>
                <ul className='md:px-4 hover:underline hover:underline-offset-2 duration-2 '>
                    <li><a href={item.link}>{item.name}</a></li>
                </ul>
            </div>
        ))}
        
        </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
