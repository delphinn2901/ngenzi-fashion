import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-white border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-gray-900"
        >
          NGenziFashioN
        </Link>


        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-700 hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-gray-700 hover:text-black"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-black"
          >
            About
          </Link>

          <Link
            to="/login"
            className="text-gray-700 hover:text-black"
          >
            Login
          </Link>

        </div>


        {/* Cart */}

        <Link
          to="/cart"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Cart 🛒
        </Link>

      </div>

    </nav>
  )
}

export default Navbar