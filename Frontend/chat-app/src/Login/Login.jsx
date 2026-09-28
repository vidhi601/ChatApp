import { Link } from "react-router-dom";
import InputField from "../Signup/Input";
import Heading from "./Heading";
import SignupLink from "./SignupLink";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <Heading/>

        <form className="space-y-5">

          <InputField
            label="Email"
            placeholder="Enter your email"
            type="email"
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Login
          </button>

        </form>

        <SignupLink/>

      </div>
    </div>
  );
}

export default Login;