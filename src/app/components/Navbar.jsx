"use client";

import Link from "next/link";

export default function Navbar() {
  const isLoggedIn =
    typeof document !== "undefined" && document.cookie.includes("auth_token");

  function logout() {
    document.cookie = "auth_token=; path=/; max-age=0";
    window.location.href = "/";
  }

  return (
    <nav className="bg-black text-white px-8 py-4 flex items-center justify-between">
      {/* Left - Logo */}
      <Link href="/" className="font-bold text-xl tracking-wide">
        ShopHub
      </Link>

      {/* Middle - Main Navigation */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
        <Link href="/about" className="hover:text-white transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-white transition">
          Contact
        </Link>
        <Link href="/faq" className="hover:text-white transition">
          FAQ
        </Link>
      </div>

      {/* Right - Auth / Actions */}
      <div className="flex items-center space-x-6">
        <Link href="/items" className="hover:text-gray-300 transition">
          Items
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              href="/add-item"
              className="bg-white text-black px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
            >
              Add Item
            </Link>
            <button
              onClick={logout}
              className="text-red-400 hover:text-red-500 transition text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="bg-white text-black px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
