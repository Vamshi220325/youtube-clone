import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice';

import {generateRandomName, getrandomComment} from '../utils/helper';


const LiveChat = () => {
    const dispatch=useDispatch();
    const [liveMessage,setLiveMessage]=useState("");
    
    const chatMessages=useSelector(store=>store.chat.messages)
    useEffect(()=>{
       const timer= setInterval(()=>{
        dispatch(addMessage({
            name:generateRandomName(),
            message:getrandomComment()
        }));
        
       },1500);
       return ()=>{
        clearInterval(timer);
       }
    },[])
    
  {return  (
    <div>
    <div className=' w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll rounded-lg flex flex-col-reverse'>
      { chatMessages.map((c,index)=>(<ChatMessages key={index} name={c.name} message={c.message} />))
        }
       
     </div>
     <form onSubmit={(e)=>{e.preventDefault();
        dispatch(addMessage({
            name:"You",
            message:liveMessage
        }));
        setLiveMessage("");
     }} className='bg-slate-100 p-2 ml-2 rounded-lg border border-black w-full'>
          <input value={liveMessage} className='w-10/12 px-2 py-1'  type="text" placeholder='chat here' onChange={(e)=>setLiveMessage(e.target.value)}/>
          <button className='py-1 px-3 mx-2 rounded-lg bg-slate-200 hover:bg-slate-300'>Send</button>
        </form>
    </div>
  )}
}

export default LiveChat