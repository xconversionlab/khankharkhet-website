import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Provenance } from "@/content/destination";
import { cn } from "@/lib/cn";

const labels: Record<Provenance, string> = {
  brief: "Destination brief",
  profile: "Organisation profile",
  record: "Public record",
  placeholder: "To confirm",
};

export function SourceTag({ status }: { status: Provenance }) {
  const label = labels[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs tracking-wide",
        status === "placeholder" ? "bg-mist text-copper-deep" : "bg-mist text-stone",
      )}
    >
      {label}
    </span>
  );
}

export function Wrap({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-10", className)}>{children}</div>;
}

export function PageHero({
  index,
  kicker,
  title,
  lede,
}: {
  index: string;
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line">
      <Wrap className="grid gap-6 py-16 md:grid-cols-12 md:py-24">
        <p className="font-display text-2xl text-copper-deep md:col-span-2">{index}</p>
        <div className="md:col-span-10">
          <p className="text-xs font-medium tracking-widest text-stone uppercase">{kicker}</p>
          <h1 className="mt-3 max-w-4xl text-4xl leading-none text-ink sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">{lede}</p>
        </div>
      </Wrap>
    </header>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex min-h-11 items-center gap-2 text-sm font-medium tracking-wide text-copper-deep underline decoration-line underline-offset-4 hover:text-ink"
    >
      {children}
    </Link>
  );
}
