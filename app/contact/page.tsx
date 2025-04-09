import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 items-center">
            <div className="flex justify-start">
              <Link href="/" className="text-2xl font-serif font-medium">
                GhanaMade
              </Link>
            </div>
            <nav className="hidden md:flex justify-center space-x-8">
              <Link href="/shop" className="text-gray-600 hover:text-black transition-colors">
                Shop
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-black transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex justify-end">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Reach out with any questions, feedback, or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      15 Independence Avenue
                      <br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:hello@ghanamade.com" className="hover:text-green-700 transition-colors">
                        hello@ghanamade.com
                      </a>
                      <br />
                      <a href="mailto:support@ghanamade.com" className="hover:text-green-700 transition-colors">
                        support@ghanamade.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+233302123456" className="hover:text-green-700 transition-colors">
                        +233 30 212 3456
                      </a>
                      <br />
                      <span className="text-sm">Monday-Friday, 9am-5pm GMT</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
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
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif mb-8">Send Us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-b border-gray-200 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-serif mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">How long does shipping take?</h3>
              <p className="text-gray-600">
                Shipping within Ghana typically takes 1-3 business days. International shipping varies by location, but
                generally takes 7-14 business days.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by location.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy on most items. If you're not satisfied with your purchase, you can
                return it for a full refund or exchange.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">How can I track my order?</h3>
              <p className="text-gray-600">
                Once your order ships, you'll receive a tracking number via email that you can use to monitor your
                package's journey.
              </p>
            </div>
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
