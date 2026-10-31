import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Wrap } from "@/components/site/blocks";
import { Planner } from "@/components/site/planner";
import { organisation } from "@/content/destination";
import { buttonClass } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/plan")({
  head: () =>
    pageHead(
      "Plan",
      "Travel planning for Khankharkhet with draft itinerary frames, a local checklist, and no unpublished prices.",
    ),
  component: PlanPage,
});

function PlanPage() {
  return (
    <>
      <PageHero
        index="05"
        kicker="Travel planning"
        title="Plan the questions before the days."
        lede="The organisation describes small groups, local guides, homestays as a style, and customised itineraries. Until those are written for Khankharkhet, the days below stay drafts."
      />
      <Wrap className="py-16 md:py-24">
        <Planner />
      </Wrap>
      <section className="bg-pine text-paper">
        <Wrap className="grid gap-8 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs tracking-widest text-mist uppercase">Rates</p>
            <h2 className="mt-3 text-4xl text-paper">There is no price on this page.</h2>
            <p className="mt-4 leading-relaxed text-mist">
              No fare, tax, inclusion or cancellation rule was supplied. A future booking integration can sit behind the
              same enquiry, once inventory exists.
            </p>
          </div>
          <div className="flex flex-col items-start justify-end gap-4">
            <p className="text-sm text-mist">Travel style, as printed:</p>
            <ul className="space-y-2 text-paper">
              {organisation.style.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link to="/enquire" className={buttonClass("paper")}>
              Enquire with these questions
            </Link>
          </div>
        </Wrap>
      </section>
    </>
  );
}
