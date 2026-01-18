import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight">ShopHub</h2>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Premium quality products crafted with care. Built for modern
            experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-medium mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Support</h3>
          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <Link href="#">Help Center</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-medium mb-4">Stay Updated</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            Subscribe to our newsletter for updates.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-md bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
