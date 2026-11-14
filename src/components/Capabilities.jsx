import { services } from '../data/site';
import { ArrowUpRight } from './icons';
import Container from './ui/Container';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ServiceCard';

export default function Capabilities({ onSelectService }) {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionHeading
                  id="capabilities-heading"
                  eyebrow="01 — Capabilities"
                  title={
                    <>
                      Six disciplines.
                      <br />
                      One point of view.
                    </>
                  }
                  description="Most questions arrive tangled together — a sale, a trust, a move abroad. We hold the whole picture in one place instead of handing you between departments."
                />
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10 max-w-sm border-t border-white/[0.08] pt-6">
                  <p className="text-sm text-cream/55">
                    Not sure where your question fits?
                  </p>
                  <a
                    href="#contact"
                    className="group mt-2 inline-flex items-start gap-2 text-sm text-cream/75 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  >
                    Describe it — we will point you to the right partner.
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <Reveal key={service.id} delay={(index % 2) * 90}>
                  <ServiceCard service={service} onDiscuss={onSelectService} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
