import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-900">
            Welcome to NGenziFashioN
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Quality fashion for everyone.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800">
            Shop Now
          </button>

        </div>

      </main>

    </div>
  )
}

export default App