import React from 'react';
import Search from './Search';
import User from './User';
import Logout from './Logout';
import { Link } from 'react-router-dom';

function Left() {
  return (
    <div className='w-[30%] h-screen bg-black text-white'>
        <Search/>
        <User/>
       
       <Link to="/signup">
       <Logout/>
       
       </Link>
     
    </div>
  )
}

export default Left;
