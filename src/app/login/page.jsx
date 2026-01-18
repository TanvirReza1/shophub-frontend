"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VALID_EMAIL, VALID_PASSWORD } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      document.cookie = `auth_token=true; path=/`;
      router.push("/items");
      router.refresh();
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          suppressHydrationWarning
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button className="bg-indigo-600 text-white w-full py-3 rounded hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
  );
}
