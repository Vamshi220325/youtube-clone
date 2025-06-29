import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import { BlackBorderVideoCard } from './VideoCards';
import { Link } from 'react-router-dom';

import CallShimmer from './CallShimmer';
import { useSelector } from 'react-redux';

import SearchedVideosContainer from './SearchedVideosContainer';


const VideoContainer = () => {
     
 
   const videoList=useSelector((store)=>store.searchedVideos.videolist);
   
    
    
  

  const [videos,setVideos]=useState([]);
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_API);
    const json=await data.json();
    setVideos(json.items);
   
  }
  useEffect(()=>{
      if(videoList.length===1){setVideos(videoList);}
   else getVideos();
  },[videoList]);
 
  if(videos.length===0)return <CallShimmer/>
 
 
  
 
 
   
  return  videoList.length===0?(
    <div className='flex flex-wrap  w-auto'>
   
      {videos.map((video)=><Link to={"/watch?v="+video.id} key={video.id}><BlackBorderVideoCard videoList={video} /></Link>)}
      
    </div>
  ):<div className='flex flex-wrap  w-auto'>
      
   
      {videoList.map((video,index)=>  <SearchedVideosContainer key={index} videos={video} />)}
      
    </div>
}

export default VideoContainer