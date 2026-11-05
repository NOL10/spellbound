import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Instagram, Mail } from "lucide-react";
import hero from "@/assets/hero.png";
import rachelImage from "@/assets/rachel fargoes.jpeg";
import { workProjects } from "@/lib/work-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Spellbound — A communications house for bold brands" },
      {
        name: "description",
        content:
          "A communications and brand storytelling house. Public relations, brand strategy, influencer and content for founders who refuse to be forgettable.",
      },
      { property: "og:title", content: "Spellbound - A communications house for bold brands" },
      {
        property: "og:description",
        content: "Public relations, brand strategy, influencer and content for bold brands.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const clients = [
  "Grey Soul",
  "Husna Rahman",
  "Nanna's Negroni",
  "Jamba Juice",
  "Donna Cucina",
  "Donna Cucina - Summer Festival",
  "Greater Good",
  "729",
  "House of Sachi",
  "Rever by Riddhi",
  "RK Wedding",
  "Nav Chaitanya",
  "The Lakehouse",
  "RARA",
  "Moni K",
  "Jacobi",
  "Cinema salon",
  "Chaitanya Thane",
  "Blackberry",
  "MRDA Ahmedabad",
  "Shenoy's 1976",
  "Vijay Chabbra",
  "Foundation Gift",
  "CIU",
];

const services = [
  {
    n: "01",
    title: "Public Relations & Communications",
    items: [
      "Media Relations & Coverage",
      "Influencer Collaborations",
      "Celebrity Placements",
      "Cross-Brand Collaborations & Partnerships",
      "Brand Communications Strategy",
    ],
  },
  {
    n: "02",
    title: "Social Media & Content Creation",
    items: [
      "Social Media Strategy",
      "Content Planning & Creative Direction",
      "Copywriting & Brand Voice Development",
      "Social Media Management",
      "Community Engagement",
    ],
  },
  {
    n: "03",
    title: "Events & Experiences",
    items: [
      "Event Curation & Concept Development",
      "Guest Listing",
      "Vendor & Production Management",
      "Launches, Brand Dinners & Private Experiences",
    ],
  },
  {
    n: "04",
    title: "Branding & Brand Development",
    items: [
      "Brand Identity Development",
      "Visual Identity Systems",
      "Brand Messaging & Positioning",
      "Brand Collaterals & Communication Assets",
    ],
  },
];

function useSpotlight(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [ref]);
}

function useImageZoom(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--zoom-x", `${x}%`);
      el.style.setProperty("--zoom-y", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [ref]);
}

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  useSpotlight(heroRef);
  const [time, setTime] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "Media Coverage",
    "Celebrity & Influencer Placements",
    "Blogger Collaborations",
    "Social Media",
    "Event Curation",
    "Visual Branding & Storytelling",
  ];

  const featuredBrands = ["Nanna's Negroni", "Moni K", "Jakobi Chocolatier", "RARA"];
  
  const filteredProjects = selectedCategory
    ? workProjects.filter((project) =>
        project.tags.some((tag) =>
          tag.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      )
    : workProjects;

  const featured = workProjects.filter((p) =>
    featuredBrands.some((b) => p.title.includes(b))
  );
  
  const remainingProjects = filteredProjects.filter((p) => !featured.includes(p));

  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
        hour12: false,
      }).format(new Date());
      setTime(`${t} IST`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError(null);

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      setNewsletterError("Newsletter service not configured.");
      return;
    }

    if (!newsletterEmail) {
      setNewsletterError("Please enter your email.");
      return;
    }

    try {
      const url = new URL(scriptUrl);
      url.searchParams.append("type", "newsletter");
      url.searchParams.append("email", newsletterEmail);

      const response = await fetch(url.toString(), {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === "success") {
        setNewsletterSubmitted(true);
        setNewsletterEmail("");
        setTimeout(() => setNewsletterSubmitted(false), 3000);
      } else {
        throw new Error("Subscription failed");
      }
    } catch (err) {
      setNewsletterError("Failed to subscribe. Please try again.");
      console.error("Newsletter subscription error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="font-display text-2xl leading-none tracking-tight">
            Spellbound<span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#work" className="link-sweep">Work</a>
            <a href="#services" className="link-sweep">Services</a>
            <a href="#studio" className="link-sweep">Studio</a>
            <a href="#founder" className="link-sweep">Founder</a>
            <Link to="/contact" className="link-sweep">Contact</Link>
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

      <section
        id="top"
        ref={heroRef}
        className="grain spotlight relative min-h-[100svh] overflow-hidden bg-ink text-cream"
      >
        <img
          src={hero}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-screen"
        />
        <div className="starfield absolute inset-0 opacity-90" aria-hidden />
        <div
          aria-hidden
          className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.6 0.2 305 / 0.7), transparent 60%)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.16 240 / 0.7), transparent 60%)" }}
        />
        <span aria-hidden className="animate-float-slow absolute left-[8%] top-[26%] font-display text-3xl text-gold/80">✦</span>
        <span aria-hidden className="animate-twinkle absolute right-[12%] top-[20%] text-2xl text-cream/70">✧</span>
        <span aria-hidden className="animate-float-slow absolute right-[22%] bottom-[28%] font-display text-4xl italic text-spell/80" style={{ animationDelay: "2s" }}>✶</span>
        <span aria-hidden className="animate-twinkle absolute left-[18%] bottom-[18%] text-xl text-gold" style={{ animationDelay: "1.2s" }}>✦</span>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-6 pt-32 pb-10 md:px-10">
          <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.25em] text-cream/60">
            {/* <span>A communications studio · Pan-India</span>
            <span className="hidden md:inline">Boutique · By Invitation</span>
            <span className="tabular-nums">{time}</span> */}
          </div>

          <div className="pb-12">
            {/* <p className="mb-8 max-w-md font-display text-lg italic text-cream/70">
              — a communications studio
            </p> */}
            <h1 className="font-display text-[clamp(3.5rem,12vw,13rem)] leading-[0.88] tracking-tight">
              <span className="block">Where strategy</span>
              <span className="block">meets story</span>
              <span className="block italic text-gold">and a little bit<span className="animate-blink">.</span></span>
              <span className="block">of magic.</span>
            </h1>
            <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-16">
              <p className="col-span-2 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
At Spellbound Communications, we are the storytellers behind brands people remember.
We shape the way brands communicate with the world through PR, social media, branding, collaborations, experiences, communities, and every touchpoint that builds meaningful engagement.

              </p>
              <div className="flex items-end gap-3 md:justify-end">
                <a
                  href="#studio"
                  className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em]"
                >
                  <span className="inline-block h-px w-10 bg-cream transition-all group-hover:w-16" />
                  Scroll to enter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="border-y border-border/60 py-12">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="text-eyebrow text-muted-foreground mb-6">
            <span className="text-accent mr-2">◆</span> Brands in our care
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-10">
            A curated <em className="text-accent">roster.</em>
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {clients.map((c) => (
              <span
                key={c}
                className="font-display text-2xl md:text-3xl text-foreground/70 hover:text-foreground hover:italic hover:scale-110 transition-all cursor-default inline-block"
              >
                {c}
                <span className="text-accent">.</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="py-32 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-eyebrow text-accent">
                (01) The studio
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">
                We work as custodians, not vendors.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="font-display text-3xl leading-tight md:text-6xl">
                A limited roster, deliberately chosen  so every brand gets the focus, care and
                <span className="italic text-accent"> genuine ownership</span> it
                deserves.
              </p>
              <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  ["8+", "years in comms"],
                  ["Pan-India", "reach"],
                  ["Curated", "roster"],
                  ["Limited", "engagements"],
                ].map(([n, l]) => (
                  <div key={l} className="border-t border-border pt-4">
                    <div className="font-display text-4xl md:text-5xl">{n}</div>
                    <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="work" className="border-t border-border pt-24 md:pt-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <p className="text-eyebrow text-accent">
                (02) Selected work
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl">
                Made <span className="italic">to be</span> remembered.
              </h2>
            </div>
            <Link to="/work" className="hidden text-sm underline underline-offset-4 md:block whitespace-nowrap">
              View archive →
            </Link>
          </div>

          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm border transition-all duration-300 rounded-full ${
                selectedCategory === null
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border/60 hover:border-accent/60 text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-4 py-2 text-xs md:text-sm border transition-all duration-300 rounded-full ${
                  selectedCategory === category
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border/60 hover:border-accent/60 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
            {!selectedCategory && featured.length > 0 ? (
              <>
                {/* Featured brands section */}
                <div className="md:col-span-2">
                  <div className="mb-8">
                    <p className="text-eyebrow text-accent mb-4">Featured Work</p>
                    <h3 className="font-display text-3xl md:text-5xl">Brands we're particularly proud of</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
                    {featured.map((w, i) => (
                      <Link
                        key={w.slug}
                        to="/work/$projectSlug"
                        params={{ projectSlug: w.slug }}
                        className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
                      >
                        <div className="image-zoom overflow-hidden bg-muted ring-2 ring-accent/30 hover:ring-accent/60 transition-all duration-300 rounded-lg">
                          <img
                            src={w.img}
                            alt={w.title}
                            width={1200}
                            height={1400}
                            loading="lazy"
                            decoding="async"
                            className="aspect-[5/6] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="mt-6 flex items-baseline justify-between gap-6">
                          <h3 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors">{w.title}</h3>
                          <span className="font-mono text-xs text-muted-foreground">{w.year}</span>
                        </div>
                        <div className="mt-2 flex gap-3 text-sm text-muted-foreground">
                          {w.tags.map((t) => (
                            <span key={t}>— {t}</span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other projects */}
                <div className="md:col-span-2">
                  <div className="mb-8 flex items-end justify-between gap-6">
                    <h3 className="font-display text-3xl md:text-5xl">Our other works</h3>
                    <Link
                      to="/work"
                      className="px-4 py-2 text-sm border border-border/60 hover:border-accent/60 text-foreground hover:text-accent transition-all duration-300 rounded-full whitespace-nowrap"
                    >
                      View all works
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
                    {remainingProjects.slice(0, 4).map((w, i) => (
                      <Link
                        key={w.slug}
                        to="/work/$projectSlug"
                        params={{ projectSlug: w.slug }}
                        className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
                      >
                        <div className="image-zoom overflow-hidden bg-muted rounded-lg">
                          <img
                            src={w.img}
                            alt={w.title}
                            width={1200}
                            height={1400}
                            loading="lazy"
                            decoding="async"
                            className="aspect-[5/6] w-full object-cover"
                          />
                        </div>
                        <div className="mt-6 flex items-baseline justify-between gap-6">
                          <h3 className="font-display text-3xl md:text-4xl">{w.title}</h3>
                          <span className="font-mono text-xs text-muted-foreground">{w.year}</span>
                        </div>
                        <div className="mt-2 flex gap-3 text-sm text-muted-foreground">
                          {w.tags.map((t) => (
                            <span key={t}>— {t}</span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              filteredProjects.slice(0, 4).map((w, i) => {
                return (
                  <Link
                    key={w.slug}
                    to="/work/$projectSlug"
                    params={{ projectSlug: w.slug }}
                    className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
                  >
                    <div className="image-zoom overflow-hidden bg-muted">
                      <img
                        src={w.img}
                        alt={w.title}
                        width={1200}
                        height={1400}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[5/6] w-full object-cover"
                      />
                    </div>
                    <div className="mt-6 flex items-baseline justify-between gap-6">
                      <h3 className="font-display text-3xl md:text-4xl">{w.title}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{w.year}</span>
                    </div>
                    <div className="mt-2 flex gap-3 text-sm text-muted-foreground">
                      {w.tags.map((t) => (
                        <span key={t}>— {t}</span>
                      ))}
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>

      <section id="services" className="mt-40 border-t border-border bg-ink py-24 text-cream md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-eyebrow text-gold">
                (02) What we do
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl">
                We believe PR is more than press
                <br />
                And Hence,
              </h2>
            </div>

            <ul className="md:col-span-8">
              {services.map((s) => (
                <li
                  key={s.n}
                  className="group grid grid-cols-12 gap-6 border-t border-cream/15 py-10 transition-all duration-500 hover:border-gold/30 cursor-pointer"
                >
                  <div className="col-span-2 flex items-start justify-between">
                    <span className="font-mono text-xs text-cream/50 transition-colors duration-500 group-hover:text-gold">{s.n}</span>
                    <span className="text-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold">
                      ↗
                    </span>
                  </div>
                  <h3 className="col-span-10 font-display text-4xl transition-all duration-500 group-hover:text-gold md:col-span-4 md:text-5xl">
                    {s.title}
                  </h3>
                  <ul className="col-span-12 space-y-2 text-cream/70 transition-all duration-500 group-hover:text-cream md:col-span-6">
                    {s.items.map((item, idx) => (
                      <li 
                        key={item} 
                        className="flex items-start gap-2 transition-all duration-500 group-hover:translate-x-2"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span className="text-gold/60 transition-all duration-500 group-hover:text-gold group-hover:scale-125">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 relative overflow-hidden group">
        <span aria-hidden className="animate-magical-float absolute left-[10%] top-[20%] text-2xl text-accent/60 transition-all duration-500 group-hover:scale-150 group-hover:rotate-180 group-hover:text-accent" style={{ animationDelay: "0s" }}>✦</span>
        <span aria-hidden className="animate-magical-float absolute right-[15%] top-[15%] text-xl text-gold/70 transition-all duration-500 group-hover:scale-150 group-hover:-rotate-180 group-hover:text-gold" style={{ animationDelay: "0.5s" }}>✧</span>
        <span aria-hidden className="animate-magical-float absolute left-[20%] bottom-[25%] text-3xl text-spell/50 transition-all duration-500 group-hover:scale-175 group-hover:rotate-90 group-hover:text-spell" style={{ animationDelay: "1s" }}>✶</span>
        <span aria-hidden className="animate-magical-float absolute right-[25%] bottom-[20%] text-2xl text-accent/80 transition-all duration-500 group-hover:scale-150 group-hover:-rotate-90 group-hover:text-accent" style={{ animationDelay: "1.5s" }}>✦</span>
        <span aria-hidden className="animate-magical-float absolute left-[45%] top-[10%] text-lg text-gold/60 transition-all duration-500 group-hover:scale-125 group-hover:rotate-45 group-hover:text-gold" style={{ animationDelay: "2s" }}>✧</span>
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10 relative">
          <p className="font-display text-4xl leading-tight md:text-6xl animate-quote-glow transition-all duration-500 group-hover:scale-105 group-hover:text-accent/90">
            <span className="text-accent transition-colors duration-300 group-hover:text-gold">"</span>Because the most enduring brands are built not in noise, but in nuance, where clear thinking, human connection, and a little bit of magic come together naturally.
            <span className="text-accent transition-colors duration-300 group-hover:text-gold">"</span>
          </p>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 group-hover:text-foreground">
            Rachel Fargoes — Founder &amp; Brand Strategist
          </p>
        </div>
      </section>

      <section id="founder" className="bg-ink text-cream py-32 md:py-48 px-6 md:px-10 grain">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-gradient-to-br from-gold-soft/40 via-gold/30 to-ink border border-cream/10 relative overflow-hidden">
              <img 
                src={rachelImage} 
                alt="Rachel Fargoes - Founder & Brand Strategist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="text-eyebrow text-cream/60 mb-6">
              <span className="text-gold mr-2">◆</span> Founder & Brand Strategist
            </div>
            <p className="font-display text-3xl md:text-4xl leading-snug text-cream mb-8">
              A little strategic.
              <br />
              A little instinctive.
              <br />
              And always, a little <em className="text-gold">spellbinding</em>.
            </p>
            <p className="text-cream/75 leading-relaxed mb-4">
              I've always been drawn to the stories behind things: that make a place memorable, why some brands become part of culture, and what makes people pause, notice, and care. Over the last 8+ years, working across hospitality, food, fashion, luxury, travel, lifestyle, and culture, I've learnt that good communication is equal parts strategy, instinct, curiosity, and timing.
            </p>
            <p className="text-cream/75 leading-relaxed mb-4">
              Spellbound grew out of that belief. I wanted to build a studio that thinks beyond the obvious, cares about the details, and treats communication as something to be crafted rather than churned out.
            </p>
            <p className="text-cream/75 leading-relaxed mb-4">
              I envision Spellbound as a place where smart thinking can be playful, ideas can have personality, and brands can be built with both ambition and care.
            </p>
            <p className="text-cream/75 leading-relaxed">
              Because, ultimately, the work I want to put into the world should make people feel something and hopefully, leave a little bit of magic behind.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
        <div className="glow-orb -top-40 -right-40 w-[600px] h-[600px] bg-spell/20" style={{ animationDelay: "0s" }} />
        <div className="glow-orb -bottom-40 -left-40 w-[500px] h-[500px] bg-spell-soft/10" style={{ animationDelay: "2s" }} />
        <div className="mx-auto max-w-[1600px] relative">
          <div className="text-eyebrow text-muted-foreground mb-8">
            <span className="text-accent mr-2">◆</span> Let's begin
          </div>
          <h2 className="font-display text-6xl md:text-[10vw] leading-[0.9] tracking-[-0.03em]">
            Cast the <br /><em className="text-spell-soft">first</em> spell.
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <div className="text-eyebrow text-muted-foreground mb-3">Founder</div>
              <div className="font-display text-3xl">Rachel Fargoes</div>
              <a href="mailto:rachel@spellboundcomms.com" className="block mt-2 text-foreground/80 hover:text-accent transition underline underline-offset-4 decoration-1">
                rachel@spellboundcomms.com
              </a>
              <a href="mailto:hello@spellboundcomms.com" className="block mt-1 text-muted-foreground hover:text-accent transition">hello@spellboundcomms.com</a>
            </div>
            <div>
              <div className="text-eyebrow text-muted-foreground mb-3">Studio</div>
              <div className="font-display text-3xl">Spellbound Communications</div>
              <p className="mt-2 text-muted-foreground">
                Operating pan-India · A curated roster across hospitality, luxury, design & culture.
              </p>
            </div>
          </div>
          <div className="mt-16">
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

      <section className="bg-ink text-cream py-20 px-6 md:px-12 border-t border-cream/10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-eyebrow text-gold mb-4">
                <span className="mr-2">◆</span> Stay spellbound
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">
                Subscribe to our newsletter
              </h3>
              <p className="text-cream/70 max-w-md mb-8">
                Receive curated insights on brand storytelling, PR strategies, and cultural trends — delivered with intention.
              </p>
              {newsletterSubmitted ? (
                <div className="bg-gold/20 border border-gold/30 text-gold p-4 rounded">
                  Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
                  {newsletterError && (
                    <div className="text-red-400 text-sm">{newsletterError}</div>
                  )}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-cream/10 border border-cream/20 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gold text-ink px-6 py-3 font-display text-sm uppercase tracking-wider hover:bg-gold/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
            <div className="flex flex-col justify-center md:items-end">
              <div className="text-eyebrow text-gold mb-4">
                <span className="mr-2">◆</span> Connect with us
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-6">
                Follow the magic
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/spellbound_communications?srtk=MW03cGRjenlhc3N3MA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="mailto:hello@spellboundcomms.com"
                  className="group flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
