import Link from "next/link";
import Image from "next/image";

export default async function ItemsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
    cache: "no-store",
    credentials: "include",
  });

  const items = await res.json();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link
            key={item._id}
            href={`/items/${item._id}`}
            className="group border rounded-xl overflow-hidden 
             hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
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
                        : ""
                    }
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                ))}
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>

              <p className="mt-2 font-bold text-indigo-600">${item.price}</p>
              <span
                className="mt-2 inline-flex items-center justify-center
                rounded-lg border border-indigo-600 px-4 py-2 text-sm font-semibold
                text-indigo-600 transition
                group-hover:bg-indigo-600 group-hover:text-white"
              >
                See Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
