import Image from "next/image";
import { notFound } from "next/navigation";

// 🔹 Fetch single item
async function getItem(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

// 🔹 Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;

  const item = await getItem(id);

  if (!item) {
    return { title: "Item not found" };
  }

  return {
    title: item.name,
    description: item.description,
  };
}

// 🔹 Page
export default async function ItemDetails({ params }) {
  const { id } = await params;

  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen  py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* 🖼️ Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl dark:bg-zinc-900">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 📄 Details */}
        <div className="flex flex-col justify-center">
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Premium Item
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {item.name}
          </h1>

          <p className="text-3xl font-bold text-indigo-600 mb-6">
            ${item.price}
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
            {item.description}
          </p>

          {/* CTA (optional but premium) */}
          <button className="w-fit px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
