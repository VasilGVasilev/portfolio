'use client'

import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { imageLoader } from './imgLoader'

export default function RootLayout({ children }) {
  const [toggleClicked, setToggleClick] = useState(false);

  const toggleNavbar = () => {
    setToggleClick(state => !state);
  }
  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }

  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
//     <html lang="bg-white" className='scroll-smooth'>
//       <body className='bg-white font-roboto'>
//         <header>

//           <div className={`fixed z-10 flex-col w-full h-16 md:h-16 lg:h-[92px] text-base bg-gradient-to-r from-indigo-500 to-purple-900 md:opacity-95 md:hover:opacity-100`}>
//             <div className='px-10 py-4 md:py-2 flex justify-between'>
//               <div className='flex items-center justify-center blur-0'>

//                 <a className='hover:scale-110 duration-200 relative h-8 w-20 flex justify-center items-center md:h-10 md:w-24 lg:h-16 lg:w-44 border-2 border-white md:border-none md:hover:border-2 md:hover:border-white ' href={`/`}>
//                   {/* <Image
//                     loader={imageLoader}
//                     src="/ixora.webp"
//                     alt="Ixora Logo"
//                     width={986}
//                     height={355}
//                   /> */}
//                   <div className='w-10 h-10 bg-black' ></div>

//                 </a>
//               </div>

//               <div>

//                 {/* desktop menu */}
//                 <div className='items-center text-white hidden md:block' >
//                   <nav className='flex'>

//                     <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm' href={'/'} >Начало</Link>
//                     <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm text-center' href={'/description'}>За сградата</Link>
//                     <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm' href={'/apartments'}>Апартаменти</Link>
//                     <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm' href={'/investor'}>Инвеститор</Link>
//                     <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm' href={'/contacts'}>Контакти</Link>
//                   </nav>
//                 </div>

//                 {/* mobile button */}
//                 <div className='md:hidden flex items-center pt-1' onClick={toggleNavbar}>
//                   <div className="space-y-2 cursor-pointer">
//                     <span className="block w-8 h-0.5 bg-white"></span>
//                     <span className="block w-8 h-0.5 bg-white"></span>
//                     <span className="block w-8 h-0.5 bg-white"></span>
//                   </div>
//                 </div>

//               </div>
//             </div>


//             {/* mobile menu */}
//             <div onClick={toggleNavbar} className={`md:hidden flex flex-col bg-gradient-to-r from-indigo-600 to-purple-950 w-full text-white ${ toggleClicked === true ? '-translate-x-0 duration-300' : 'translate-x-full duration-300'}`}>
//               <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-gray-800 hover:text-red-500 hover:bg-gray-800' href={'/'} >Начало</Link>
//               <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-gray-800 hover:text-red-500 hover:bg-gray-800' href={'/description'}>За сградата</Link>
//               <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-gray-800 hover:text-red-500 hover:bg-gray-800' href={'/apartments'}>Апартаменти</Link>
//               <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-gray-800 hover:text-red-500 hover:bg-gray-800' href={'/investor'}>Инвеститор</Link>
//               <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-gray-800 hover:text-red-500 hover:bg-gray-800' href={'/contacts'}>Контакти</Link>
//             </div>

            

//           </div>

//         </header>

//         <main className='app'>
// {/* fixed navbar requires height to be same for background of that navbar to align other divs below accordingly */}
//           <div className='grid place-items-center h-16 md:h-16 lg:h-[92px]'>

//           </div>
//           {children}
//         </main>

//         <footer>

//           <div className="h-fit w-full flex-col p-10 bg-gradient-to-r from-indigo-500 to-purple-900 lg:px-40">
//             <div className='flex justify-center relative bottom-9'>
//               <img src="/up-to-top.svg" className="w-10 h-10 cursor-pointer animate-bounce" onClick={toTopHandle} alt="up-to-top-btn" />
//             </div>
//             <div className='flex justify-center items-center'>
//               <div className='md:flex md:justify-center'>

//                 <div className='md:text-center'>
//                   <div className='text-orange-500 font-mono text-xl'>Ixora Luxury Residence</div>
//                   <div className='p-3 text-white font-mono text-sm'> Ixora Luxury Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша</div>
//                 </div>
//                 <div className='md:text-center'>
//                   <div className='text-orange-500 font-mono text-xl'>Контакти</div>
//                   <div className='p-3'>
//                     <div className="py-2 flex space-x-3 items-center">
//                       <div className='w-10 h-10 bg-black' ></div>
//                       {/* <Image
//                         src="/green-phone.svg"
//                         alt="Phone Ring"
//                         className="bg-transparent animate-pulse"
//                         width={20}
//                         height={8}
//                       /> */}
//                       <div className="text-sm text-white"><a href={`tel:00359886879993`}>00359886879993</a></div>
//                     </div>
//                     <div className="py-2 flex space-x-2 items-center">
//                     <div className='w-10 h-10 bg-black' ></div>

//                       {/* <Image
//                         src="/email.svg"
//                         alt="Email"
//                         className="bg-transparent animate-pulse"
//                         width={20}
//                         height={8}
//                       /> */}
//                       <div className="text-sm text-white"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>


//           </div>

//         </footer>
//       </body>
//     </html>