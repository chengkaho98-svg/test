export default function Eyebrow({ children, tone = 'light', className = '' }) {
  const isDark = tone === 'dark';

  return (
    <p
      className={`flex items-center gap-4 font-sans text-[11px] font-medium uppercase tracking-eyebrow ${
        isDark ? 'text-ink/50' : 'text-gold'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-8 shrink-0 ${isDark ? 'bg-ink/25' : 'bg-gold/60'}`}
      />
      <span>{children}</span>
    </p>
  );
}
