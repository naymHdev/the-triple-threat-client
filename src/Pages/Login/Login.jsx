import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 ">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 lg:-mt-40">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Welcome Back 👋</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="input-group">
                
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full mt-1"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="input-group">
                
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full mt-1"
                  required
                />
              </div>
            </div>

            <button type="submit" className="bg-[#9333ea] px-2 py-2 rounded-md text-white cursor-pointer w-full mt-4">
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <Link to={'/register'}  className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
