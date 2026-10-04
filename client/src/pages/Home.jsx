
function Home() {
  return (
    <div className="min-h-screen w-full bg-[#fffaf6]">

      {/* Hero Section */}
      <section className="flex min-h-[65vh] w-full flex-col items-center justify-between gap-10 px-8 py-16 md:flex-row md:px-16">

        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Buy & Sell Within
            <br />
            your <span className="text-purple-800">Campus.</span>
          </h1>

          <p className="mb-8 max-w-lg text-base text-gray-600">
            Find useful things from students around you. Buy what you need.
            Sell what you don't.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-md border border-purple-800 bg-white px-7 py-3 font-medium text-purple-800 hover:bg-purple-50">
              Browse Listings
            </button>

            <button className="rounded-md bg-purple-800 px-7 py-3 font-medium text-white hover:bg-purple-900">
              Sell Something
            </button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex min-h-[300px] w-full items-center justify-center rounded-xl bg-[#f5e9f3] p-8 md:min-h-[380px] md:w-1/2">
          <div className="text-center">
            <div className="mb-4 text-6xl">🛍️</div>
            <h2 className="text-2xl font-semibold text-purple-900">
              Campus Essentials
            </h2>
            <p className="mt-2 text-gray-600">
              Books • Electronics • Hostel Items
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Image placeholder
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Features */}
      <section className="grid w-full grid-cols-1 gap-8 bg-white px-8 py-10 text-center sm:grid-cols-2 md:grid-cols-4 md:px-12">
        <div>
          <div className="mb-2 text-2xl">🛡️</div>
          <h3 className="font-semibold text-gray-800">Safe & Secure</h3>
          <p className="mt-1 text-sm text-gray-500">
            Verified students only
          </p>
        </div>

        <div>
          <div className="mb-2 text-2xl">🏫</div>
          <h3 className="font-semibold text-gray-800">Campus Only</h3>
          <p className="mt-1 text-sm text-gray-500">
            Buy and sell within college
          </p>
        </div>

        <div>
          <div className="mb-2 text-2xl">🤝</div>
          <h3 className="font-semibold text-gray-800">Student to Student</h3>
          <p className="mt-1 text-sm text-gray-500">
            Direct. Simple. Reliable.
          </p>
        </div>

        <div>
          <div className="mb-2 text-2xl">🏷️</div>
          <h3 className="font-semibold text-gray-800">Great Deals</h3>
          <p className="mt-1 text-sm text-gray-500">
            Save money on useful things
          </p>
        </div>
      </section>

    </div>
  )
}

export default Home