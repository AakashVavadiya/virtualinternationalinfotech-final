import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { categories, tools } from "@/data/tools";

export function ToolsSection() {
  const [active, setActive] = useState<string>("All");
  const visible = active === "All" ? tools : tools.filter((t) => t.category === active);

  return (
    <section id="tools" className="scroll-mt-24 border-t border-border bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Portfolio</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
          13 live web tools, used by people every day
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Every product below is built, hosted and maintained in-house by our team — fast, free to
          use and designed to work on any device.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors " +
                (active === c
                  ? "border-transparent bg-brand-gradient text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tool) => (
            <a
              key={tool.domain}
              href={`https://${tool.domain}`}
              target="_blank"
              rel="noopener"
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-accent-foreground">
                {tool.category}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{tool.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {tool.domain}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
