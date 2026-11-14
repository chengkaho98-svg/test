import { ArrowUpRight } from './icons';
import Button from './ui/Button';
import Container from './ui/Container';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

const mandates = [
  {
    sector: 'Founder, enterprise software',
    mandate: 'Majority stake sale to a strategic buyer',
    figure: '$140m',
  },
  {
    sector: 'Second-generation family',
    mandate: 'Four holding structures consolidated',
    figure: '4 jurisdictions',
  },
  {
    sector: 'Listed-company executive',
    mandate: 'Cross-border residence and equity plan',
    figure: '2 countries',
  },
];

export default function Clients() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative scroll-mt-24 overflow-hidden bg-cream py-24 text-ink sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full border border-ink/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/40"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="dark">04 — Clients</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="clients-heading"
                className="mt-6 max-w-xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-light leading-[1.16] tracking-[-0.03em] text-ink"
              >
                “They were the first advisers to tell us what{' '}
                <span className="text-ink/60">not</span> to do.”
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/60">
                That single conversation saved us more than any recommendation
                since. Ten years on, the same partner still answers the phone.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <figure className="mt-9">
                <figcaption className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white/50 font-display text-[11px] tracking-wide text-ink/70"
                  >
                    RM
                  </span>
                  <span className="text-sm leading-snug text-ink/70">
                    <span className="font-medium text-ink">R. M.</span> — Founder &amp;
                    chair, second-generation family business
                    <span className="mt-1 block text-[11px] text-ink/60">
                      Client since 2017 · Name withheld at the family’s request
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-ink/60">
                Selected mandates
              </p>
              <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                {mandates.map((item) => (
                  <li key={item.sector} className="group py-5">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-ink/60">
                          {item.sector}
                        </p>
                        <p className="mt-1.5 text-sm leading-snug text-ink/75 transition-colors duration-300 group-hover:text-ink">
                          {item.mandate}
                        </p>
                      </div>
                      <p className="shrink-0 font-display text-base font-normal tracking-tight text-ink">
                        {item.figure}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-xs text-[10px] leading-relaxed text-ink/60">
                Figures rounded and anonymised at clients’ request. Past outcomes are
                not indicative of future results.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-16 flex flex-col gap-7 border-t border-ink/10 pt-10 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-light tracking-[-0.02em] text-ink sm:text-2xl">
                A first conversation costs nothing but an hour.
              </p>
              <p className="mt-2 text-sm text-ink/60">
                No obligation, no pitch. If we are not the right firm, we will say so.
              </p>
            </div>
            <Button href="#contact" variant="dark" size="lg" className="shrink-0">
              Book a private consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
