import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ChevronRight, ExternalLink, Instagram, Facebook, Newspaper } from "lucide-react";
import { getWorkBySlug, getRelatedWork } from "@/lib/work-data";

export const Route = createFileRoute("/work/$projectSlug")({
  component: WorkDetail,
  head: ({ params }) => {
    const project = getWorkBySlug(params.projectSlug);
    return {
      meta: [
        { title: `${project?.title} — Spellbound Communications` },
        {
          name: "description",
          content: project?.challenge.substring(0, 160),
        },
        { property: "og:title", content: `${project?.title} — Spellbound Communications` },
        {
          property: "og:description",
          content: project?.challenge.substring(0, 160),
        },
        { property: "og:image", content: project?.img },
        { property: "og:url", content: `/work/${project?.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${project?.slug}` }],
    };
  },
});

function WorkDetail() {
  const { projectSlug } = useParams({ from: "/work/$projectSlug" });
  const project = getWorkBySlug(projectSlug);
  const relatedWork = getRelatedWork(projectSlug, 2);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Project not found</h1>
          <Link to="/work" className="text-accent hover:underline">
            Back to work archive
          </Link>
        </div>
      </div>
    );
  }

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
            <Link to="/work" className="link-sweep">
              Archive
            </Link>
            <a href="/#services" className="link-sweep">
              Services
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

      <div className="pt-28 md:pt-32">
        {/* Breadcrumb */}
        <div className="border-b border-border/60 py-4">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/work" className="hover:text-foreground transition">
                Work
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{project.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section with Image */}
        <section>
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-16 md:pt-24 pb-8 md:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
              <div className="md:col-span-8">
                <p className="text-eyebrow text-accent mb-4 uppercase tracking-wider">{project.industry}</p>
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 tracking-tighter">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col justify-start gap-8">
                <div>
                  <p className="text-eyebrow text-muted-foreground mb-2 uppercase tracking-wider">Client</p>
                  <p className="font-display text-3xl leading-tight">{project.client}</p>
                </div>
                <div>
                  <p className="text-eyebrow text-muted-foreground mb-2 uppercase tracking-wider">Year</p>
                  <p className="font-display text-3xl leading-tight">{project.year}</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="overflow-hidden rounded-lg bg-muted border border-border/20 group cursor-pointer">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="border-t border-border/60 py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              {/* Challenge as Objective */}
              <div className="space-y-6">
                <div>
                  <p className="text-eyebrow text-accent mb-3 uppercase">Objective</p>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
                    The Challenge
                  </h2>
                </div>
                <div className="w-12 h-1 bg-accent/30 rounded-full" />
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              {/* Approach as Objective */}
              <div className="space-y-6">
                <div>
                  <p className="text-eyebrow text-accent mb-3 uppercase">Objective</p>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
                    Our Approach
                  </h2>
                </div>
                <div className="w-12 h-1 bg-accent/30 rounded-full" />
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  {project.approach}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Enhanced Visual */}
        <section className="border-t border-border/60 py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16">
              <p className="text-eyebrow text-accent mb-3 uppercase">Visual Work</p>
              <h2 className="font-display text-5xl md:text-6xl leading-tight">
                Design in action
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-lg bg-muted border border-border/20 hover:border-accent/50 transition-all duration-500"
                  style={{
                    gridColumn: idx === 0 ? "span 1" : "span 1",
                    gridRow: idx === 0 ? "span 2" : "span 1",
                  }}
                >
                  <div className="overflow-hidden h-full">
                    <img
                      src={img}
                      alt={`${project.title} - work ${idx + 1}`}
                      className="w-full h-full object-cover aspect-square md:aspect-auto transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section - Enhanced */}
        <section className="border-t border-border/60 py-24 md:py-40 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16 md:mb-24">
              <p className="text-eyebrow text-accent mb-4 uppercase">The Results</p>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
                {project.impact.title}
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full mb-8" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl font-light">
                {project.impact.description}
              </p>
            </div>

            {/* Metrics Grid - Enhanced */}
            {project.impact.metrics && project.impact.metrics.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                {project.impact.metrics.map((metric, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-baseline gap-3 mb-4">
                      <div className="font-display text-5xl md:text-6xl lg:text-7xl text-accent font-bold tracking-tighter">
                        {metric.value}
                      </div>
                    </div>
                    <div className="h-0.5 w-12 bg-accent/40 mb-6 group-hover:w-24 group-hover:bg-accent transition-all duration-500" />
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground group-hover:text-foreground transition-colors">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Media Coverage Section */}
        {project.mediaCoverage && project.mediaCoverage.length > 0 && (
          <section className="border-t border-border/60 py-24 md:py-32">
            <div className="mx-auto max-w-[1600px] px-6 md:px-10">
              <p className="text-eyebrow text-accent mb-6">Media Coverage</p>
              <div className="mb-12">
                <h2 className="font-display text-5xl md:text-6xl leading-tight mb-4">
                  Featured in
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Discover where our work has been recognized across leading publications and platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.mediaCoverage.map((coverage, idx) => {
                  const getIcon = () => {
                    switch (coverage.type) {
                      case "instagram":
                        return <Instagram className="w-5 h-5" />;
                      case "facebook":
                        return <Facebook className="w-5 h-5" />;
                      default:
                        return <Newspaper className="w-5 h-5" />;
                    }
                  };

                  return (
                    <a
                      key={idx}
                      href={coverage.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 border border-border/60 hover:border-accent hover:bg-accent/5 transition-all duration-300 rounded-lg"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="font-display text-xl md:text-2xl group-hover:text-accent transition-colors">
                            {coverage.publication}
                          </h3>
                        </div>
                        <div className="text-muted-foreground group-hover:text-accent transition-colors">
                          {getIcon()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="text-xs uppercase tracking-wider">{coverage.type}</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-muted-foreground">
                  {project.mediaCoverage.length} media features across {new Set(project.mediaCoverage.map(c => c.publication)).size} publications
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Related Work */}
        {relatedWork.length > 0 && (
          <section className="border-t border-border/60 py-24 md:py-40">
            <div className="mx-auto max-w-[1600px] px-6 md:px-10">
              <div className="mb-16">
                <p className="text-eyebrow text-accent mb-3 uppercase">Related Work</p>
                <h2 className="font-display text-5xl md:text-6xl leading-tight">
                  More stories we've shaped
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {relatedWork.map((w) => (
                  <Link
                    key={w.slug}
                    to="/work/$projectSlug"
                    params={{ projectSlug: w.slug }}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-lg bg-muted mb-6 border border-border/20 group-hover:border-accent/50 transition-all">
                      <img
                        src={w.img}
                        alt={w.title}
                        className="w-full h-auto object-cover aspect-video transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors duration-300">
                      {w.title}
                    </h3>
                    <div className="flex gap-3 text-sm text-muted-foreground flex-wrap">
                      {w.tags.map((t) => (
                        <span key={t} className="group-hover:text-foreground transition-colors">— {t}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="border-t border-border/60 py-24 md:py-40 bg-gradient-to-b from-background to-muted/20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="text-center space-y-8">
              <div>
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
                  Let's create <span className="text-accent">together</span>
                </h2>
                <div className="w-12 h-1 bg-accent/40 rounded-full mx-auto" />
              </div>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                If this resonates with you, let's talk about what we can build for your brand.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 border border-foreground px-8 py-5 hover:bg-foreground hover:text-background transition-all duration-300 group rounded-lg"
              >
                <span className="text-eyebrow">Start a project</span>
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
