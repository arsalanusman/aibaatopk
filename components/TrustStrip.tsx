const ITEMS = [
  { title: "No phone / CNIC", sub: "Nickname + email only later" },
  { title: "Private chats", sub: "Sirf aapka account" },
  { title: "Not dating", sub: "No match · no public feed" },
  { title: "Clear privacy", sub: "LLM details open" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02]">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-white/[0.06] sm:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.title} className="bg-[#0b1220] px-4 py-5 text-center sm:text-left">
            <p className="text-[13px] font-semibold text-white">{item.title}</p>
            <p className="mt-1 text-[11px] leading-snug text-slate-500">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
