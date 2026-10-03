function MyListings() {
  const listings = [
    { id: 1, name: 'Engineering Mathematics Book', price: 250, status: 'Available' },
    { id: 2, name: 'Calculator', price: 500, status: 'Available' },
  ]

  return (
    <div>
      <h1>My Listings</h1>

      <button>Sell Something</button>

      {listings.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Status: {item.status}</p>
          <button>Edit</button>
          <button>Mark as Sold</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default MyListings