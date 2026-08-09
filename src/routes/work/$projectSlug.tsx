import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
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
            <Link to="/#work" className="link-sweep">
              Work
            </Link>
            <Link to="/work" className="link-sweep">
              Archive
            </Link>
            <Link to="/#services" className="link-sweep">
              Services
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
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-16 md:pt-24 pb-8 md:pb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
              <div className="md:col-span-8">
                <p className="text-eyebrow text-accent mb-4">{project.industry}</p>
                <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-3 text-sm">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs uppercase tracking-wider font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col justify-start gap-6">
                <div>
                  <p className="text-eyebrow text-muted-foreground mb-2">Client</p>
                  <p className="font-display text-2xl">{project.client}</p>
                </div>
                <div>
                  <p className="text-eyebrow text-muted-foreground mb-2">Year</p>
                  <p className="font-display text-2xl">{project.year}</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="overflow-hidden rounded-lg bg-muted">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
        </section>

        {/* Challenge & Approach Section */}
        <section className="border-t border-border/60 py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* The Challenge */}
              <div>
                <p className="text-eyebrow text-accent mb-6">The Challenge</p>
                <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                  The Problem
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Our Approach */}
              <div>
                <p className="text-eyebrow text-accent mb-6">Our Approach</p>
                <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                  The Solution
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="border-t border-border/60 py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <p className="text-eyebrow text-accent mb-12">Visual Work</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg bg-muted">
                  <img
                    src={img}
                    alt={`${project.title} - work ${idx + 1}`}
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="border-t border-border/60 py-24 md:py-32 bg-muted/50">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <p className="text-eyebrow text-accent mb-6">The Impact</p>
            <div className="mb-12">
              <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
                {project.impact.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {project.impact.description}
              </p>
            </div>

            {/* Metrics */}
            {project.impact.metrics && project.impact.metrics.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.impact.metrics.map((metric, idx) => (
                  <div key={idx} className="border-t border-border pt-6">
                    <div className="font-display text-4xl md:text-5xl text-accent mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Related Work */}
        {relatedWork.length > 0 && (
          <section className="border-t border-border/60 py-24 md:py-32">
            <div className="mx-auto max-w-[1600px] px-6 md:px-10">
              <p className="text-eyebrow text-accent mb-6">Related Work</p>
              <h2 className="font-display text-4xl md:text-5xl mb-16">
                More stories we've shaped
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {relatedWork.map((w) => (
                  <Link
                    key={w.slug}
                    to={`/work/${w.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-lg bg-muted mb-6">
                      <img
                        src={w.img}
                        alt={w.title}
                        className="w-full h-auto object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:text-accent transition-colors">
                      {w.title}
                    </h3>
                    <div className="flex gap-3 text-sm text-muted-foreground flex-wrap">
                      {w.tags.map((t) => (
                        <span key={t}>— {t}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="border-t border-border/60 py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-6xl mb-8">
                Let's create <span className="text-accent">together</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                If this resonates with you, let's talk about what we can build for your brand.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 border border-foreground px-8 py-5 hover:bg-foreground hover:text-background transition-colors group"
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
