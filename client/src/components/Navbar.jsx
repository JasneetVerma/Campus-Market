import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <h2>Campus Marketplace</h2>
        </Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/browse">Browse</Link>
        {' | '}
        <Link to="/sell">Sell Something</Link>
        {' | '}
        <Link to="/my-listings">My Listings</Link>
        {' | '}
        <Link to="/profile">Profile</Link>
        {' | '}
        <Link to="/login">Login</Link>
        {' | '}
        <Link to="/register">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar