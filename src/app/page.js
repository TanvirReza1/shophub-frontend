import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Truck, Star } from "lucide-react";
import { Quote } from "lucide-react";
import { ShoppingCart, LogIn } from "lucide-react";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
    cache: "no-store",
  });

  const items = await res.json();
  const sixItems = items.slice(0, 6);

  return (
    <div className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero-img.png"
          alt="ShopHub Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
                Discover the Future of Shopping with{" "}
                <span className="text-indigo-500">ShopHub</span>
              </h1>

              <p className="mt-6 text-lg text-zinc-300">
                Premium products. Secure checkout. Lightning-fast delivery.
              </p>

              {/* CTA */}
              <div className="mt-8 flex gap-4">
                <Link
                  href="/items"
                  className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Feature title="Fast" desc="Lightning fast performance" />
          <Feature title="Secure" desc="Cookie-based authentication" />
          <Feature title="Modern" desc="Built with Next.js 15" />
        </div>
      </section>

      {/* 3. Categories */}
      <section className="py-24 px-6 text-center relative">
        {/* subtle top accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

        <h2 className="text-4xl font-bold tracking-tight mb-4 ">Categories</h2>

        <p className="max-w-xl mx-auto text-lg text-zinc-600 leading-relaxed">
          Electronics, Fashion, Lifestyle, and more — curated for quality and
          value.
        </p>
      </section>

      {/* Popular Items */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Popular Items</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sixItems.map((item) => (
            <Link
              key={item._id}
              href={`/items/${item._id}`}
              className="group border rounded-xl overflow-hidden 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                {item?.image &&
                  (item.image.startsWith("data:image") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={
                        item.image.startsWith("http") ||
                        item.image.startsWith("/")
                          ? item.image
                          : "/placeholder.png"
                      }
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ))}
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {item.description.slice(0, 60)}...
                </p>
                <p className="mt-2 font-bold text-indigo-500">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <Link
          href="/items"
          className="inline-block mt-10 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          View All Items →
        </Link>
      </section>

      {/* 5. Why Choose Us */}

      <section className="py-24 bg-white dark:bg-zinc-900 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-800 shadow-sm hover:shadow-md transition">
            <Star className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Carefully curated items to ensure high quality, durability, and
              and value.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-800 shadow-sm hover:shadow-md transition">
            <ShieldCheck className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Secure Checkout</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Your data is protected using modern authentication and security
              practices.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-800 shadow-sm hover:shadow-md transition">
            <Truck className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Reliable and quick delivery to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm">
            <Quote className="w-8 h-8 text-indigo-600 mb-4" />
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              ShopHub made it incredibly easy to manage products and build a
              clean shopping experience.
            </p>
            <div className="font-semibold">— Alex Morgan</div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm">
            <Quote className="w-8 h-8 text-indigo-600 mb-4" />
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              The interface is modern, fast, and feels production-ready.
            </p>
            <div className="font-semibold">— Sarah Khan</div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to start shopping?
        </h2>

        <p className="max-w-xl mx-auto text-indigo-100 mb-8">
          Discover quality products and a seamless shopping experience.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/items"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-100 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Browse Items
          </Link>

          <a
            href="/login"
            className="border border-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-indigo-600 transition"
          >
            <LogIn className="w-5 h-5" />
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="p-6 border rounded-lg dark:border-zinc-700">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400">{desc}</p>
    </div>
  );
}
