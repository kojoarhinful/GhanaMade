import { ArrowRight, ShoppingBag, Truck, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-medium">GhanaMade</h1>
          <nav className="hidden md:flex space-x-8">
            <Link href="/shop" className="text-gray-600 hover:text-black transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 max-w-3xl mx-auto leading-tight">
            Authentic Ghanaian Products Delivered to Your Doorstep
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover handcrafted treasures, traditional fabrics, and delicious foods from Ghana, all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/shop"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md transition-colors font-medium"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border border-gray-300 hover:border-gray-400 px-8 py-3 rounded-md transition-colors font-medium flex items-center justify-center gap-2"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-2xl font-serif mb-10 text-center">Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="aspect-square bg-amber-50 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/products/kente.jpg"
                  alt="Kente Cloth"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-medium text-center">Kente & Textiles</h4>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square bg-amber-50 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/products/art.jpg" 
                  alt="Handcrafted Art"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-medium text-center">Handcrafted Art</h4>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square bg-amber-50 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/products/food.jpg"  // Updated path
                  alt="Ghanaian Food"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-medium text-center">Food & Spices</h4>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square bg-amber-50 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/products/jewelry.jpg" 
                  alt="Jewelry"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-medium text-center">Jewelry & Accessories</h4>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-2xl font-serif mb-12 text-center">How GhanaMade Works</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start gap-4">
                <span className="text-xl font-medium text-green-700">01</span>
                <div>
                  <h4 className="text-lg font-medium mb-3">BROWSE AUTHENTIC PRODUCTS</h4>
                  <p className="text-gray-600">
                    Explore our curated collection of genuine Ghanaian products, each with detailed descriptions and
                    high-quality images.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start gap-4">
                <span className="text-xl font-medium text-green-700">02</span>
                <div>
                  <h4 className="text-lg font-medium mb-3">PLACE YOUR ORDER</h4>
                  <p className="text-gray-600">
                    Select your favorite items, add them to your cart, and checkout with our secure payment
                    system simple and hassle free.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start gap-4">
                <span className="text-xl font-medium text-green-700">03</span>
                <div>
                  <h4 className="text-lg font-medium mb-3">RECEIVE AT YOUR DOORSTEP</h4>
                  <p className="text-gray-600">
                    We handle all shipping logistics and customs clearance. Your authentic Ghanaian treasures arrive
                    safely at your door.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 border-b border-gray-200 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-2xl font-serif mb-12 text-center">What Our Customers Say</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "I've been looking for authentic Ghanaian kente cloth for years. GhanaMade delivered exactly what I
                wanted, with amazing quality and fast shipping."
              </p>
              <p className="font-medium">Kwesi, Tema.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "The shea butter products are incredible! Pure and authentic, just like what my grandmother used to
                make. I'm a customer for life."
              </p>
              <p className="font-medium">Adjoa, Kumasi.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "Finally, I can get my favorite Ghanaian spices without asking friends to bring them when they visit.
                The selection is amazing!"
              </p>
              <p className="font-medium">Kweku, Accra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-serif mb-4">Shop with Confidence</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience the best of Ghana with our customer-first guarantees
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-700" />
              </div>
              <h4 className="text-lg font-medium mb-2">Authenticity Guaranteed</h4>
              <p className="text-gray-600">
                Every product is sourced directly from Ghanaian artisans and verified for authenticity.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-green-700" />
              </div>
              <h4 className="text-lg font-medium mb-2">Free Nationwide Delivery</h4>
              <p className="text-gray-600">
                Enjoy free shipping on all orders within Ghana, with affordable international rates.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-700"
                >
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="m16.24 16.24 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="m16.24 7.76 2.83-2.83"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">30-Day Returns</h4>
              <p className="text-gray-600">
                Not satisfied? Return any item within 30 days for a full refund, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-serif mb-6 max-w-3xl mx-auto">Experience the Best of Ghana Today</h3>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the beauty and quality of authentic Ghanaian
            products.
          </p>
          <Link
            href="/shop"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-md transition-colors font-medium text-lg"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-serif text-lg mb-4">GhanaMade</h4>
              <p className="text-gray-600 mb-4">
                Bringing the best of Ghana to your doorstep with authentic, high-quality products.
              </p>
            </div>

            <div>
              <h5 className="font-medium mb-4">Shop</h5>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Kente & Textiles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Handcrafted Art
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Food & Spices
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Jewelry & Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium mb-4">Company</h5>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-black transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Our Artisans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium mb-4">Support</h5>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/contact" className="hover:text-black transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Returns & Refunds
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© GhanaMade 2025. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
