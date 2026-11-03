import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "Media Coverage",
    "Celebrity & Influencer Placements",
    "Blogger Collaborations",
    "Social Media",
    "Event Curation",
    "Visual Branding & Storytelling",
  ];

  const filteredProjects = selectedCategory
    ? workProjects.filter((project) =>
        project.tags.some((tag) =>
          tag.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      )
    : workProjects;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="font-display text-2xl leading-none tracking-tight">
            Spellbound<span className="text-accent">.</span>
          </Link>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="/#work" className="link-sweep">
              Work
            </a>
            <a href="/#services" className="link-sweep">
              Services
            </a>
            <a href="/#studio" className="link-sweep">
              Studio
            </a>
            <a href="/#founder" className="link-sweep">
              Founder
            </a>
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
              WORK ARCHIVE
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Our approach is rooted in depth over volume, clarity over chaos, and collaboration over silos.
            </p>
          </div>
        </section>

        {/* Work Grid */}
        <section className="py-24 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            {/* Filter/Info Section */}
            <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-eyebrow text-muted-foreground mb-4">
                  <span className="text-accent mr-2">◆</span> Selected work
                </p>
                <h2 className="font-display text-3xl md:text-4xl">
                  {filteredProjects.length} projects
                  {selectedCategory && ` in ${selectedCategory}`}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 text-sm border transition-all duration-300 ${
                    selectedCategory === null
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border/60 hover:border-accent/60"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm border transition-all duration-300 ${
                      selectedCategory === category
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border/60 hover:border-accent/60"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((w, i) => (
                <Link
                  key={w.slug}
                  to="/work/$projectSlug"
                  params={{ projectSlug: w.slug }}
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={w.img}
                      alt={w.title}
                      width={1200}
                      height={1400}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-cream/80 text-sm mb-2">{w.client}</p>
                      <p className="text-cream text-xs font-mono">{w.industry}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-2xl md:text-3xl transition-colors group-hover:text-accent leading-tight">
                      {w.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {w.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-xs text-muted-foreground border border-border/40 px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No projects found in this category.</p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-4 text-accent hover:underline"
                >
                  View all projects
                </button>
              </div>
            )}
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
