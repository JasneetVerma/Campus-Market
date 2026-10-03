import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div>
      <div>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            width="200"
          />
        ) : (
          <div
            style={{
              width: '200px',
              height: '120px',
              backgroundColor: '#eeeeee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            No Image
          </div>
        )}
      </div>

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <p>{product.category}</p>

      <p>{product.condition || 'Condition not specified'}</p>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  )
}

export default ProductCard