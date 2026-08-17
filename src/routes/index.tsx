import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Gauge, ShieldCheck, Sparkles, Wrench, Globe2, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ToolsSection } from "@/components/tools-section";
import { tools } from "@/data/tools";

const title = "Virtual International Infotech — Web Tools Company Portfolio";
const description =
  "Virtual International Infotech builds and operates 14+ free online web tools for PDF, image, QR, barcode and calculator needs. Explore our product portfolio.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Virtual International Infotech",
          url: "https://virtualinternationalinfotech.com",
          slogan: "A Loyal Endeavour",
          description,
          owns: tools.map((t) => ({
            "@type": "WebApplication",
            name: t.name,
            url: `https://${t.domain}`,
            applicationCategory: "UtilitiesApplication",
          })),
        }),
      },
    ],
  }),
});

const stats = [
  { value: `${tools.length}+`, label: "Live web tools" },
  { value: "100%", label: "Free to use" },
  { value: "24/7", label: "Uptime focus" },
  { value: "Global", label: "User base" },
];

const services = [
  {
    icon: Wrench,
    title: "Web tool development",
    text: "We design and build browser-based utilities that solve one job extremely well, from PDF processing to smart calculators.",
  },
  {
    icon: Gauge,
    title: "Performance engineering",
    text: "Every product is tuned for fast loads, low bounce and clean Core Web Vitals across mobile and desktop.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first processing",
    text: "Files are handled securely and never kept longer than needed, so people can use our tools with confidence.",
  },
  {
    icon: Globe2,
    title: "Domain & product portfolio",
    text: "We acquire, launch and grow niche domains into dependable products serving India and worldwide audiences.",
  },
  {
    icon: Sparkles,
    title: "SEO & content growth",
    text: "Search-led growth strategy keeps our tools discoverable for the queries that actually convert.",
  },
  {
    icon: Users,
    title: "Partnerships & advertising",
    text: "Brands can reach a high-intent audience across our network of utility websites.",
  },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 grid-backdrop opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              A Loyal Endeavour
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-foreground md:text-6xl">
              We build <span className="text-brand-gradient">web tools</span> that millions of
              everyday tasks run on
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Virtual International Infotech is a product studio behind a growing network of free
              online utilities for PDFs, images, QR codes, barcodes and calculations.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#tools"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Explore our tools <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Get in touch
              </a>
            </div>

            <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <dt className="text-2xl font-bold text-foreground">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <ToolsSection />

        {/* About */}
        <section id="about" className="scroll-mt-24 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About us</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                A small team with a long-term commitment to useful software
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Virtual International Infotech started with one simple idea: the tools people need
                most should be free, fast and free of friction. Today we run a portfolio of fourteen
                web products used by students, freelancers, accountants and businesses worldwide.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our tagline — <em>A Loyal Endeavour</em> — is how we work: we keep our products
                running, keep improving them and keep them honest.
              </p>
            </div>
            <ul className="grid gap-4">
              {[
                "In-house design, development and hosting for every product",
                "Mobile-first interfaces that work without sign-up",
                "Continuous maintenance and security updates",
                "Transparent, ad-supported free access",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card"
                >
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 border-t border-border bg-secondary/40 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Product capabilities
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-4xl px-5">
            <div className="overflow-hidden rounded-3xl bg-brand-gradient p-10 text-center shadow-lift md:p-14">
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Let's build something useful together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Partnership, advertising or a custom web tool for your business — we'd love to hear
                from you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:info@virtualinternationalinfotech.com"
                  className="rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  info@virtualinternationalinfotech.com
                </a>
                <a
                  href="#tools"
                  className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  View portfolio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
