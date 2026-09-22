import React from 'react'

function UserProfile() {
  return (
    <div className='flex justify-center items-center space-x-5 bg-gray-800 hover:bg-gray-700 p-1 rounded-lg cursor-pointer h-[8vh]'>
      <div className="avatar ml-2">
          <div className="w-12 h-12 rounded-full">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            />
          </div>
        </div>
        <div>
          <h1 className='text-xl'>kashvi</h1>
          <h1 className='text-sm'>offline</h1>
        </div>
    </div>
  )
}

export default UserProfile
