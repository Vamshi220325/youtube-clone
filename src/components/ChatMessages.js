import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessages = ({name,message}) => {
    
  return (
    <div className='items-center shadow-sm rounded-lg px-2 py-1'>
        <div className='flex items-center '>
             
             <img className="h-8  "src={USER_ICON}alt="user-logo"/>
             
             <p className='font-bold px-2 '>{name}</p>
             
             
             
        </div>
        <div>
            <p className=' '>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessages