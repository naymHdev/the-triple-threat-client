import { useState } from "react";
import { Mail, Lock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      phone,
      role: "unverified",
    };
    console.log(userData);
    // Submit user data to your backend API
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 ">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 lg:-mt-40">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Create an Account 🚀</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
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

            {/* Password Input */}
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

            {/* Phone Number Input */}
            <div className="form-control">
            <label className="label">
                <span className="label-text">Phone</span>
              </label>
           
              <div className="input-group">
    
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input input-bordered w-full mt-1"
                  required
                />
              </div>
            </div>

            <button type="submit" className="bg-[#9333ea] px-2 py-2 rounded-md text-white cursor-pointer w-full mt-4">
              Register
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link to={'/login'} className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
