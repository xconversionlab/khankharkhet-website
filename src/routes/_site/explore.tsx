import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, SourceTag, Wrap } from "@/components/site/blocks";
import { highlights, journeys } from "@/content/destination";
import type { Provenance } from "@/content/destination";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/cn";

const filters: Array<{ id: "all" | Provenance; label: string }> = [
  { id: "all", label: "All notes" },
  { id: "brief", label: "Destination brief" },
  { id: "record", label: "Public record" },
  { id: "profile", label: "Profile" },
  { id: "placeholder", label: "To confirm" },
];

export const Route = createFileRoute("/_site/explore")({
  head: () =>
    pageHead(
      "Explore",
      "Destination highlights for Khankharkhet: verified notes beside clearly marked placeholders.",
    ),
  component: ExplorePage,
});

function ExplorePage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const items = useMemo(
    () => highlights.filter((item) => filter === "all" || item.status === filter),
    [filter],
  );

  return (
    <>
      <PageHero
        index="04"
        kicker="Highlights"
        title="What can be explored, and what is still blank."
        lede="Open notes are part of the design. They keep the site from inventing waterfalls, lodges or trail times that nobody has confirmed."
      />
      <Wrap className="py-12 md:py-16">
        <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="Highlight filters">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={cn(
                "min-h-11 shrink-0 rounded-full px-4 text-sm",
                filter === item.id ? "bg-pine text-paper" : "bg-mist text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col justify-between border border-line bg-foam p-6">
              <div>
                <SourceTag status={item.status} />
                <h2 className="mt-4 text-3xl">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-stone">{item.body}</p>
              </div>
              <Link to={item.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-copper-deep">
                Open the related page
              </Link>
            </li>
          ))}
        </ul>
        {items.length === 0 ? <p className="mt-8 text-stone">Nothing in this filter yet.</p> : null}
      </Wrap>
      <section className="border-t border-line">
        <Wrap className="py-16 md:py-24">
          <SourceTag status="profile" />
          <h2 className="mt-4 max-w-xl text-4xl">Journeys named beside eco-tourism</h2>
          <p className="mt-4 max-w-2xl text-stone">
            The profile says pick-up and drop can be arranged, then lists these routes. They are regional names, not a
            map of Khankharkhet.
          </p>
          <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2">
            {journeys.map((name) => (
              <li key={name} className="bg-paper px-4 py-5 font-display text-2xl">
                {name}
              </li>
            ))}
          </ul>
        </Wrap>
      </section>
    </>
  );
}
