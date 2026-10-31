import { createFileRoute } from "@tanstack/react-router";
import { JsonLd, PageHero, SourceTag, Wrap } from "@/components/site/blocks";
import { identity, organisation, peakRecord, visualNote } from "@/content/destination";
import { destinationJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/story")({
  head: () =>
    pageHead(
      "Story",
      "The story of Khankharkhet in Badhan Patti, Chamoli, and the Act of Khankrakhet organisation profile.",
    ),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <JsonLd data={destinationJsonLd()} />
      <PageHero
        index="01"
        kicker="Destination story"
        title="A name, a block, and a summit on record."
        lede="This page keeps the supplied identity separate from the organisation that wrote the profile, and from the public mountain databases that spell the summit differently."
      />
      <Wrap className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <article className="md:col-span-7">
          <SourceTag status="brief" />
          <h2 className="mt-4 text-4xl">Who the destination is</h2>
          <p className="mt-4 text-lg leading-relaxed text-stone">
            {identity.title}. The brief places it in {identity.place}, and describes a hidden Himalayan destination
            for eco-tourism and adventure travel.
          </p>
          <p className="mt-4 leading-relaxed text-stone">{identity.spellingNote}</p>
          <h2 className="mt-12 text-4xl">Geography we can stand behind</h2>
          <SourceTag status="record" />
          <p className="mt-4 leading-relaxed text-stone">{peakRecord.caution}</p>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            <Row term="Recorded spelling" value={peakRecord.spelling} />
            {peakRecord.elevations.map((item) => (
              <Row key={item.source} term={item.source} value={item.metres} />
            ))}
            <Row term="Prominence" value={peakRecord.prominence} />
            <Row
              term="Coordinates"
              value={`${peakRecord.coordinates.lat}° N, ${peakRecord.coordinates.lng}° E (${peakRecord.coordinates.label})`}
            />
            <Row term="Also listed" value={peakRecord.alternate} />
          </dl>
        </article>
        <aside className="md:col-span-5">
          <img
            src="/media/forest.jpg"
            alt="Atmospheric photograph of a mossy Himalayan forest path."
            width={1600}
            height={1067}
            className="aspect-[4/5] w-full object-cover"
          />
          <p className="mt-3 text-sm text-stone">{visualNote}</p>
        </aside>
      </Wrap>
      <section className="bg-pine text-paper">
        <Wrap className="grid gap-8 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <SourceTag status="profile" />
            <h2 className="mt-4 text-4xl text-paper">The organisation</h2>
          </div>
          <div className="md:col-span-8 text-mist">
            <p className="text-lg leading-relaxed">
              {organisation.name} is described as an {organisation.kind.toLowerCase()} based in {organisation.base}. It
              is founded and led by {organisation.lead}. The initiative is {organisation.initiative}.
            </p>
            <p className="mt-4 text-lg leading-relaxed">The mission, as printed: {organisation.mission}</p>
            <ul className="mt-8 space-y-4">
              {organisation.stance.map((line) => (
                <li key={line} className="border-t border-paper/15 pt-4">
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed">
              The office printed on the profile is {organisation.office}. That is a contact address, not a claim that
              the destination itself sits beside the petrol pump.
            </p>
          </div>
        </Wrap>
      </section>
    </>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="grid gap-1 py-4 sm:grid-cols-3">
      <dt className="text-sm text-stone">{term}</dt>
      <dd className="sm:col-span-2">{value}</dd>
    </div>
  );
}
