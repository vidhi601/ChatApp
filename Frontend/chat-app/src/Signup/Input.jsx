import React from 'react'

function Input({label,placeholder,name,type,onChange}) {
  return (
    
      <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
             {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
                name={name}
              onChange={onChange}   
         className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-black"
            />
          </div>
    
  )
}

export default Input;
