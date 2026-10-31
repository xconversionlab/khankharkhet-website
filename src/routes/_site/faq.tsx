import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Wrap } from "@/components/site/blocks";
import { FaqList } from "@/components/site/faq-list";
import { buttonClass } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/faq")({
  head: () =>
    pageHead(
      "FAQ",
      "Questions about Khankharkhet answered only where the brief, profile or public records are clear.",
    ),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        index="08"
        kicker="Questions"
        title="Ask the page. Then ask the hosts."
        lede="Answers stay short where the record is clear. Anything still open is marked to confirm, so it can be edited later without pretending it was known."
      />
      <Wrap className="py-12 md:py-16">
        <FaqList />
        <Link to="/enquire" className={`${buttonClass("pine")} mt-10`}>
          Still unsure? Enquire
        </Link>
      </Wrap>
    </>
  );
}
