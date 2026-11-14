import { metrics } from '../data/site';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import Container from './ui/Container';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

function Metric({ metric, active, index }) {
  const display = useCountUp(metric.value, active, {
    duration: 1700 + index * 120,
    decimals: metric.decimals,
  });

  return (
    <div className="flex flex-col">
      <p className="font-display text-[clamp(2.6rem,5vw,3.6rem)] font-light leading-none tracking-[-0.04em] text-cream">
        {metric.prefix}
        <span className="tabular-nums">{display}</span>
        <span className="text-gold">{metric.suffix}</span>
      </p>
      <p className="mt-4 text-sm text-cream/70">{metric.label}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-cream/55">
        {metric.note}
      </p>
    </div>
  );
}

export default function Metrics() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section aria-labelledby="metrics-heading" className="relative py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      <Container>
        <div ref={ref} className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-3">
            <Reveal>
              <Eyebrow>03 — The firm</Eyebrow>
              <h2
                id="metrics-heading"
                className="mt-6 font-display text-2xl font-light leading-tight tracking-[-0.02em] text-cream sm:text-3xl"
              >
                Measured in decades,
                <br />
                not quarters.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 lg:col-span-9 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 80}>
                <Metric metric={metric} active={inView} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
