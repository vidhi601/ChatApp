import React from 'react'
import Users from './users'

function User() {
  return (
    <div className="mt-3">

      <h1 className="px-2 py-3 text-white bg-slate-700 font-semibold rounded-lg">
        Message
      </h1>
      <div className='overflow-y-auto hide-scroll' style={{maxHeight:"calc(84vh - 10vh)",    scrollbarWidth: "none",
    msOverflowStyle: "none"
}}>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      </div>
    
    
      
     
  

     
      

      

        
       
    </div>
  )
}

export default User