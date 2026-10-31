import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, SourceTag, Wrap } from "@/components/site/blocks";
import {
  experiences,
  learningProgramme,
  learners,
  raftingNote,
  safety,
  type ExperienceGroup,
} from "@/content/destination";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/cn";

const groups: Array<"All" | ExperienceGroup> = [
  "All",
  "Trails",
  "Water",
  "Rock & heritage",
  "Learning",
  "Gathering",
];

export const Route = createFileRoute("/_site/experiences")({
  head: () =>
    pageHead(
      "Experiences",
      "Adventure and learning activities named by Travel of Uttarakhand, with gaps left open where Khankharkhet details were not supplied.",
    ),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const [group, setGroup] = useState<(typeof groups)[number]>("All");
  const items = useMemo(
    () => experiences.filter((item) => group === "All" || item.group === group),
    [group],
  );

  return (
    <>
      <PageHero
        index="02"
        kicker="Nature and adventure"
        title="Activities as they were written."
        lede="The lists below come from the organisation profile. Grouping them is only a way to read the page. It is not a claim that every activity runs at Khankharkhet, or that a price exists."
      />
      <Wrap className="py-12 md:py-16">
        <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Activity groups">
          {groups.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={group === item}
              onClick={() => setGroup(item)}
              className={cn(
                "min-h-11 shrink-0 rounded-full px-4 text-sm",
                group === item ? "bg-pine text-paper" : "bg-mist text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.id} className="grid gap-3 py-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <SourceTag status="profile" />
                <h2 className="mt-3 text-3xl">{item.name}</h2>
                <p className="mt-2 text-xs tracking-widest text-stone uppercase">{item.group}</p>
              </div>
              <p className="leading-relaxed text-stone md:col-span-8">{item.summary}</p>
            </li>
          ))}
        </ul>
      </Wrap>
      <section className="bg-foam">
        <Wrap className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs tracking-widest text-copper-deep uppercase">{raftingNote.kicker}</p>
            <h2 className="mt-3 text-4xl">{raftingNote.title}</h2>
            <p className="mt-4 leading-relaxed text-stone">{raftingNote.body}</p>
          </div>
          <dl className="space-y-5 text-sm leading-relaxed">
            <div>
              <dt className="text-stone">Base, as printed</dt>
              <dd className="mt-1">{raftingNote.base}</dd>
            </div>
            <div>
              <dt className="text-stone">Access, as printed</dt>
              <dd className="mt-1">{raftingNote.access}</dd>
            </div>
            <div>
              <dt className="text-stone">{raftingNote.stayName}</dt>
              <dd className="mt-1">{raftingNote.stayAddress}</dd>
            </div>
          </dl>
        </Wrap>
      </section>
      <Wrap className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="text-4xl">Outdoor learning programme</h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {learningProgramme.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-4xl">Who can join</h2>
          <ul className="mt-6 space-y-3 text-stone">
            {learners.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="mt-10 text-2xl">Safety and care, as printed</h3>
          <ul className="mt-4 space-y-3 text-stone">
            {safety.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Wrap>
    </>
  );
}
