import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ChevronRight, ExternalLink, Instagram, Facebook, Newspaper } from "lucide-react";
import { getWorkBySlug, getRelatedWork } from "@/lib/work-data";
import { ProjectHeroImage } from "@/components/ProjectHeroImage";
import { ProjectGallery } from "@/components/ProjectGallery";

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
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 md:px-6 lg:px-10 py-3 md:py-4">
          <Link to="/" className="font-display text-lg md:text-2xl leading-none tracking-tight">
            Spellbound<span className="text-accent">.</span>
          </Link>
          <nav className="hidden gap-6 md:gap-8 text-xs md:text-sm md:flex">
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
            className="group inline-flex items-center gap-1 md:gap-2 rounded-full border border-foreground/80 px-3 md:px-4 py-2 text-xs md:text-sm transition hover:bg-foreground hover:text-background"
          >
            <span className="hidden sm:inline">Start a project</span>
            <span className="sm:hidden">Contact</span>
            <span className="transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </header>

      <div className="pt-20 md:pt-28 lg:pt-32">
        {/* Breadcrumb */}
        <div className="border-b border-border/60 py-3 md:py-4">
          <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <Link to="/work" className="hover:text-foreground transition">
                Work
              </Link>
              <ChevronRight className="w-3 md:w-4 h-3 md:h-4" />
              <span className="text-foreground truncate">{project.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section with Image */}
        <section>
          <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10 py-12 md:pt-24 md:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-12 md:mb-16">
              <div className="md:col-span-8">
                <p className="text-eyebrow text-accent mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm">{project.industry}</p>
                <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight md:leading-[0.9] mb-6 md:mb-8 tracking-tighter">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-accent/10 hover:bg-accent/20 text-accent px-3 md:px-4 py-1 md:py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col justify-start gap-6 md:gap-8">
                <div>
                  <p className="text-eyebrow text-muted-foreground mb-2 uppercase tracking-wider text-xs">Client</p>
                  <p className="font-display text-xl md:text-3xl leading-tight">{project.client}</p>
                </div>
                <div>
                  <p className="text-eyebrow text-muted-foreground mb-2 uppercase tracking-wider text-xs">Year</p>
                  <p className="font-display text-xl md:text-3xl leading-tight">{project.year}</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <ProjectHeroImage
              src={project.img}
              alt={project.title}
              title={`${project.title} - ${project.client}`}
              className="md:mt-4"
            />
          </div>
        </section>

        {/* Objectives Section */}
        <section className="border-t border-border/60 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
            <div className="space-y-10 md:space-y-12 lg:space-y-16">
              {/* Objectives Header */}
              <div className="max-w-3xl">
                <p className="text-eyebrow text-accent mb-2 md:mb-3 uppercase text-xs md:text-sm">Overview</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight md:leading-[1.1] text-foreground mb-6 md:mb-8">
                  Our Objectives
                </h2>
                <div className="w-8 md:w-12 h-1 bg-accent rounded-full mb-8 md:mb-10" />
                <div className="space-y-6">
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed font-light">
                    {project.challenge}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed font-light">
                    {project.approach}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <ProjectGallery images={project.gallery} projectTitle={project.title} />

        {/* Impact Section - Enhanced */}
        <section className="border-t border-border/60 py-12 md:py-24 lg:py-40 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
            <div className="mb-10 md:mb-16 lg:mb-24">
              <p className="text-eyebrow text-accent mb-2 md:mb-4 uppercase text-xs md:text-sm">The Results</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight md:leading-[0.95] mb-6 md:mb-8">
                {project.impact.title}
              </h2>
              <div className="w-8 md:w-12 h-1 bg-accent rounded-full mb-6 md:mb-8" />
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl font-light">
                {project.impact.description}
              </p>
            </div>

            {/* Metrics Grid - Enhanced */}
            {project.impact.metrics && project.impact.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                {project.impact.metrics.map((metric, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-baseline gap-3 mb-3 md:mb-4">
                      <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-accent font-bold tracking-tighter">
                        {metric.value}
                      </div>
                    </div>
                    <div className="h-0.5 w-8 md:w-12 bg-accent/40 mb-4 md:mb-6 md:group-hover:w-24 md:group-hover:bg-accent transition-all duration-500" />
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground md:group-hover:text-foreground transition-colors">
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
