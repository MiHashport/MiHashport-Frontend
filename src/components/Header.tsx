import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/70 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/70 transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          id="header-brand-link"
          href="/"
          className="group flex items-center gap-2.5 font-sans font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-90 transition-all duration-300"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="bg-gradient-to-r from-zinc-950 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-300 group-hover:from-emerald-500 group-hover:to-teal-400 transition-all duration-300">
            MiHashport
          </span>
        </Link>
      </div>
    </header>
  );
}
