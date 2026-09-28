import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
       <p className="text-center text-sm text-slate-500 mt-6">
  Already have an account?{" "}
  <Link
    to="/login"
    className="text-indigo-600 font-medium hover:underline"
  >
    Login
  </Link>
</p>
    </div>
  )
}

export default Login
