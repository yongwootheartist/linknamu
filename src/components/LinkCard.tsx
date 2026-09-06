type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-base font-medium text-stone-700 shadow-[0_4px_20px_-6px_rgba(194,120,52,0.25)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_8px_24px_-6px_rgba(194,120,52,0.35)]"
    >
      {label}
    </a>
  );
}
