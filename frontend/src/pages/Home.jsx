import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import heroMenImage from "../assets/public/images/men-category (2).jpg"
import menCategoryImage from "../assets/public/images/men-category (2).jpg"
import womenCategoryImage from "../assets/public/images/women-category.jpg"
import kidsCategoryImage from "../assets/public/images/kids-category.jpg"
import productOneImage from "../assets/public/images/product-1.jpg"
import productTwoImage from "../assets/public/images/product-2.jpg"
import productThreeImage from "../assets/public/images/product-3.jpg"
import productFourImage from "../assets/public/images/product-4.jpg"
import productFiveImage from "../assets/public/images/product-5.jpg"

function Home() {
  const heroSlides = [
    {
      image: heroMenImage,
      alt: "Men's fashion collection",
      heading: "Fresh Fits for",
      highlight: "Him",
      description: "Clean cuts, premium fabrics, effortless style.",
      action: "Shop Men",
    },
    {
      image: womenCategoryImage,
      alt: "Women's fashion collection",
      heading: "Find Your",
      highlight: "Style",
      description: "Discover thoughtfully selected looks for every occasion.",
      action: "Shop Women",
    },
    {
      image: kidsCategoryImage,
      alt: "Kids' fashion collection",
      heading: "Little Looks,",
      highlight: "Big Style",
      description: "Comfortable, playful pieces for your little ones.",
      action: "Shop Kids",
    },
  ]
  const [activeSlide, setActiveSlide] = useState(0)

  const products = [
    { name: "Classic Denim Set", image: productOneImage, price: "85,000 RWF" },
    { name: "Teal Casual Co-ord", image: productTwoImage, price: "65,000 RWF" },
    { name: "Everyday Cargo Set", image: productThreeImage, price: "35,000 RWF" },
    { name: "Modern Brown Outfit", image: productFourImage, price: "55,000 RWF" },
    { name: "Women's Weekend Set", image: productFiveImage, price: "48,000 RWF" },
  ]
  const showSlide = (index) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length)
  }

  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative h-[650px] overflow-hidden">

        {/* Background Image */}

        <img
          key={heroSlides[activeSlide].image}
          src={heroSlides[activeSlide].image}
          alt={heroSlides[activeSlide].alt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}

        <div className="absolute inset-0 bg-black/40"></div>


        {/* Hero Content */}

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">

          <div className="max-w-2xl text-white">

            <div className="flex items-center gap-3 mb-5">

              <span className="w-10 h-[2px] bg-yellow-400"></span>

              <p className="text-sm font-semibold tracking-[0.3em] uppercase">
                {activeSlide === 0 ? "Just Dropped" : "Explore the Collection"}
              </p>

            </div>


            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              {heroSlides[activeSlide].heading}{" "}
              <span className="text-yellow-400">{heroSlides[activeSlide].highlight}</span>
            </h1>


            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg">
              {heroSlides[activeSlide].description}
            </p>


            <button className="mt-8 inline-flex items-center gap-3 bg-yellow-400 text-black px-7 py-4 rounded-md font-semibold hover:bg-yellow-300 transition">
              {heroSlides[activeSlide].action}
              <ArrowRight size={20} />
            </button>

          </div>

        </div>


        {/* Previous button */}

        <button
          type="button"
          onClick={() => showSlide(activeSlide - 1)}
          aria-label="Previous slide"
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-white/90 text-black
          flex items-center justify-center
          hover:bg-white transition"
        >
          <ChevronLeft size={24} />
        </button>


        {/* Next button */}

        <button
          type="button"
          onClick={() => showSlide(activeSlide + 1)}
          aria-label="Next slide"
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-white/90 text-black
          flex items-center justify-center
          hover:bg-white transition"
        >
          <ChevronRight size={24} />
        </button>


        {/* Slider dots */}

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-3">

          {heroSlides.map((slide, index) => (
            <button
              key={slide.alt}
              type="button"
              onClick={() => showSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              className={`h-3 w-3 rounded-full transition ${
                activeSlide === index ? "bg-yellow-400" : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Explore
            </p>

            <h2 className="mt-3 text-4xl font-serif font-bold text-gray-900">
              Shop By Category
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


            {/* Men */}

            <div className="group relative h-[420px] overflow-hidden rounded-lg">

              <img
                src={menCategoryImage}
                alt="Men's fashion"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              <div className="absolute bottom-8 left-8 text-white">

                <p className="text-sm uppercase tracking-widest">
                  Collection
                </p>

                <h3 className="text-3xl font-serif font-bold mt-2">
                  Men
                </h3>

                <button className="mt-4 flex items-center gap-2 font-semibold">
                  Shop Now
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>


            {/* Women */}

            <div className="group relative h-[420px] overflow-hidden rounded-lg">

              <img
                src={womenCategoryImage}
                alt="Women's fashion"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              <div className="absolute bottom-8 left-8 text-white">

                <p className="text-sm uppercase tracking-widest">
                  Collection
                </p>

                <h3 className="text-3xl font-serif font-bold mt-2">
                  Women
                </h3>

                <button className="mt-4 flex items-center gap-2 font-semibold">
                  Shop Now
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>


            {/* Kids */}

            <div className="group relative h-[420px] overflow-hidden rounded-lg">

              <img
                src={kidsCategoryImage}
                alt="Kids fashion"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              <div className="absolute bottom-8 left-8 text-white">

                <p className="text-sm uppercase tracking-widest">
                  Collection
                </p>

                <h3 className="text-3xl font-serif font-bold mt-2">
                  Kids
                </h3>

                <button className="mt-4 flex items-center gap-2 font-semibold">
                  Shop Now
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>


          </div>

        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="border-t-4 border-[#43313f] bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-medium uppercase tracking-wide text-slate-700 sm:text-3xl">
              Latest <span className="font-semibold text-slate-900">Collection</span>
              <span aria-hidden="true" className="ml-3 inline-block w-10 align-middle border-t-2 border-slate-700" />
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Discover new-season styles made for every moment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100 sm:h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
                    {product.price}
                  </span>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 opacity-0 shadow transition group-hover:opacity-100">
                    Quick View
                  </span>
                </div>

                <div className="min-h-36 p-4">
                  <h3 className="min-h-12 text-sm font-semibold leading-6 text-slate-900">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-xs" aria-label="Rated 4 out of 5">
                      <span className="tracking-[0.12em] text-amber-400" aria-hidden="true">★★★★</span>
                      <span className="text-slate-300" aria-hidden="true">★</span>
                      <span className="ml-1 text-slate-500">(4.2)</span>
                    </div>
                    <span className="whitespace-nowrap text-sm font-bold text-slate-950">
                      {product.price}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* ================= WHY NGENZI ================= */}

      <section className="py-20 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
            Why NGenziFashioN
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif">
            Style Meets You
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
            Discover carefully selected fashion pieces designed to
            bring confidence, comfort and style into your everyday life.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

            <div>
              <h3 className="text-xl font-semibold">
                Quality First
              </h3>

              <p className="mt-3 text-gray-400">
                Carefully selected fabrics and products.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-semibold">
                Modern Style
              </h3>

              <p className="mt-3 text-gray-400">
                Fashion designed for today's lifestyle.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-semibold">
                Easy Shopping
              </h3>

              <p className="mt-3 text-gray-400">
                Simple and convenient online shopping.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home