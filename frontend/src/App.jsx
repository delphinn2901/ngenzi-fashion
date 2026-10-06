import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gray-50">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App