import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-red-500">Item not found</h1>
      <Link href="/items" className="text-indigo-500 underline">
        Back to items
      </Link>
    </div>
  );
}
