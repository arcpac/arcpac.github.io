import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-3 z-50 w-full px-3 sm:top-5 sm:px-6">
      <div
        className="
      mx-auto w-full  rounded-2xl px-4 py-2 sm:rounded-full sm:px-6
      bg-white/70 text-neutral-900
      backdrop-blur-xs backdrop-saturate-150
      shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]
      supports-[backdrop-filter]:bg-white/30

      dark:bg-black/55 dark:text-white
      dark:shadow-[0_12px_35px_-20px_rgba(0,0,0,0.8)]
      dark:supports-[backdrop-filter]:bg-black/40
    "
      >
        <div className="flex items-center justify-center">
          <ul
            className="
          flex flex-wrap items-center justify-center gap-x-4 gap-y-2
          text-[10px] font-semibold uppercase tracking-wide
          text-neutral-900 sm:gap-10 md:text-[14px]
          dark:text-white
        "
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-opacity hover:opacity-80">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
