const ITEMS = [
  {
    title: "No Phone / CNIC required",
    sub: "Free try bina personal ID",
    icon: (
      <path
        d="M6.5 4.5h4l1.5 3.5-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 3.5 1.5v4a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.7 2 2 0 0 1 6.5 4.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Private Chats",
    sub: "Sirf aapka room",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h8M8 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Not a Dating App",
    sub: "No match · no public feed",
    icon: (
      <path d="M7 5h10v14l-5-2.5L7 19V5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: "Clear Privacy Policy",
    sub: "LLM details open",
    icon: (
      <>
        <path
          d="M12 3.5 19 6.5v5.2c0 4.4-2.9 7.4-7 8.8-4.1-1.4-7-4.4-7-8.8V6.5L12 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="m9.5 12 1.8 1.8 3.7-3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
];

export function TrustBar() {
  return (
    <div className="glass-panel grid grid-cols-1 gap-0 overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
      {ITEMS.map((item, i) => (
        <div
          key={item.title}
          className={`flex items-start gap-3 px-5 py-5 ${i > 0 ? "border-t border-white/[0.06] sm:border-t-0" : ""} ${
            i % 2 === 1 ? "sm:border-l sm:border-white/[0.06]" : ""
          } ${i >= 2 ? "lg:border-l lg:border-white/[0.06]" : ""} ${i === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2dd4bf]/12 text-[#2dd4bf]">
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              {item.icon}
            </svg>
          </span>
          <div>
            <p className="text-[13px] font-semibold leading-snug text-white">{item.title}</p>
            <p className="mt-0.5 text-[12px] text-slate-500">{item.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
