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
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">
        ShopHub
      </Link>

      <div className="space-x-6">
        <Link href="/items">Items</Link>

        {isLoggedIn ? (
          <>
            <Link href="/add-item">Add Item</Link>
            <button onClick={logout} className="text-red-400">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
