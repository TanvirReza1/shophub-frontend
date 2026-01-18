"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddItemPage() {
  const router = useRouter();

  useEffect(() => {
    const hasToken = document.cookie
      .split("; ")
      .some((c) => c.startsWith("auth_token="));

    if (!hasToken) router.replace("/login");
  }, [router]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
      }),
    });

    if (res.status === 401) {
      setLoading(false);
      router.replace("/login");
      return;
    }

    if (!res.ok) {
      toast.error("Failed to create item ❌");
      setError("Failed to create item");
      setLoading(false);
      return;
    }

    toast.success("Item added successfully 🎉");

    setTimeout(() => {
      router.push("/items");
      router.refresh();
    }, 800);
  }

  return (
    <div className="min-h-screen max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Add New Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Item name"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="image"
          placeholder="Image URL (https://...)"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          disabled={loading}
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
}
