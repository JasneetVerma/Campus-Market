import ProductCard from '../components/ProductCard'

function Browse() {
  const products = [
    {
      id: 1,
      name: 'Engineering Mathematics Book',
      price: 250,
      category: 'Books',
      condition: 'Used - Good',
    },
    {
      id: 2,
      name: 'Scientific Calculator',
      price: 500,
      category: 'Electronics',
      condition: 'Like New',
    },
    {
      id: 3,
      name: 'Study Table Lamp',
      price: 300,
      category: 'Hostel Essentials',
      condition: 'Used - Good',
    },
  ]

  return (
    <div>
      <h1>Browse Products</h1>

      <input type="text" placeholder="Search products..." />

      <h2>Available Products</h2>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Browse