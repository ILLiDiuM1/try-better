"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log({
      name,
      message,
      email,
      age,
      phone,
    });

    setName("");
    setMessage("");
    setEmail("");
    setAge("");
    setPhone("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-xl border px-4 py-3"
      />
    <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-xl border px-4 py-3"
      />
      <input
        type="number"
        placeholder="Your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="rounded-xl border px-4 py-3"
      />
      <input
        type="tel"
        placeholder="Your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="rounded-xl border px-4 py-3"
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[120px] rounded-xl border px-4 py-3"
      />

      <button
        type="submit"
        className="w-fit rounded-xl bg-black border border-white-300 px-5 py-3 text-white"
      >
        Send
      </button>
    </form>
  );
}