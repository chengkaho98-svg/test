import { approach } from '../data/site';
import { Disclaimer } from './icons';
import Container from './ui/Container';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="relative scroll-mt-24 border-y border-white/[0.06] bg-ink-soft/50 py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(201,168,76,0.06),transparent_55%)]"
      />

      <Container className="relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                id="approach-heading"
                eyebrow="02 — Approach"
                title="Deliberate by design."
                description="No boilerplate, no product to place. A clear sequence with a named partner accountable at every stage."
              />
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={120}>
              <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-ink/40 p-5">
                <Disclaimer className="mt-0.5 h-4 w-4 shrink-0 text-gold/85" />
                <p className="text-xs leading-relaxed text-cream/60">
                  Fees are agreed in writing before work begins. No success fees, no
                  product revenue, no percentage of assets.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20">
          {approach.map((step, index) => (
            <Reveal as="li" key={step.id} delay={index * 110} className="group">
              <div className="border-t border-white/[0.12] pt-7 transition-colors duration-500 group-hover:border-gold/40">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[11px] font-medium tracking-[0.24em] text-gold/85">
                    {step.id}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10 transition-colors duration-500 group-hover:bg-gold/60" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-light tracking-[-0.02em] text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-gold/80">{step.lead}</p>
                <p className="mt-4 text-sm leading-relaxed text-cream/55">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={140}>
          <p className="mt-14 max-w-2xl text-xs leading-relaxed text-cream/50">
            Aurelian does not provide legal, tax or accounting advice. We coordinate
            with your professional advisers and, where useful, introduce specialists
            we have worked with for years.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
