import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/images/nextCalendarAppLogo.png"
export default function Navbar() {
  return (
    <div className="w-full h-20  flex bg-gray-800 items-center justify-between px-6 shadow-md">
        <div className='w-[80%] mx-auto flex justify-between items-center'>
     
     {/* Logo Section */}
<div className="flex items-center group hover:cursor-pointer">
  <Link href="/" className="flex items-center">
    <Image src={Logo} alt="logo" width={40} height={40} />
    <p className="ml-2 font-bold text-orange-400 text-lg">Calendar App</p>
  </Link>
</div>


      {/* Navigation Links */}
      <ul className="flex space-x-6 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </div></div>
  )
}
