import React from 'react';
import { FaSearch } from "react-icons/fa";


function Search() {
  return (
   <div className='h-[10vh]'>
      <div className='px-2 py-2'>

    <form action="">
    <div className='flex space-x-2 gap-3'>

   <label className="input w-[80%]">
 
  <input type="search" required placeholder="Search" />
</label>
<button>
  <FaSearch className='text-4xl p-2 hover:bg-gray-600 rounded-lg' />

</button>

    </div>
    </form>
    </div>
    </div>
   
  )
}

export default Search;
