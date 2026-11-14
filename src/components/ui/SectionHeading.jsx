import Eyebrow from './Eyebrow';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
  id,
}) {
  const isDark = tone === 'dark';

  return (
    <div
      className={`${
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      } ${className}`}
    >
      <Eyebrow
        tone={isDark ? 'dark' : 'light'}
        className={align === 'center' ? 'justify-center' : ''}
      >
        {eyebrow}
      </Eyebrow>

      <h2
        id={id}
        className={`mt-6 font-display text-[clamp(2rem,4.4vw,3.35rem)] font-light leading-[1.06] tracking-[-0.035em] ${
          isDark ? 'text-ink' : 'text-cream'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-[15px] leading-relaxed sm:text-base ${
            isDark ? 'text-ink/60' : 'text-cream/55'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
