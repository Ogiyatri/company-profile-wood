// app/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Abus Wood
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-brown-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-brown-600">
            About Us
          </Link>

          {/* Dropdown Menu */}
          <Menu as="div" className="relative">
            <Menu.Button className="text-gray-700 hover:text-brown-600">
              Our Products
            </Menu.Button>
            <Menu.Items className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/products/kayu-meranti"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Kayu Meranti
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/products/kayu-kamper"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Kayu Kamper
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/products/kayu-mahoni"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Kayu Mahoni
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          <Link href="/contact" className="text-gray-700 hover:text-brown-600">
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
          <div className="flex flex-col space-y-4 p-4">
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
                <Link
                  href="/products/kayu-meranti"
                  className="block text-gray-600"
                >
                  Kayu Meranti
                </Link>
                <Link
                  href="/products/kayu-kamper"
                  className="block text-gray-600"
                >
                  Kayu Kamper
                </Link>
                <Link
                  href="/products/kayu-mahoni"
                  className="block text-gray-600"
                >
                  Kayu Mahoni
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
