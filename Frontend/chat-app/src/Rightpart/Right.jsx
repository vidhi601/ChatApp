import React from 'react'
import UserProfile from './UserProfile'
import TextPart from './TextPart'
import Chatbox from './Chatbox'

function Right() {
  return (
    <div className="w-[70%] h-screen bg-slate-900 text-white">

      
      <UserProfile />

      
      <div className="overflow-y-auto hide-scroll" style={{maxHeight:"calc(92vh - 8vh)"}}>
        <TextPart />
      </div>

      
      <Chatbox />

    </div>
  )
}

export default Right