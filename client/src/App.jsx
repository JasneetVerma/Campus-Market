import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Browse from './pages/Browse'
import ProductDetails from './pages/ProductDetails'
import Sell from './pages/Sell'
import PreviewListing from './pages/PreviewListing'
import MyListings from './pages/MyListings'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/preview" element={<PreviewListing />} />
          <Route path="/my-listings" element={<MyListings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App