import React from 'react'
import AllButtons from './AllButtons'

const ButtonList = () => {
   const alltheButtons=[
        "All","Music","Telugu Cinema","Live","News","WebSeries","Indian Pop Music","Guitar Chords","Reacently Uploaded","Watched"
    ]
  return (
    <div className='flex mx-6'>
    
              {alltheButtons.map((btn,index)=>< AllButtons btn={btn} key={index}/>)} 
    </div>
  )
}
  

export default ButtonList