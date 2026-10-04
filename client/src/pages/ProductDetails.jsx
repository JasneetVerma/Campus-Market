import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:5000/api/listings/${id}`
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setProduct(data);
        setCurrentImage(0);
      } catch {
        setProduct(null);
        setError("Cannot connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="p-6">
        <p>Loading product...</p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="p-6">
        <p>{error}</p>

        <Link
          to="/browse"
          className="inline-block mt-4 border border-black px-4 py-2"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="p-6">
        <p>Product not found.</p>

        <Link
          to="/browse"
          className="inline-block mt-4 border border-black px-4 py-2"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  /*
    Support both:

    image: "single-image-url"

    and

    images: ["image1", "image2", "image3"]
  */
  const images =
    product.images?.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [];

  // Next image
  const nextImage = () => {
    if (images.length === 0) return;

    setCurrentImage(
      (currentImage + 1) % images.length
    );
  };

  // Previous image
  const previousImage = () => {
    if (images.length === 0) return;

    setCurrentImage(
      (currentImage - 1 + images.length) %
        images.length
    );
  };

  // Scroll through images
  const handleImageWheel = (e) => {
    if (images.length <= 1) return;

    e.preventDefault();

    if (e.deltaY > 0) {
      nextImage();
    } else {
      previousImage();
    }
  };

  return (
    <div className="px-6 py-5">

      {/* Breadcrumb / Back */}
      <div className="text-sm mb-5">
        <Link to="/browse">
          Home
        </Link>

        <span className="mx-2">
          /
        </span>

        <Link to="/browse">
          Browse Listings
        </Link>

        <span className="mx-2">
          /
        </span>

        <span>
          {product.title}
        </span>
      </div>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* =========================
            IMAGE SECTION
        ========================== */}
        <div className="lg:col-span-4">

          {/* Main Image */}
          <div
            className="relative h-96 border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={nextImage}
            onWheel={handleImageWheel}
          >

            {images.length > 0 ? (
              <img
                src={images[currentImage]}
                alt={`${product.title} ${currentImage + 1}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <span>
                No Image
              </span>
            )}

            {/* Previous */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 border border-black bg-white px-3 py-2"
              >
                ←
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 border border-black bg-white px-3 py-2"
              >
                →
              </button>
            )}

          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <p className="text-center text-sm mt-2">
              {currentImage + 1} / {images.length}
            </p>
          )}

          {/* Thumbnails */}
          {images.length > 0 && (
            <div className="flex gap-2 mt-3 overflow-x-auto">

              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setCurrentImage(index)
                  }
                  className={`shrink-0 w-20 h-20 border ${
                    currentImage === index
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}

            </div>
          )}

        </div>

        {/* =========================
            PRODUCT INFORMATION
        ========================== */}
        <div className="lg:col-span-5">

          {/* Condition */}
          <span className="text-xs border border-black px-2 py-1">
            {product.condition}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold mt-4">
            {product.title}
          </h1>

          {/* Price */}
          <p className="text-2xl font-bold mt-3">
            ₹{product.price}
          </p>

          {/* Basic Information */}
          <div className="flex flex-wrap gap-4 text-sm mt-6">

            <span>
              ● {product.condition}
            </span>

            <span>
              Category: {product.category}
            </span>

            <span>
              {product.negotiable
                ? "Negotiable"
                : "Fixed Price"}
            </span>

          </div>

          {/* Description */}
          <div className="mt-6">

            <h2 className="font-bold">
              Description
            </h2>

            <p className="mt-2 text-sm">
              {product.description ||
                "No description available."}
            </p>

          </div>

        </div>

        {/* =========================
            SELLER SECTION
        ========================== */}
        <div className="lg:col-span-3">

          {/* Seller Card */}
          <div className="border border-gray-200 p-5">

            <h2 className="font-bold">
              Seller Information
            </h2>

            <div className="flex items-center gap-3 mt-5">

              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                {(
                  product.seller?.name ||
                  "S"
                )[0].toUpperCase()}
              </div>

              <div>
                <p className="font-medium">
                  {product.seller?.name ||
                    product.seller ||
                    "Seller"}
                </p>

                <p className="text-sm">
                  Campus Student
                </p>
              </div>

            </div>

            <button
              type="button"
              className="w-full border border-black py-3 mt-5"
            >
              Contact Seller
            </button>

          </div>

          {/* Safety Card */}
          <div className="border border-gray-200 p-5 mt-6">

            <h2 className="font-bold">
              Stay Safe
            </h2>

            <ul className="mt-3 text-sm space-y-2">
              <li>
                ✓ Meet in a public place
              </li>

              <li>
                ✓ Verify the item before buying
              </li>

              <li>
                ✓ Pay only after checking
              </li>
            </ul>

            <p className="text-xs mt-4">
              Learn more about safe buying
            </p>

          </div>

        </div>

      </div>

      {/* =========================
          BOTTOM FEATURES
      ========================== */}
      <div className="border-t border-gray-200 mt-12 pt-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">

          <div>
            <p className="font-bold">
              ✓
            </p>

            <h3 className="font-medium mt-2">
              Safe & Secure
            </h3>

            <p className="text-xs mt-1">
              Verified students only
            </p>
          </div>

          <div>
            <p className="font-bold">
              ✓
            </p>

            <h3 className="font-medium mt-2">
              Campus Only
            </h3>

            <p className="text-xs mt-1">
              Buy & sell within college
            </p>
          </div>

          <div>
            <p className="font-bold">
              ✓
            </p>

            <h3 className="font-medium mt-2">
              Student to Student
            </h3>

            <p className="text-xs mt-1">
              Direct. Simple. Reliable.
            </p>
          </div>

          <div>
            <p className="font-bold">
              ✓
            </p>

            <h3 className="font-medium mt-2">
              Great Deals
            </h3>

            <p className="text-xs mt-1">
              Save money on useful things
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;