import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PrintThem from './PrintThem';

const SearchedVideosContainer = ({videos}) => {
    
    const {snippet,statistics}=videos[0];
    
     const {channelTitle,thumbnails,title}=snippet;
   
 const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  

  return (
    <div className='flex flex-wrap'>
            {videos.map((video,index)=><Link to={"/watch?v="+video.id.videoId} key={index}><PrintThem v={video} /></Link>)}

    </div>

  )
};


export default SearchedVideosContainer