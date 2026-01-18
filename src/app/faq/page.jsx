"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is ShopHub?",
    a: "ShopHub is a modern e-commerce platform for managing and selling products.",
  },
  {
    q: "Is ShopHub secure?",
    a: "Yes, it uses secure authentication and modern backend practices.",
  },
  {
    q: "Can I add my own products?",
    a: "Yes, authenticated users can add and manage products.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border rounded p-4 cursor-pointer"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <h2 className="font-semibold">{item.q}</h2>
            {open === index && <p className="text-gray-600 mt-2">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
