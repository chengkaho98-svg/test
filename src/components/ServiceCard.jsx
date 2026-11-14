import { ArrowUpRight } from './icons';
import Button from './ui/Button';

export default function ServiceCard({ service, onDiscuss }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.035] hover:shadow-card sm:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-display text-[11px] font-medium tracking-[0.22em] text-gold/80">
          {service.id}
        </span>
        <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-gold opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>

      <h3 className="mt-6 font-display text-xl font-normal tracking-[-0.015em] text-cream">
        {service.title}
      </h3>
      <p className="mt-3 text-[13.5px] leading-relaxed text-cream/55">
        {service.description}
      </p>

      <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-xs text-cream/55">
            <span aria-hidden="true" className="mt-[7px] h-px w-3 shrink-0 bg-gold/50" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Button
          href="#contact"
          variant="quiet"
          size="sm"
          onClick={() => onDiscuss(service.enquiry)}
          className="!px-0 !py-1 text-xs tracking-wide"
        >
          Discuss this mandate
          <span className="sr-only"> — {service.title}</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Button>
      </div>
    </article>
  );
}
