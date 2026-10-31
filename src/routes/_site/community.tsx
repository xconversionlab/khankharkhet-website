import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SourceTag, Wrap } from "@/components/site/blocks";
import { educationExcerpt, rural, safety } from "@/content/destination";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/community")({
  head: () =>
    pageHead(
      "Community",
      "Responsible tourism, outdoor learning and village livelihood as described by the Act of Khankrakhet profile.",
    ),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <PageHero
        index="06"
        kicker="Responsible tourism"
        title="The village is not scenery."
        lede="The profile ties adventure to livelihood: local products, family homestays, youth training, and women-led and community-led work. Those are intentions in print, not a directory of businesses."
      />
      <Wrap className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <section>
          <SourceTag status="profile" />
          <h2 className="mt-4 text-4xl">Vocal for local</h2>
          <ul className="mt-6 space-y-4">
            {rural.vocal.map((line) => (
              <li key={line} className="border-t border-line pt-4 leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <SourceTag status="profile" />
          <h2 className="mt-4 text-4xl">Livelihood skills</h2>
          <ul className="mt-6 space-y-4">
            {rural.skills.map((line) => (
              <li key={line} className="border-t border-line pt-4 leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
        </section>
      </Wrap>
      <section className="bg-foam">
        <Wrap className="grid items-center gap-10 py-16 md:grid-cols-12 md:py-24">
          <figure className="md:col-span-5">
            <img
              src="/media/village.jpg"
              alt="Atmospheric photograph of distant terraced houses on a green mountain slope."
              width={1600}
              height={1200}
              className="w-full object-cover"
            />
          </figure>
          <blockquote className="md:col-span-7">
            <p className="font-display text-4xl leading-tight sm:text-5xl">“{educationExcerpt.quote}”</p>
            <p className="mt-6 max-w-xl leading-relaxed text-stone">{educationExcerpt.body}</p>
            <footer className="mt-4 text-sm text-stone">Organisation profile, outdoor education pages.</footer>
          </blockquote>
        </Wrap>
      </section>
      <Wrap className="py-16 md:py-24">
        <h2 className="text-4xl">Care, as they wrote it</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {safety.map((line) => (
            <li key={line} className="bg-pine p-6 text-paper">
              {line}
            </li>
          ))}
        </ul>
      </Wrap>
    </>
  );
}
