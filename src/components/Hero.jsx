import { site } from '../data/site';
import { ArrowDown, ArrowUpRight, Check } from './icons';
import Button from './ui/Button';
import Container from './ui/Container';
import Reveal from './ui/Reveal';

const brief = [
  { label: 'Mandate', value: 'Multi-generational wealth' },
  { label: 'Horizon', value: '25+ years' },
  { label: 'Structure', value: 'Independent, fee-only' },
  { label: 'Lead partner', value: 'E. Marchetti' },
];

const sectors = [
  'Venture-backed founders',
  'Family businesses',
  'Listed-company executives',
  'Single-family offices',
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44"
    >
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_-10%,rgba(201,168,76,0.16),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(245,240,230,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,240,230,0.035)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:radial-gradient(ellipse_75%_65%_at_55%_0%,#000_10%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[11px] font-medium uppercase tracking-eyebrow text-gold">
                <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
                Private advisory
                <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-gold/40 sm:block" />
                <span className="text-cream/60">London · New York</span>
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 id="hero-heading" className="mt-7 max-w-[13ch] font-display text-[clamp(2.65rem,6.2vw,4.9rem)] font-light leading-[0.98] tracking-[-0.045em] text-cream">
                Clarity for the decisions that{' '}
                <span className="text-gold">compound.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 max-w-xl font-sans text-base leading-relaxed text-cream/60 sm:text-[17px]">
                Aurelian advises founders, executives and families on wealth,
                succession and the moments that change everything. Fewer clients.
                Deeper work. No conflicts.
              </p>
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button href="#contact" size="lg">
                  Book a private consultation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
                <Button href="#approach" variant="outline" size="lg">
                  See how we work
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-y-0.5" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-cream/60">
                {['Complimentary first conversation', 'Fee-only, never commission', 'Absolute discretion'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold/80" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>

          {/* Client brief — a quiet visual anchor instead of a stock photo */}
          <div className="lg:col-span-5">
            <Reveal delay={300} className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_50%_45%,rgba(201,168,76,0.10),transparent_65%)]"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 520 520"
                className="pointer-events-none absolute -top-28 left-1/2 h-[500px] w-[500px] -translate-x-1/2 animate-spin-slow text-gold/15 motion-reduce:animate-none"
                fill="none"
              >
                <circle cx="260" cy="260" r="232" stroke="currentColor" strokeDasharray="2 12" />
                <circle cx="260" cy="260" r="182" stroke="currentColor" opacity="0.7" />
                <path d="M260 28a232 232 0 0 1 164 68" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              <div className="relative rounded-[1.75rem] border border-white/10 bg-ink-soft/80 p-7 shadow-card backdrop-blur-md sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-cream/55">
                    Client brief
                  </span>
                  <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cream/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold motion-safe:animate-pulse" />
                    Confidential
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold/85">
                    Assets under advisory
                  </p>
                  <p className="mt-2 font-display text-[3.25rem] font-light leading-none tracking-[-0.04em] text-cream">
                    $4.8<span className="text-gold">B</span>
                  </p>
                </div>

                <dl className="mt-8 divide-y divide-white/[0.07] border-y border-white/[0.07]">
                  {brief.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                    >
                      <dt className="text-[10px] uppercase tracking-[0.18em] text-cream/55">
                        {row.label}
                      </dt>
                      <dd className="text-right text-xs text-cream/70">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 text-[11px] leading-relaxed text-cream/55">
                  Average client relationship: nine years. Names withheld by default.
                </p>
              </div>

              <div className="absolute -bottom-4 left-4 rounded-full border border-gold/25 bg-ink/95 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold/80 shadow-card backdrop-blur sm:-left-4">
                Est. 2009
              </div>
            </Reveal>
          </div>
        </div>

        {/* Proof strip */}
        <div className="mt-20 border-t border-white/[0.07] pt-7 sm:mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-cream/55 sm:text-[11px]">
              <span className="mr-1 text-cream/65">Advising</span>
              {sectors.map((sector, index) => (
                <span key={sector} className="flex items-center gap-3">
                  {index > 0 && (
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold/40" />
                  )}
                  {sector}
                </span>
              ))}
            </div>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex shrink-0 items-center gap-2 self-start whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-cream/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink sm:self-auto sm:text-[11px]"
            >
              Enquire in confidence
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
