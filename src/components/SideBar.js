import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
 
  return (
    <div className=' p-5 shadow-lg w-2/12 relative 
      '  >
      
      <ul className='py-4 px-2'>
        <Link to="/"><li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>Home</li> </Link>
          <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>Shorts</li>
          
      </ul>
       <h1 className='font-bold text-lg pt-5 px-2'>You</h1>
      <ul className='py-4 px-2'>
        <li className='text-lg bg-gray-100 px-2   mb-1 rounded-lg hover:bg-gray-300 cursor-pointer w-full'>Videos</li>
          <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>Courses</li>
           <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>History</li>
            <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>Playlist</li>
            <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>Watch later</li>
            <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>Liked </li>
      </ul>
        <h1 className='font-bold text-lg pt-5 px-2'>Subscriptions</h1>
      <ul className='py-4 px-2'>
        <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer w-full'>Channel1</li>
          <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>Channel2</li>
           <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>Channel3</li>
            <li className='text-lg bg-gray-100 px-2 mb-1 rounded-lg hover:bg-gray-300 cursor-pointer'>Channe4</li>
      </ul>
    </div>
  )
}

export default SideBar