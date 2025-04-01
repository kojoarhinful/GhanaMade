import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <header className="border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-medium">
            GhanaMade
          </Link>
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
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-serif mb-6">404</h1>
          <h2 className="text-2xl font-serif mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition-colors font-medium inline-block"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-600">© GhanaMade 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

