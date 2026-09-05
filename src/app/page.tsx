import LinkCard from "@/components/LinkCard";

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-300 text-3xl font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
          김
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            김용우
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400">러너</p>
        </div>

        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
