import React from 'react'
import {USER_ICON } from '../utils/constants';
 

const commentsData=[
   {name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },]
   },{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },]
   },]
   },
   {name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },]
   },{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },]
   },]
   }]
   },
   {name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },]
   },
   {name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },
   {name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },]
   },
   {name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },
   {name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },]
   },{name:"User1",
    text:"I always surprise with his content delivery style and teaching a topic in beautiful way they are real world example and from scratch",
    replies:[]
   },]
   },
    
];

const Comment=({data})=>{
    const {name,text,replies}=data;
    return  <div className='flex bg-gray-100 p-2  rounded-lg my-2'>
        <img className="w-8 h-8 mt-2 "src={USER_ICON} alt="user-icon"/>
        <div className='px-3 '>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>

}
const CommentList=({comments})=>{
    return comments.map((comment,index)=>(
    <div key={index}>
        < Comment data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
             <CommentList comments={comment.replies}/>
        </div>
        </div>))
}
const CommentConainer = () => {
  return (
    <div className="overflow-y-scroll h-[450px]">
       <h1 className=''>
        <CommentList comments={commentsData}/>
       </h1>
    </div>
  )
}

export default CommentConainer