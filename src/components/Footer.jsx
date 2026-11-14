import { navLinks, services, site } from '../data/site';
import { ArrowUp, ArrowUpRight, BrandMark } from './icons';
import Button from './ui/Button';
import Container from './ui/Container';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink">
      <Container>
        <div className="grid gap-8 py-16 lg:grid-cols-12 lg:items-end lg:py-20">
          <div className="lg:col-span-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-gold/85">
              Next step
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-light leading-[1.04] tracking-[-0.035em] text-cream">
              Begin with a conversation.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Button href="#contact" size="lg" className="w-full sm:w-auto">
              Book a private consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
            <p className="mt-3 text-[11px] text-cream/55">
              Or write to{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-cream/60 underline-offset-4 transition-colors hover:text-gold hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="grid gap-10 border-t border-white/[0.07] py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            >
              <BrandMark className="h-8 w-8" />
              <span className="flex flex-col">
                <span className="font-display text-[15px] font-medium uppercase leading-none tracking-[0.26em] text-cream">
                  Aurelian
                </span>
                <span className="mt-1.5 text-[9px] font-medium uppercase leading-none tracking-[0.28em] text-cream/55">
                  Private Advisory
                </span>
              </span>
              <span className="sr-only">— back to top</span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              Independent, fee-only and deliberately small. Counsel for the decisions
              that shape what comes next.
            </p>
          </div>

          <nav aria-label="Capabilities" className="lg:col-span-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/55">
              Capabilities
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#capabilities"
                    className="text-xs text-cream/55 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Firm" className="lg:col-span-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/55">
              Firm
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-cream/55 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-xs text-cream/55 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/55">
              Offices
            </p>
            <ul className="mt-4 space-y-4">
              {site.offices.map((office) => (
                <li key={office.city}>
                  <p className="text-xs text-cream/60">{office.city}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-cream/55">
                    {office.lines[0]}
                    <br />
                    {office.lines[1]}
                  </p>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="text-[11px] text-cream/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/[0.07] py-8 text-[10px] leading-relaxed text-cream/55 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {site.legalName}. Registered in England &amp; Wales. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span>Privacy notice available on request</span>
            <a
              href={`mailto:${site.email}?subject=Privacy%20notice`}
              className="transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Request a copy
            </a>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 text-cream/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            >
              Back to top
              <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <p className="max-w-3xl pb-10 text-[10px] leading-relaxed text-cream/50">
          Aurelian does not provide legal, tax or accounting advice, and does not hold
          client assets. Figures shown are illustrative of mandate types and are
          anonymised. Past outcomes are not indicative of future results.
        </p>
      </Container>
    </footer>
  );
}
