import React from 'react'
import { IoSend } from "react-icons/io5";


function Chatbox() {
  return (
    <div className='flex w-full bg-slate-800  space-x-2 p-2 h-[8vh] '>
        
        
            <div className='w-[70%] rouned-lg '>
      <input type="text" placeholder="Type here" className="input w-full" />
      </div>
      <div>
      <button className='text-2xl p-2  rounded-full hover:bg-slate-700 '>
    <IoSend />

      </button>
      </div>
        </div>
    
    
  )
}

export default Chatbox
