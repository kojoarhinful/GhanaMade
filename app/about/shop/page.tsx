import { Filter, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-medium">
            GhanaMade
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/shop" className="text-black transition-colors">
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
      <section className="py-16 md:py-24 border-b border-gray-200 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Shop Authentic Ghana</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover handcrafted treasures from Ghana's most talented artisans
            </p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar">
            <a href="#" className="bg-green-700 text-white px-6 py-2 rounded-full whitespace-nowrap">
              All Products
            </a>
            <a
              href="#"
              className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full whitespace-nowrap hover:bg-gray-50 transition-colors"
            >
              Kente & Textiles
            </a>
            <a
              href="#"
              className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full whitespace-nowrap hover:bg-gray-50 transition-colors"
            >
              Handcrafted Art
            </a>
            <a
              href="#"
              className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full whitespace-nowrap hover:bg-gray-50 transition-colors"
            >
              Food & Spices
            </a>
            <a
              href="#"
              className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full whitespace-nowrap hover:bg-gray-50 transition-colors"
            >
              Jewelry & Accessories
            </a>
            <a
              href="#"
              className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full whitespace-nowrap hover:bg-gray-50 transition-colors"
            >
              Home Decor
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif">All Products</h2>
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <Filter className="h-4 w-4" /> Filter
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Product 1 */}
            <div className="group">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Handwoven Kente Cloth"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <h3 className="font-medium mb-1">Handwoven Kente Cloth</h3>
              <p className="text-gray-500 text-sm mb-2">Traditional Ashanti Design</p>
              <p className="font-medium">₵450.00</p>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Handcrafted Wooden Mask"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <h3 className="font-medium mb-1">Handcrafted Wooden Mask</h3>
              <p className="text-gray-500 text-sm mb-2">Traditional Wall Art</p>
              <p className="font-medium">₵280.00</p>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Shea Butter Set"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <h3 className="font-medium mb-1">Organic Shea Butter Set</h3>
              <p className="text-gray-500 text-sm mb-2">Natural Skincare</p>
              <p className="font-medium">₵120.00</p>
            </div>

            {/* Product 4 */}
            <div className="group">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Beaded Jewelry Set"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <h3 className="font-medium mb-1">Beaded Jewelry Set</h3>
              <p className="text-gray-500 text-sm mb-2">Handmade Necklace & Earrings</p>
              <p className="font-medium">₵180.00</p>
            </div>

            {/* Product 5 */}
            <div className="group">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Woven Basket"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <h3 className="font-medium mb-1">Bolga Basket</h3>
              <p className="text-gray-500 text-sm mb-2">Handwoven Storage</p>
              <p className="font-medium">₵220.00</p>
            </div>

            {/* Product 6 */}
            <div className="group">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Adinkra Fabric"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <h3 className="font-medium mb-1">Adinkra Print Fabric</h3>
              <p className="text-gray-500 text-sm mb-2">Traditional Symbols</p>
              <p className="font-medium">₵320.00</p>
            </div>

            {/* Product 7 */}
            <div className="group">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Spice Set"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <h3 className="font-medium mb-1">Ghanaian Spice Collection</h3>
              <p className="text-gray-500 text-sm mb-2">Authentic Flavors</p>
              <p className="font-medium">₵150.00</p>
            </div>

            {/* Product 8 */}
            <div className="group">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Leather Sandals"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <h3 className="font-medium mb-1">Handmade Leather Sandals</h3>
              <p className="text-gray-500 text-sm mb-2">Traditional Craftsmanship</p>
              <p className="font-medium">₵200.00</p>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-green-700 text-white">
                1
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                2
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                3
              </a>
              <span className="w-10 h-10 flex items-center justify-center text-gray-600">...</span>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                8
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-serif mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new product announcements, and stories from our artisans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
            />
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
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

