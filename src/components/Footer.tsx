export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50/50 py-10 dark:border-zinc-800 dark:bg-zinc-950/20 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          &copy; {currentYear} MiHashport. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <a
            id="footer-backend-repo-link"
            href="https://github.com/MiHashport/MiHashport-Backend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-zinc-500 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-teal-400 transition-colors duration-300"
          >
            Backend Repository
          </a>
          <a
            id="footer-contract-repo-link"
            href="https://github.com/MiHashport/MiHashport-Contract"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-zinc-500 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-teal-400 transition-colors duration-300"
          >
            Contract Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
