
import React from 'react'
import {  useSelector } from 'react-redux';


const VideoCards = ({videoList}) => {
    
    const {snippet,statistics}=videoList;
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
                <li> {statistics.viewCount/1000}k Views</li>
                
            </ul>
        </div>
    </div>
  )
};
export const BlackBorderVideoCard=({videoList})=>{
   

        return (
            <div >
                <VideoCards videoList={videoList} /></div>
        )
        
    
       
    
}

export default VideoCards;