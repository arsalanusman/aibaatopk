"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AppShell } from "@/components/AppShell";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || password.length < 6) {
      setErr("Nickname, email, password (6+) required.");
      return;
    }
    setErr("");
    window.location.href = "/discover";
  };

  return (
    <AppShell>
      <main className="mx-auto flex w-full max-w-md flex-col px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-white">Free account</h1>
        <p className="mt-2 text-sm text-slate-500">Phone / CNIC nahi. Sirf nickname + email + password.</p>
        <ul className="mt-4 space-y-1 text-xs text-slate-500">
          <li>• Dating app nahi</li>
          <li>• Private AI baat</li>
          <li>• Pehle bina account try bhi ho sakta</li>
        </ul>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="block text-sm text-slate-400">
            Nickname
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-dark mt-1.5"
              placeholder="e.g. Ahmed"
              maxLength={32}
            />
          </label>
          <label className="block text-sm text-slate-400">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-dark mt-1.5"
              placeholder="you@email.com"
            />
          </label>
          <label className="block text-sm text-slate-400">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-dark mt-1.5"
              placeholder="Min 6 characters"
            />
          </label>
          {err ? <p className="text-sm text-rose-400">{err}</p> : null}
          <button type="submit" className="btn-teal w-full">
            Create account
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          Already?{" "}
          <Link href="/login" className="font-semibold text-[#2dd4bf]">
            Login
          </Link>
        </p>
      </main>
    </AppShell>
  );
}
