import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-medium">
            GhanaMade
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/shop" className="text-gray-600 hover:text-black transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-black transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
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
              className="lucide lucide-shopping-bag"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 mb-8">Connecting Ghana's finest craftsmanship with the world</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At GhanaMade, we're on a mission to showcase the rich cultural heritage and exceptional craftsmanship of
                Ghana to the world. We believe that Ghanaian artisans create some of the most beautiful, meaningful, and
                high-quality products in the world.
              </p>
              <p className="text-gray-600 mb-4">
                We're committed to creating a platform that makes these treasures accessible to everyone while ensuring
                fair compensation for the talented artisans who create them.
              </p>
              <p className="text-gray-600">
                By connecting Ghanaian creators directly with global consumers, we're building a sustainable ecosystem
                that preserves traditional crafts while embracing modern commerce.
              </p>
            </div>
            </div>
          </div>
      </section>

      {/* Our Values */}
      <section className="py-16 border-b border-gray-200 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif mb-12 text-center">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
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
                  className="text-green-700"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m14.5 9-5 5" />
                  <path d="m9.5 9 5 5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We guarantee that every product on our platform is genuinely made in Ghana, using traditional techniques
                and authentic materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
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
                  className="text-green-700"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Community</h3>
              <p className="text-gray-600">
                We work directly with artisan communities across Ghana, building lasting relationships and supporting
                local economies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
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
                  className="text-green-700"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices, from sourcing materials to packaging and
                shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif mb-12 text-center">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square bg-gray-100 rounded-full w-48 h-48 mx-auto mb-6 overflow-hidden">
                <Image
                  src="/about/kojo-ansah.jpg"
                  alt="Kojo"
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Kojo Ansah</h3>
              <p className="text-gray-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Born and raised in Takoradi, Kojo founded GhanaMade to showcase the incredible craftsmanship of his
                homeland to the world.
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-gray-100 rounded-full w-48 h-48 mx-auto mb-6 overflow-hidden">
                <Image
                  src="/about/ama-darko.jpg"
                  alt="Ama Darko"
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Ama Darko</h3>
              <p className="text-gray-600 mb-4">Head of Artisan Relations</p>
              <p className="text-gray-600 text-sm">
                With deep connections to artisan communities across Ghana, Ama ensures we partner with the most talented
                craftspeople.
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-gray-100 rounded-full w-48 h-48 mx-auto mb-6 overflow-hidden">
                <Image
                  src="/about/kwame-asante-mensah.jpg"
                  alt="Kwame Asante"
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Kwame Asante</h3>
              <p className="text-gray-600 mb-4">Operations Director</p>
              <p className="text-gray-600 text-sm">
                Kwame oversees our logistics and ensures every product reaches our customers in perfect condition, no
                matter where they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ghana Map */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-amber-50 rounded-lg overflow-hidden relative order-2 md:order-1">
              <Image
                src="/about/ghana-map.jpg"
                alt="Map of Ghana showing artisan regions"
                width={600}
                height={600}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif mb-6">Our Artisan Network</h2>
              <p className="text-gray-600 mb-4">
                We work with talented artisans from every region of Ghana, each bringing their unique cultural heritage
                and craftsmanship to our platform.
              </p>
              <p className="text-gray-600 mb-4">
                From the kente weavers of the Ashanti Region to the basket makers of the Upper East, our network spans
                the entire country.
              </p>
              <p className="text-gray-600 mb-6">
                By partnering with artisans directly, we ensure fair compensation and help preserve traditional crafts
                for future generations.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
              >
                Explore our products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of our mission to share Ghana's rich cultural heritage with the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/shop"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md transition-colors font-medium"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 hover:border-gray-400 px-8 py-3 rounded-md transition-colors font-medium"
            >
              Contact Us
            </Link>
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
