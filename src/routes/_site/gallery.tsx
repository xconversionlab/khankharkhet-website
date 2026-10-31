import { createFileRoute } from "@tanstack/react-router";
import { GalleryView } from "@/components/site/gallery-view";
import { PageHero, Wrap } from "@/components/site/blocks";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/gallery")({
  head: () =>
    pageHead(
      "Gallery",
      "An immersive gallery frame for Khankharkhet. Current pictures are atmospheric studies, ready to be replaced with verified on-site photography.",
    ),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        index="03"
        kicker="Looking"
        title="A gallery waiting for the real ridge."
        lede="Open any frame. Filter by theme. When on-site photographs exist, they drop into the same collection without rebuilding the page."
      />
      <Wrap className="py-12 md:py-16">
        <GalleryView />
      </Wrap>
    </>
  );
}
