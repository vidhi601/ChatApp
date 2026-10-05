import React from 'react'

function Button({ onClick }) {
  return (
    <div>
      <button
        onClick={() => {
          console.log("BUTTON CLICKED");
          onClick();
        }}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold mt-2 hover:bg-indigo-700 transition"
      >
        Sign Up
      </button>
    </div>
  )
}

export default Button;