import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site/chrome";
import { ScrollProgress } from "@/components/site/reveal";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <SiteHeader />
      <main id="content">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
