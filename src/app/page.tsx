export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          MiHashport
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Chat. Build. Pay. On Stellar — send, receive, swap, and deploy
          contracts, all inside WhatsApp.
        </p>
      </main>
    </div>
  );
}
