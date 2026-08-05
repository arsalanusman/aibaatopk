"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AppShell } from "@/components/AppShell";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || password.length < 4) {
      setErr("Email + password (4+ chars) chahiye.");
      return;
    }
    setErr("");
    // Auth later — demo path to discover
    window.location.href = "/discover";
  };

  return (
    <AppShell hideFooter={false}>
      <main className="mx-auto flex w-full max-w-md flex-col px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-white">Login</h1>
        <p className="mt-2 text-sm text-slate-500">
          Account API baad mein. Abhi form UI complete — free try bhi milta hai.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="block text-sm text-slate-400">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-dark mt-1.5"
              placeholder="you@email.com"
              autoComplete="email"
            />
          </label>
          <label className="block text-sm text-slate-400">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-dark mt-1.5"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>
          {err ? <p className="text-sm text-rose-400">{err}</p> : null}
          <button type="submit" className="btn-teal w-full">
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          Naya ho?{" "}
          <Link href="/signup" className="font-semibold text-[#2dd4bf]">
            Sign up
          </Link>
          {" · "}
          <Link href="/discover" className="font-semibold text-[#2dd4bf]">
            Free try
          </Link>
        </p>
      </main>
    </AppShell>
  );
}
