import { useState } from 'react';
import { faqs } from '../data/site';
import { ArrowUpRight } from './icons';
import Container from './ui/Container';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="questions"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionHeading
                  id="faq-heading"
                  eyebrow="05 — Questions"
                  title="The things worth asking."
                  description="If yours is not here, ask it directly. A partner reads every enquiry — not an assistant, not a form robot."
                />
              </Reveal>
              <Reveal delay={120}>
                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                >
                  Ask us directly
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <dl className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={faq.q}>
                      <dt>
                        <button
                          type="button"
                          id={`faq-button-${index}`}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${index}`}
                          onClick={() => setOpenIndex(isOpen ? -1 : index)}
                          className="group flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                        >
                          <span
                            className={`font-display text-[15px] font-normal tracking-[-0.01em] transition-colors duration-300 sm:text-base ${
                              isOpen ? 'text-cream' : 'text-cream/70 group-hover:text-cream'
                            }`}
                          >
                            {faq.q}
                          </span>
                          <span
                            aria-hidden="true"
                            className={`relative mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                              isOpen
                                ? 'border-gold/50 text-gold'
                                : 'border-white/15 text-cream/55 group-hover:border-gold/40 group-hover:text-gold'
                            }`}
                          >
                            <span className="absolute h-px w-3 bg-current" />
                            <span
                              className={`absolute h-3 w-px bg-current transition-transform duration-300 ${
                                isOpen ? 'scale-y-0' : 'scale-y-100'
                              }`}
                            />
                          </span>
                        </button>
                      </dt>
                      <dd
                        id={`faq-panel-${index}`}
                        aria-hidden={!isOpen}
                        className={`grid transition-all duration-500 ease-out motion-reduce:transition-none ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-cream/55">
                            {faq.a}
                          </p>
                        </div>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
