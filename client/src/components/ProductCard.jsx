import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const image =
    product.images?.length > 0
      ? product.images[0]
      : product.image;

  return (
    <Link
      to={`/products/${product._id}`}
      className="block border border-black p-3"
    >
      {/* Product Image */}
      <div className="h-40 border border-gray-300 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>No Image</span>
        )}
      </div>

      {/* Product Information */}
      <div className="mt-3">

        <h3 className="font-medium">
          {product.title}
        </h3>

        <p>
          ₹{product.price}
        </p>

        <p>
          {product.category}
        </p>

        <p>
          {product.condition}
        </p>

        <p>
          {product.seller?.name || product.seller}
        </p>

      </div>
    </Link>
  );
}

export default ProductCard;