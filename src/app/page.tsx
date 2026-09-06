import LinkCard from "@/components/LinkCard";

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#FFFAF3] via-[#FFF1E1] to-[#FFE3C7] px-6 py-20">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <img
          src="/profile.png"
          alt="김러닝 프로필 사진"
          className="h-28 w-28 rounded-full object-cover shadow-[0_14px_30px_-10px_rgba(194,120,52,0.5)] ring-4 ring-white"
        />

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-stone-800">
            김러닝
          </h1>
          <p className="text-base text-stone-500">
            러너, 12월 풀코스 준비하고 있어요.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
