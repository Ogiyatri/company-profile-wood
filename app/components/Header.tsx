"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-green-600"
        >
          ABUS WOOD
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600">
            About Us
          </Link>

          {/* Dropdown Menu for Products */}
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-green-600">
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-2 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 hidden mt-2 w-48 bg-white shadow-lg group-hover:block group-focus-within:block">
              <Link
                href="/products/board"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
              >
                Board
              </Link>
              <Link
                href="/products/stick-wood"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
              >
                Stick Wood
              </Link>
              <Link
                href="/products/floring"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
              >
                Flooring
              </Link>
              <Link
                href="/products/decking"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
              >
                Decking
              </Link>
              <Link
                href="/products/custom-inquiries"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
              >
                Custom Inquiries
              </Link>
            </div>
          </div>

          {/* Dropdown Menu for Information */}
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-green-600">
              Information
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-2 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 hidden mt-2 w-48 bg-white shadow-lg group-hover:block group-focus-within:block">
              <Link
                href="/information/activities"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
              >
                Activities
              </Link>
              <Link
                href="/information/article"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
              >
                Article & Blog
              </Link>
            </div>
          </div>

          <Link href="/gallery" className="text-gray-700 hover:text-green-600">
            Gallery
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-green-600">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {/* Icon hamburger */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/" className="text-gray-700">
              Home
            </Link>
            <Link href="/about" className="text-gray-700">
              About Us
            </Link>

            {/* Dropdown for mobile */}
            <div className="space-y-2">
              <p className="font-semibold text-gray-700">Our Products</p>
              <div className="pl-4 space-y-1">
                <Link href="/products/board" className="block text-gray-600">
                  Board
                </Link>
                <Link
                  href="/products/stick-wood"
                  className="block text-gray-600"
                >
                  Stick Wood
                </Link>
                <Link href="/products/floring" className="block text-gray-600">
                  Flooring
                </Link>
                <Link href="/products/decking" className="block text-gray-600">
                  Decking
                </Link>
                <Link
                  href="/products/custom-inquiries"
                  className="block text-gray-600"
                >
                  Custom Inquiries
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-gray-700">Information</p>
              <div className="pl-4 space-y-1">
                <Link
                  href="/information/activities"
                  className="block text-gray-600"
                >
                  Activities
                </Link>
                <Link
                  href="/information/article"
                  className="block text-gray-600"
                >
                  Article & Blog
                </Link>
              </div>
            </div>

            <Link href="/contact" className="text-gray-700">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
