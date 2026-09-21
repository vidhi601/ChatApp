import React from 'react'


function Users({name,email}) {
  return (
    <div>
          <div className="flex items-center space-x-3 mt-5 ml-3 hover:bg-slate-500 rounded-lg w-full cursor-pointer ">
 
        <div className="avatar ml-2">
          <div className="w-12 h-12 rounded-full">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            />
          </div>
        </div>

        <div>
          <h1 className="font-bold">kashvi</h1>
          <p className="text-sm">kashvimalik11@gmail.com</p>
        </div>

      </div>
    </div>
  )
}

export default Users;
