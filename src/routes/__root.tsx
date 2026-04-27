import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-deep px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-gold-light">Page not found</h2>
        <p className="mt-2 text-sm text-gold-light/50">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-purple-deep hover:bg-gold-light transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kay Thai Massage Kilkenny" },
      { name: "description", content: "Authentic Thai massage in Kilkenny. Traditional Thai, sports, hot stone, aromatherapy & more. Book your session today — 085 749 6528" },
      { name: "author", content: "Kay Thai Massage" },
      { property: "og:title", content: "Kay Thai Massage Kilkenny" },
      { name: "twitter:title", content: "Kay Thai Massage Kilkenny" },
      { property: "og:description", content: "Authentic Thai massage in Kilkenny. Traditional Thai, sports, hot stone, aromatherapy & more. Book your session today — 085 749 6528" },
      { name: "twitter:description", content: "Authentic Thai massage in Kilkenny. Traditional Thai, sports, hot stone, aromatherapy & more. Book your session today — 085 749 6528" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1b9d2d9e-8943-474e-9978-8dfc874c7971" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1b9d2d9e-8943-474e-9978-8dfc874c7971" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&family=Great+Vibes&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
