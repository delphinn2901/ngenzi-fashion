function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            NGenziFashioN
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-black">
            Home
          </a>

          <a href="#" className="text-gray-700 hover:text-black">
            Shop
          </a>

          <a href="#" className="text-gray-700 hover:text-black">
            Categories
          </a>

          <a href="#" className="text-gray-700 hover:text-black">
            About
          </a>
        </div>

        {/* Cart */}
        <div>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Cart 🛒
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar