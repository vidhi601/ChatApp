
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Signup/Input";
import Heading from "./Heading";
import SignupLink from "./SignupLink";

function Login() {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "http://localhost:3004/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formdata),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        return;
      }

alert("Login successful");
    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to connect to server");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <Heading />

        <form onSubmit={handleLogin} className="space-y-5">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            onChange={handleChange}
          />

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <SignupLink />
      </div>
    </div>
  );
}

export default Login;
