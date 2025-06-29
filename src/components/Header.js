import React, { useEffect, useState } from 'react'
import { HAMBURGER_ICON, SEARCH_API, SEARCHED_VIDEOS_LIST_API_1, SEARCHED_VIDEOS_LIST_API_2, USER_ICON, YOUTUBE_LOGO } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';
import { addVideosList, removeVideos } from '../utils/searchVideos';
import searchedVideos from "../utils/searchVideos";

const Header = () => {
    const dispatch=useDispatch();
      const videoList=useSelector((store)=>store.searchedVideos.videolist);
    const [searchQuery,setSearchQuery]=useState("");
    const [suggestionSearch,setsuggestionSearch]=useState([]);
    const [cursorAtSearch,setCursorAtSearch]=useState(true);
     const searchCache=useSelector((store)=>store.search)
    useEffect(()=>{
        const timer=setTimeout(()=>
            { if(searchCache[searchQuery])
              {setsuggestionSearch
                (searchCache[searchQuery])}
              else
                {getSearchSuggestions()}},200);
        return()=>{
            clearTimeout(timer);
        }
    
    },[searchQuery])
    const getSearchSuggestions=async()=>{
           const data=await fetch(SEARCH_API+searchQuery);
           const json=await data.json();
        setsuggestionSearch(json[1]);
        dispatch(cacheResults({[searchQuery]:json[1]}))
        
        
    }
    
    const handleSideBar=()=>{
        dispatch(toggleMenu());
    }
    
    const handleListVideos=async(searchQuery)=>{
         if(videoList.length!==0){
             dispatch(removeVideos());
         }
         if(searchQuery===""){return;}
        const list=await fetch(SEARCHED_VIDEOS_LIST_API_1+searchQuery+SEARCHED_VIDEOS_LIST_API_2);
        const json=await list.json();
        dispatch(addVideosList(json.items));
        
       
        
    }
    const handleBlur=()=>{
        setTimeout(() => setCursorAtSearch(false), 1000);
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg h-auto'>
        <div className=' flex col-span-1'>
            <img 
            onClick={()=>handleSideBar()} className=" h-8 mx-2 my-6 cursor-pointer"src={HAMBURGER_ICON}alt="hamberger-logo" />
            <img className="h-20 "src={YOUTUBE_LOGO}alt="hamberger-logo"/>
        </div>
        <div className='  col-span-10 text-center px-10 pt-6'>
            <div>
            <input onFocus={()=>setCursorAtSearch(true)}
             onBlur={handleBlur}
            className='w-1/2 border border-gray-500  p-2 rounded-l-full px-4  ' type="text" placeholder='Search here' value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)} />
            <button onClick={()=>handleListVideos(searchQuery)} className='border  border-gray-500 p-2 bg-gray-200  hover:bg-gray-300 rounded-r-full px-4 '>Search</button>
            </div>
            {suggestionSearch.length!==0&&cursorAtSearch&&
            <div className='absolute bg-white py-2  ml-[13rem] w-[32rem] rounded-lg text-left border border-gray-100'>
                <ul className=' '>
        {suggestionSearch.map((search,index)=> 
             <li onClick={()=>
                   
                    setSearchQuery(search)

                } key={index}  
             className='hover:shadow-md  px-5 pb-1 rounded-lg cursor-pointer' >{search} </li>)}
                    
                </ul>
            </div>}
            
        </div>
        <div className='col-span-1'>
            <img className="h-8 "src={USER_ICON}alt="user-logo"/>
        </div>
    </div>
  )
}

export default Header