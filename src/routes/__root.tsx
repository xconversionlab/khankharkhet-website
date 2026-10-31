import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Link } from "@tanstack/react-router";
import { buttonClass } from "@/components/ui/button";
import appCss from "../styles.css?url";

const APP_NAME = "Khankharkhet";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#1a3328" },
      { name: "description", content: "Khankharkhet eco-adventure destination in Narayanbagarh Block, Badhan Patti, Chamoli, Uttarakhand." },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,640&family=Outfit:wght@300;400;500;600&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-svh flex-col justify-center bg-paper px-6 py-16 text-ink">
      <p className="text-xs tracking-widest text-stone uppercase">Khankharkhet</p>
      <h1 className="mt-4 max-w-xl text-5xl leading-none">This path is not on the map.</h1>
      <p className="mt-4 max-w-md text-stone">The page is missing. The destination is still Chamoli.</p>
      <Link to="/" className={`${buttonClass("pine")} mt-8 self-start`}>
        Return home
      </Link>
    </main>
  );
}
