import React from 'react'
import { useSelector } from 'react-redux';

const PrintThem = ({v}) => {

        const {snippet,statistics}=v;
    const {channelTitle,thumbnails,title}=snippet;
 const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
   return (
    <div className={`" p-2 m-2 shadow-lg rounded-lg h-[350px] " ${isMenuOpen?'w-80 ':'w-72'}  `}>
        <div>
            <img className='rounded-lg' alt="img"src={thumbnails.medium.url}/>
        </div>
        <div>
            <ul>
                <li className='font-bold py-1'>{title}</li>
                <li>{channelTitle}</li>
         
                
            </ul>
        </div>
    </div>
  )
}

export default PrintThem