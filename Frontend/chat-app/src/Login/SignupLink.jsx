import React from 'react'
import { Link } from "react-router-dom";


function SignupLink() {
  return (
    <div>
      <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
    </div>
  )
}

export default SignupLink
