import React, { useState } from 'react'
import Sidebar_li from './Data/Sidebar_li';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOPen] = useState(true);
  return (
        <div>
          <div className={`relative top-0 bottom-0 lg:left-0 px-4 transition-all duration-500 justify-end text-center backdrop-blur-sm bg-white/30 h-[96%] w-[20rem] ${open ? 'w-[20rem]':'w-16'} rounded-xl ml-1 mt-1 `} 
          onClick={()=>{

          }}>
            <div className='text-gray-100 text-xl'>
              <div className='p-2.5 my-1 flex items-center justify-between '>
                     <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className='w-6 h-6 cursor-pointer'>
                      <path 
                      stroke-linecap="round"  
                      stroke-linejoin="round" 
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      onClick={() => setOPen(!open)}
                      />
                    </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ml-20 lg:hidden 
                      ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                       <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                      </svg>
              </div>
            <hr className='my-2 text-gray-600'></hr>
              <div className='p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 ring-2 focus:ring-gray-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                 <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 
                 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                </svg>
                <input type='search' title='serach' placeholder='Search' className={`ml-4 text-xl w-full bg-transparent focus:outline-none 
                {${!open && 'hidden'}`}/>
            </div>
               {Sidebar_li.map((item, index)=>(
                <div key={index} className='link group flex items-center text-md gap-3.5 p-2.5 my-3 mb-4 hover:bg-gray-800 rounded-md'>
                  <span>
                  {item.icon}
                  </span>
                  <ul>
                    <li>
                      <a href='/' style={{transitionDelay:`${index + 3}00ms`,}} className={`group lg:leading-6 mb-4 font-sans font-medium lg:text-sm
                     text-slate-700 dark:text-slate-400 hover:text-slate-300 whitespace-pre duration-500 
                     ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                      {item.name}
                      </a>
                    </li>
                  </ul>
                  <div>
                  <ul className='mb-8'>
                    <li>
                      <a href='/'className={`${!open && 'hidden'}
                      absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg 
                      px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300`}>
                        {item.name}
                      </a>
                    </li>
                  </ul>
                  </div>
                </div>
            
               ))}
              </div>
             </div>
        </div>

 
  )
}

export default Sidebar
