import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <hr />

      <h3>Campus Marketplace</h3>

      <p>Buy and sell items within your campus.</p>

      <div>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/browse">Browse Products</Link>
        {' | '}
        <Link to="/sell">Sell Something</Link>
        {' | '}
        <Link to="/login">Login</Link>
      </div>

      <p>© 2026 Campus Marketplace. All rights reserved.</p>
    </footer>
  )
}

export default Footer