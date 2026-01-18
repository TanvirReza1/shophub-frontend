import Image from "next/image";
import Link from "next/link";

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
      <section className="py-20 bg-white  px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Categories</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Electronics, Fashion, Lifestyle, and more
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
      <section className="py-20 bg-white dark:bg-zinc-900 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
        <p className="max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400">
          We provide the best quality products with secure checkout and fast
          delivery.
        </p>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="italic text-zinc-600 dark:text-zinc-400">
          “Amazing experience and great products!”
        </p>
      </section>

      {/* 7. Call To Action */}
      <section className="py-20 bg-indigo-600 text-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to start shopping?
        </h2>
        <a
          href="/items"
          className="inline-block mt-4 px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-zinc-100"
        >
          Browse Items
        </a>
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
