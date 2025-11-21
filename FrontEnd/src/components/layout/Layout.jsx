import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-wide flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-dark font-bold text-xl shadow">
              OB
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold">Ocean Breeze</h1>
              <p className="text-xs md:text-sm text-gray-500">Resort & Retreat</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm md:text-base text-gray-600 font-medium">
            <a
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="hover:text-primary transition-colors"
            >
              Gallery
            </a>
            <a
              href="#booking"
              className="hover:text-primary transition-colors"
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="container-wide py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-sm font-medium text-gray-800">
              © {new Date().getFullYear()} Ocean Breeze Resort
            </div>
            <div className="text-xs text-gray-500">All rights reserved.</div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
