import { createFileRoute, Link } from "@tanstack/react-router";
import { workProjects } from "@/lib/work-data";

export const Route = createFileRoute("/work/")({
  component: WorkArchive,
  head: () => ({
    meta: [
      { title: "Work Archive — Spellbound Communications" },
      {
        name: "description",
        content: "Explore our portfolio of work across PR, branding, social, and events.",
      },
      { property: "og:title", content: "Work Archive — Spellbound Communications" },
      {
        property: "og:description",
        content: "Explore our portfolio of work across PR, branding, social, and events.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
});

function WorkArchive() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="font-display text-2xl leading-none tracking-tight">
            Spellbound<span className="text-accent">.</span>
          </Link>
          <nav className="hidden gap-8 text-sm md:flex">
            <Link to="/#work" className="link-sweep">
              Work
            </Link>
            <Link to="/#services" className="link-sweep">
              Services
            </Link>
            <Link to="/#studio" className="link-sweep">
              Studio
            </Link>
            <Link to="/#founder" className="link-sweep">
              Founder
            </Link>
            <Link to="/contact" className="link-sweep">
              Contact
            </Link>
          </nav>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/80 px-4 py-2 text-sm transition hover:bg-foreground hover:text-background"
          >
            Start a project
            <span className="transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </header>

      <div className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="border-b border-border/60 py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <p className="text-eyebrow text-accent mb-6">
              (02) Work Archive
            </p>
            <h1 className="font-display text-6xl md:text-[10vw] leading-[0.9] tracking-[-0.03em]">
              Made <em className="italic">to be</em>
              <br />
              <em className="italic text-accent">remembered.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Every project in our care is a partnership. We work with brands that refuse to be forgotten—
              <span className="text-foreground">and we deliver work that proves it.</span>
            </p>
          </div>
        </section>

        {/* Work Grid */}
        <section className="py-24 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            {/* Filter/Info Section */}
            <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-eyebrow text-muted-foreground mb-4">
                  <span className="text-accent mr-2">◆</span> Selected work
                </p>
                <h2 className="font-display text-3xl md:text-4xl">
                  {workProjects.length} projects
                </h2>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
              {workProjects.map((w, i) => (
                <Link
                  key={w.slug}
                  to={`/work/${w.slug}`}
                  className={`group block transition-opacity hover:opacity-80 ${
                    i % 2 === 1 ? "md:mt-32" : ""
                  }`}
                >
                  <div className="image-zoom overflow-hidden bg-muted">
                    <img
                      src={w.img}
                      alt={w.title}
                      width={1200}
                      height={1400}
                      loading="lazy"
                      className="aspect-[5/6] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-6">
                    <h3 className="font-display text-3xl md:text-4xl transition-colors group-hover:text-accent">
                      {w.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {w.year}
                    </span>
                  </div>
                  <div className="mt-2 flex gap-3 text-sm text-muted-foreground flex-wrap">
                    {w.tags.map((t) => (
                      <span key={t}>— {t}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/60 py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-6xl mb-8">
                Ready to <span className="text-accent">begin</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Let's talk about your brand, your vision, and how we can help you become unforgettable.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 border border-foreground px-8 py-5 hover:bg-foreground hover:text-background transition-colors group"
              >
                <span className="text-eyebrow">Start a conversation</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-border bg-background py-10 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px] flex flex-wrap items-center justify-between gap-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <div>© {new Date().getFullYear()} Spellbound Communications</div>
          <div className="font-display text-lg tracking-normal normal-case text-foreground">
            Strategy · Clarity · Emotion · <em className="text-accent">Magic</em>
          </div>
          <div>Made with intention</div>
        </div>
      </footer>
    </div>
  );
}
