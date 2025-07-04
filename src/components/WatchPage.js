import React, {  useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentConainer from './CommentConainer';

import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeSideBar())
    },[dispatch]);
    const [searchParams]=useSearchParams();
   
  return (
    <div className='p-2 mx-2 w-full'>
      <div className='flex w-full'>
         <div >
        <iframe width="900" height="450" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
         title="YouTube video player" 
         frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>

         </div>
         <div className='w-full  rounded mx-2'>
      <LiveChat/>
        </div>
    </div>
    <div className='p-2 w-[900px]'>
      <CommentConainer/>
    </div>
    </div>
  )
}

export default WatchPage