const ITEMS = [
  {
    title: "No Phone / CNIC required",
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
    icon: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h8M8 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Not a Dating App",
    icon: (
      <>
        <path d="M7 5h10v14l-5-2.5L7 19V5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Clear Privacy Policy",
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
    <div className="glass-panel mx-auto grid max-w-4xl grid-cols-1 gap-1 p-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-1">
      {ITEMS.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-left sm:justify-center sm:px-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2dd4bf]/10 text-[#2dd4bf]">
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              {item.icon}
            </svg>
          </span>
          <span className="text-[13px] font-medium leading-snug text-slate-200">{item.title}</span>
        </div>
      ))}
    </div>
  );
}
