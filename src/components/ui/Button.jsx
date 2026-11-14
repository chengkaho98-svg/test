const base =
  'group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-medium leading-none transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-60';

const sizes = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-4 text-sm',
};

const variants = {
  primary: 'bg-gold text-ink hover:bg-cream hover:shadow-gold active:scale-[0.99]',
  outline: 'border border-cream/20 text-cream hover:border-gold/60 hover:text-gold active:scale-[0.99]',
  dark: 'bg-ink text-cream hover:bg-ink-soft hover:shadow-lift focus-visible:ring-offset-cream active:scale-[0.99]',
  quiet: 'text-cream/65 hover:text-gold',
};

/**
 * One button, four treatments. Renders an anchor when `href` is present,
 * otherwise a semantic <button>.
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...rest
}) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      type={href ? undefined : type}
      className={`${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
