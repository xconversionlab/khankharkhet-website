import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/components/site/home-view";
import { JsonLd } from "@/components/site/blocks";
import { identity } from "@/content/destination";
import { destinationJsonLd, organisationJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/")({
  head: () =>
    pageHead(
      identity.name,
      "Khankharkhet eco-adventure destination in Narayanbagarh Block, Badhan Patti, Chamoli, Uttarakhand. Verified notes, open placeholders, and a way to enquire.",
    ),
  component: Home,
});

function Home() {
  return (
    <>
      <JsonLd data={destinationJsonLd()} />
      <JsonLd data={organisationJsonLd()} />
      <HomeView />
    </>
  );
}
