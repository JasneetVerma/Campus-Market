
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    alert('Login form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-[#FFF9F4] flex flex-col">

      {/* Logo */}
      <div className="px-6 sm:px-12 lg:px-16 pt-8">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-md border-[3px] border-[#292329] flex items-center justify-center">
            <span className="text-[#292329] font-bold text-lg">▣</span>
          </div>

          <span className="text-[#69405F] font-semibold text-sm sm:text-base">
            Campus Marketplace
          </span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-between gap-12 px-6 sm:px-12 lg:px-16 py-12">

        {/* Left Section */}
        <div className="hidden md:block max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#2D272D]">
            Buy & sell within
            <br />
            your <span className="text-[#69405F]">campus.</span>
          </h1>

          <p className="text-[#817780] mt-5 text-sm lg:text-base">
            Find useful things from students around you.
          </p>

          <p className="text-[#817780] mt-2 text-sm lg:text-base">
            Buy what you need. Sell what you don't.
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md bg-white rounded-xl p-7 sm:p-9 lg:p-10 mx-auto md:mx-0">

          <div className="mb-7">
            <h2 className="text-xl font-bold text-[#2D272D]">
              Welcome back 👋
            </h2>

            <p className="text-sm text-[#817780] mt-2">
              Login to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-[#302A30] mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your college email"
                className="w-full h-[42px] px-4 border border-[#E9E0DB] rounded-md text-sm text-[#302A30] placeholder:text-[#958B92] outline-none focus:border-[#69405F] focus:ring-1 focus:ring-[#69405F] transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-[#302A30] mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-[42px] px-4 border border-[#E9E0DB] rounded-md text-sm text-[#302A30] placeholder:text-[#958B92] outline-none focus:border-[#69405F] focus:ring-1 focus:ring-[#69405F] transition"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => alert('Forgot password feature coming soon!')}
                className="text-xs font-medium text-[#69405F] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-[42px] bg-[#69405F] text-white text-sm font-semibold rounded-md hover:bg-[#57344F] active:scale-[0.99] transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-xs text-[#817780] mt-6">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-[#69405F] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;