
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !college || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!termsAccepted) {
      setError('Please accept the Terms & Conditions.');
      return;
    }

    alert('Registration form submitted successfully!');
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
      <div className="flex-1 flex items-center justify-between gap-12 px-6 sm:px-12 lg:px-16 py-10">

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

        {/* Register Card */}
        <div className="w-full max-w-md bg-white rounded-xl p-6 sm:p-8 lg:p-9 mx-auto md:mx-0">

          <div className="mb-5">
            <h2 className="text-xl font-bold text-[#2D272D]">
              Create Your Account
            </h2>

            <p className="text-sm text-[#817780] mt-1">
              Join your campus marketplace today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-[#302A30] mb-1.5">
                Full Name *
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full h-[38px] px-3 border border-[#E9E0DB] rounded-md text-sm text-[#302A30] placeholder:text-[#958B92] outline-none focus:border-[#69405F] focus:ring-1 focus:ring-[#69405F] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-[#302A30] mb-1.5">
                Email *
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your college email"
                className="w-full h-[38px] px-3 border border-[#E9E0DB] rounded-md text-sm text-[#302A30] placeholder:text-[#958B92] outline-none focus:border-[#69405F] focus:ring-1 focus:ring-[#69405F] transition"
              />
            </div>

            {/* College */}
            <div>
              <label className="block text-xs font-semibold text-[#302A30] mb-1.5">
                College *
              </label>

              <select
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full h-[38px] px-3 border border-[#E9E0DB] rounded-md text-sm text-[#817780] bg-white outline-none focus:border-[#69405F] focus:ring-1 focus:ring-[#69405F] transition"
              >
                <option value="">Select your college</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-[#302A30] mb-1.5">
                Password *
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full h-[38px] px-3 border border-[#E9E0DB] rounded-md text-sm text-[#302A30] placeholder:text-[#958B92] outline-none focus:border-[#69405F] focus:ring-1 focus:ring-[#69405F] transition"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-[#302A30] mb-1.5">
                Confirm Password *
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full h-[38px] px-3 border border-[#E9E0DB] rounded-md text-sm text-[#302A30] placeholder:text-[#958B92] outline-none focus:border-[#69405F] focus:ring-1 focus:ring-[#69405F] transition"
              />
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-center gap-2 text-xs text-[#302A30] cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="accent-[#69405F]"
              />
              <span>
                I agree to the Terms & Conditions
              </span>
            </label>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            {/* Create Account */}
            <button
              type="submit"
              className="w-full h-[42px] mt-5 bg-[#69405F] text-white text-sm font-semibold rounded-md hover:bg-[#57344F] active:scale-[0.99] transition duration-200"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-xs text-[#817780] mt-5">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-[#69405F] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;