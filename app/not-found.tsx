import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
        404 / not found
      </p>
      <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-paper sm:text-7xl">
        Nothing here, <em className="italic text-white/70">yet.</em>
      </h1>
      <p className="max-w-xs text-[12px] leading-relaxed text-white/65">
        That page doesn&apos;t exist. The index is the best way to find a style.
      </p>
      <Link
        href="/"
        className="border border-line px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:border-paper hover:text-paper"
      >
        Back to the index
      </Link>
    </div>
  );
}
