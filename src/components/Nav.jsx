import React from 'react'

const Nav = () => {
  return (
    <div className='bg-blue-700 top-0 z-10 flex text-white shadow-lg flex-nowrap flex-inline '>
    <img src=''alt='logo' className='w-[37px]'/>
    <button className='md:hidden text-3xl focus:outline-none item-right stroke-black text-black'>&#x1D118;</button>
    <section className="hidden md:block justify-betweeen items-center flex-inline">
    <ul className='flex space-x-3'>
    <li><a href="#home" className="hover:opacity-77">Home</a></li>
    <li><a href="#Event" className="hover:opacity-77">Event</a></li>
    <li><a href="#Latest" className="hover:opacity-77">Latest</a></li>
    <li><a href="#About" className="hover:opacity-77">About</a></li>
    </ul>
    </section>
    </div>
  )
}

export default Nav