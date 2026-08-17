import { Mail, Globe } from "lucide-react";
import { tools } from "@/data/tools";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Virtual International Infotech" className="h-10 w-auto rounded" />
            <span className="font-semibold text-foreground">Virtual International Infotech</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Virtual International Infotech builds and operates a family of free online utilities for
            documents, images and everyday calculations.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Popular tools</h3>
          <ul className="mt-4 space-y-2">
            {tools.slice(0, 6).map((t) => (
              <li key={t.domain}>
                <a
                  href={`https://${t.domain}`}
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {t.domain}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Globe className="size-4 text-accent" /> virtualinternationalinfotech.com
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-accent" />
              <a href="mailto:info@virtualinternationalinfotech.com" className="hover:text-accent">
                info@virtualinternationalinfotech.com
              </a>
            </li>
            <li>
              <a href="#tools" className="hover:text-accent">
                Our portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Virtual International Infotech — A Loyal Endeavour. All rights
        reserved.
      </div>
    </footer>
  );
}
