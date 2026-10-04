import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";

function Browse() {
  const [listings, setListings] = useState([]);

  // Search
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Filters
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [negotiable, setNegotiable] = useState(false);

  // Sorting
  const [sortBy, setSortBy] = useState("");

  // Request states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Categories for sidebar
  const categories = [
    "Books",
    "Stationery",
    "Electronics",
    "Clothing",
    "Furniture",
    "Sports",
    "Accessories",
    "Hostel Essentials",
    "Academic Supplies",
    "Others",
  ];

  // Fetch listings from backend
  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        setError("");

        let url = "http://localhost:5000/api/listings";

        // Search is handled by backend
        if (searchQuery) {
          url += `?search=${encodeURIComponent(searchQuery)}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setListings(data);
      } catch {
        setListings([]);
        setError("Cannot connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [searchQuery]);

  // Apply category, condition, negotiable filters
  // and sorting on the frontend
  const filteredListings = useMemo(() => {
    let result = listings.filter((listing) => {
      const matchesCategory =
        !category || listing.category === category;

      const matchesCondition =
        !condition || listing.condition === condition;

      const matchesNegotiable =
        !negotiable || listing.negotiable === true;

      return (
        matchesCategory &&
        matchesCondition &&
        matchesNegotiable
      );
    });

    // Sorting
    if (sortBy === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );
    }

    if (sortBy === "oldest") {
      result.sort(
        (a, b) =>
          new Date(a.createdAt) -
          new Date(b.createdAt)
      );
    }

    if (sortBy === "price-low") {
      result.sort(
        (a, b) =>
          Number(a.price) - Number(b.price)
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) =>
          Number(b.price) - Number(a.price)
      );
    }

    return result;
  }, [
    listings,
    category,
    condition,
    negotiable,
    sortBy,
  ]);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();

    setSearchQuery(search.trim());
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearch("");
    setSearchQuery("");
    setCategory("");
    setCondition("");
    setNegotiable(false);
    setSortBy("");
  };

  return (
    <div className="p-6">

      {/* Page Heading */}
      <h1 className="text-2xl font-bold">
        Browse Listings
      </h1>

      {/* Search */}
      <form
        onSubmit={handleSearch}
        className="mt-6"
      >
        <input
          type="text"
          placeholder="Search by product name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-black px-3 py-2"
        />

        <button
          type="submit"
          className="border border-black px-3 py-2 ml-2"
        >
          Search
        </button>
      </form>

      {/* Main Browse Layout */}
      <div className="flex gap-8 mt-8">

        {/* =========================
            CATEGORY SIDEBAR
        ========================== */}
        <aside className="w-48 shrink-0">

          <h2 className="font-bold">
            Categories
          </h2>

          <div className="mt-4">

            {/* All Categories */}
            <label className="flex items-center gap-2 mb-3 cursor-pointer">

              <input
                type="checkbox"
                checked={category === ""}
                onChange={() => setCategory("")}
              />

              <span>
                All
              </span>

            </label>

            {/* Individual Categories */}
            {categories.map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 mb-3 cursor-pointer"
              >

                <input
                  type="checkbox"
                  checked={category === item}
                  onChange={() => setCategory(item)}
                />

                <span>
                  {item}
                </span>

              </label>
            ))}

          </div>

        </aside>

        {/* =========================
            PRODUCTS SECTION
        ========================== */}
        <main className="flex-1">

          {/* Sorting + Filters */}
          <div className="flex flex-wrap gap-3 mb-6">

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-black px-3 py-2"
            >
              <option value="">
                Sort By
              </option>

              <option value="newest">
                Newest
              </option>

              <option value="oldest">
                Oldest
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>
            </select>

            {/* Negotiable */}
            <label className="flex items-center border border-black px-3 py-2 cursor-pointer">

              <input
                type="checkbox"
                checked={negotiable}
                onChange={(e) =>
                  setNegotiable(e.target.checked)
                }
              />

              <span className="ml-2">
                Negotiable
              </span>

            </label>

            {/* Condition */}
            <select
              value={condition}
              onChange={(e) =>
                setCondition(e.target.value)
              }
              className="border border-black px-3 py-2"
            >
              <option value="">
                All Conditions
              </option>

              <option value="New">
                New
              </option>

              <option value="Used - Few">
                Used - Few
              </option>

              <option value="Used - Heavily">
                Used - Heavily
              </option>
            </select>

            {/* Clear Filters */}
            {(category ||
              condition ||
              negotiable ||
              sortBy ||
              search ||
              searchQuery) && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="border border-black px-3 py-2"
              >
                Clear
              </button>
            )}

          </div>

          {/* =========================
              LOADING STATE
          ========================== */}
          {loading && (
            <p>
              Loading listings...
            </p>
          )}

          {/* =========================
              ERROR STATE
          ========================== */}
          {!loading && error && (
            <p>
              {error}
            </p>
          )}

          {/* =========================
              EMPTY STATE
          ========================== */}
          {!loading &&
            !error &&
            filteredListings.length === 0 && (
              <p>
                No listings found.
              </p>
            )}

          {/* =========================
              PRODUCT GRID
          ========================== */}
          {!loading &&
            !error &&
            filteredListings.length > 0 && (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {filteredListings.map((listing) => (
                  <ProductCard
                    key={listing._id}
                    product={listing}
                  />
                ))}

              </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default Browse;