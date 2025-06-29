import React from 'react'

import { Link } from 'react-router-dom';
import PrintThem from './PrintThem';

const SearchedVideosContainer = ({videos}) => {
    
  
   

  

  return (
    <div className='flex flex-wrap'>
            {videos.map((video,index)=><Link to={"/watch?v="+video.id.videoId} key={index}><PrintThem v={video} /></Link>)}

    </div>

  )
};


export default SearchedVideosContainer