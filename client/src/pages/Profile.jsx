
function Profile() {
  return (
    <div className="min-h-screen w-full bg-[#fffaf6] px-6 py-10 md:px-16">

      {/* Page Heading */}
      <div className="mb-8">
        <p className="mb-2 text-sm text-gray-500">
          Home / My Profile
        </p>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          My Profile
        </h1>
        <p className="mt-2 text-gray-600">
          Manage your personal information and account.
        </p>
      </div>

      {/* Main Profile Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

        {/* Profile Card */}
        <div className="rounded-xl border border-purple-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-purple-100 text-4xl font-bold text-purple-800">
            S
          </div>

          <h2 className="text-2xl font-semibold text-gray-900">
            Student Name
          </h2>

          <p className="mt-2 text-gray-500">
            student@college.edu
          </p>

          <div className="mt-5 inline-block rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-800">
            Student Account
          </div>

          <button className="mt-6 w-full rounded-lg bg-purple-800 px-5 py-3 font-medium text-white hover:bg-purple-900">
            Edit Profile
          </button>
        </div>

        {/* Personal Information */}
        <div className="rounded-xl border border-purple-100 bg-white p-8 shadow-sm lg:col-span-2">
          <h2 className="mb-6 border-b border-gray-200 pb-4 text-2xl font-semibold text-gray-900">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-5">
              <p className="mb-2 text-sm text-gray-500">
                Full Name
              </p>
              <p className="text-lg font-medium text-gray-800">
                Student Name
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-5">
              <p className="mb-2 text-sm text-gray-500">
                Email Address
              </p>
              <p className="break-all text-lg font-medium text-gray-800">
                student@college.edu
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-5">
              <p className="mb-2 text-sm text-gray-500">
                College
              </p>
              <p className="text-lg font-medium text-gray-800">
                Your College
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-5">
              <p className="mb-2 text-sm text-gray-500">
                Branch
              </p>
              <p className="text-lg font-medium text-gray-800">
                Computer Science and Engineering
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-5">
              <p className="mb-2 text-sm text-gray-500">
                Course
              </p>
              <p className="text-lg font-medium text-gray-800">
                B.Tech
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Account Section */}
      <div className="mt-8 rounded-xl border border-purple-100 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Account Settings
        </h2>

        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-gray-100 pb-5">
          <div>
            <h3 className="font-semibold text-gray-800">
              My Listings
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              View and manage the items you are selling.
            </p>
          </div>

          <button className="rounded-lg border border-purple-800 px-5 py-2 text-purple-800 hover:bg-purple-50">
            View Listings
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 pt-5">
          <div>
            <h3 className="font-semibold text-gray-800">
              Logout
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Sign out of your account.
            </p>
          </div>

          <button className="rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>

    </div>
  )
}

export default Profile