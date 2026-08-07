import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Spellbound Communications" },
      {
        name: "description",
        content: "Get in touch with Spellbound. Start a conversation about your brand's story.",
      },
    ],
  }),
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
          <a href="/" className="font-display text-2xl leading-none tracking-tight">
            Spellbound<span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="/#work" className="link-sweep">Work</a>
            <a href="/#services" className="link-sweep">Services</a>
            <a href="/#studio" className="link-sweep">Studio</a>
            <a href="/#founder" className="link-sweep">Founder</a>
            <a href="/contact" className="link-sweep text-accent">Contact</a>
          </nav>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/80 px-4 py-2 text-sm transition hover:bg-foreground hover:text-background"
          >
            Start a project
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-eyebrow text-muted-foreground mb-8">
            <span className="text-accent mr-2">◆</span> Get in touch
          </div>
          <h1 className="font-display text-6xl md:text-[10vw] leading-[0.9] tracking-[-0.03em] mb-16">
            Cast the <br /><em className="text-spell-soft">first</em> spell.
          </h1>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="space-y-12">
                <div>
                  <div className="text-eyebrow text-muted-foreground mb-4">Founder</div>
                  <div className="font-display text-3xl mb-2">Rachel Fargoes</div>
                  <a href="mailto:rachel@spellboundcomms.com" className="flex items-center gap-3 text-foreground/80 hover:text-accent transition">
                    <Mail className="w-4 h-4" />
                    rachel@spellboundcomms.com
                  </a>
                  <a href="tel:+919561932285" className="flex items-center gap-3 mt-2 text-muted-foreground hover:text-accent transition">
                    <Phone className="w-4 h-4" />
                    +91 95619 32285
                  </a>
                </div>

                <div>
                  <div className="text-eyebrow text-muted-foreground mb-4">Studio</div>
                  <div className="font-display text-3xl mb-2">Spellbound Communications</div>
                  <p className="text-muted-foreground mb-4">
                    Operating pan-India · A curated roster across hospitality, luxury, design & culture.
                  </p>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Mumbai, India</span>
                  </div>
                </div>

                <div>
                  <div className="text-eyebrow text-muted-foreground mb-4">Follow us</div>
                  <div className="flex gap-6">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div className="bg-ink text-cream p-12 text-center">
                  <div className="text-6xl mb-4">✦</div>
                  <h3 className="font-display text-3xl mb-4">Message sent!</h3>
                  <p className="text-cream/70">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full border border-foreground px-8 py-5 hover:bg-foreground hover:text-background transition-colors group inline-flex items-center justify-center gap-4"
                  >
                    <span className="text-eyebrow">Send message</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </form>
              )}
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
