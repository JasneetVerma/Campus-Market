
import { useState } from 'react'

function MyListings() {
  const [activeFilter, setActiveFilter] = useState('All')

  const listings = [
    { id: 1, name: 'MacBook Air M1', price: 45000, status: 'Active' },
    { id: 2, name: 'Boat Rockerz 450', price: 1000, status: 'Sold' },
    { id: 3, name: 'Study Table', price: 400, status: 'Active' },
    { id: 4, name: 'Casio Calculator', price: 600, status: 'Sold' },
    { id: 5, name: 'Engineering Mathematics Book', price: 250, status: 'Draft' },
  ]

  const filteredListings =
    activeFilter === 'All'
      ? listings
      : listings.filter((item) => item.status === activeFilter)

  return (
    <div className="min-h-screen w-full bg-gray-50 px-6 py-8 md:px-10">

      {/* Heading */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-sm text-gray-500">
            Home &gt; My Listings
          </p>
          <h1 className="text-3xl font-bold text-gray-800">
            My Listings
          </h1>
          <p className="mt-1 text-gray-500">
            Manage the items you've listed for sale.
          </p>
        </div>

        <button className="rounded-md bg-purple-800 px-5 py-3 text-white hover:bg-purple-900">
          + Sell Something
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <h2 className="mb-3 font-semibold text-gray-700">
          Your Listings
        </h2>

        <div className="flex flex-wrap gap-3">
          {['All', 'Active', 'Sold', 'Draft'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 text-sm ${
                activeFilter === filter
                  ? 'border-purple-800 bg-purple-800 text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter} (
              {filter === 'All'
                ? listings.length
                : listings.filter((item) => item.status === filter).length}
              )
            </button>
          ))}
        </div>
      </div>

      {/* Listing Cards */}
      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredListings.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white p-3"
            >
              {/* Image placeholder */}
              <div className="relative mb-3 flex h-40 items-center justify-center rounded-md bg-gray-200">
                <span
                  className={`absolute right-2 top-2 rounded-full px-3 py-1 text-xs font-medium ${
                    item.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : item.status === 'Sold'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {item.status}
                </span>
                <span className="text-sm text-gray-400">
                  Product Image
                </span>
              </div>

              {/* Product details */}
              <h3 className="font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="mt-1 font-bold text-purple-800">
                ₹{item.price.toLocaleString('en-IN')}
              </p>

              {/* Buttons */}
              {item.status === 'Active' && (
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-md border border-purple-800 py-2 text-sm text-purple-800 hover:bg-purple-50">
                    Edit
                  </button>
                  <button className="flex-1 rounded-md bg-purple-800 py-2 text-sm text-white hover:bg-purple-900">
                    Mark as Sold
                  </button>
                </div>
              )}

              {item.status === 'Draft' && (
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-md border border-purple-800 py-2 text-sm text-purple-800 hover:bg-purple-50">
                    Edit
                  </button>
                  <button className="flex-1 rounded-md bg-purple-800 py-2 text-sm text-white hover:bg-purple-900">
                    Publish
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-64 flex-col items-center justify-center rounded-lg bg-purple-50 p-8 text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            You haven't listed anything yet.
          </h3>
          <p className="mb-5 text-sm text-gray-500">
            Start selling your pre-loved items and make some extra money!
          </p>
          <button className="rounded-md bg-purple-800 px-5 py-2 text-white hover:bg-purple-900">
            + Sell Something
          </button>
        </div>
      )}
    </div>
  )
}

export default MyListings