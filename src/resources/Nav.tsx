
import Link from 'next/link'
import React from 'react'
import {Logo} from "@/assets"
import Image from 'next/image'
import {ModeToggle} from './Toggle'

function Nav() {
  return (
    <div className="background flex justify-between">
        <div className='flex p-2'>
          <Link className='flex p-2' href={'/'}>
        <Image className=' w-16' src={Logo} alt="alchademy" />
        <h1 className='pt-2 pl-1 text-2xl font-bold text-[#FF5A1E]'>ALCHADEMY</h1>
        </Link>
        </div>

        <div className='  py-5 font-medium'>
          <ul className='flex py-1'>
            <li className='px-6 hover:underline hover:text-[#FF5A1E]'>
            {/* <Link  href="#">Courses</Link> */}
            </li>
            <li className='px-6 hover:underline hover:text-[#FF5A1E]'>
            <Link className='text-lg font-bold' href="/chat-llm">Chat-llm</Link>
            </li>
            <li className='px-6  hover:underline hover:text-[#FF5A1E]'>
            <Link className='text-lg font-bold '  href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        
        
        <div className='p-3 pr-8 drop-shadow-lg'>
          <ModeToggle/>
          {/* <Link href={"/dashboard"}>Dashboard</Link> */}
        </div>
    </div>
  )
}

export default Nav