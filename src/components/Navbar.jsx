import { useEffect, useRef, useState } from 'react';
import { navLinks, site } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { ArrowUpRight, BrandMark, Close, Menu } from './icons';
import Button from './ui/Button';
import Container from './ui/Container';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const scrolled = useScrolled(16);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Never leave the page scroll-locked if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };

    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-white/[0.07] bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
        >
          <BrandMark className="h-8 w-8 transition-transform duration-500 ease-out group-hover:-translate-y-0.5" />
          <span className="flex flex-col">
            <span className="font-display text-[15px] font-medium uppercase leading-none tracking-[0.26em] text-cream">
              Aurelian
            </span>
            <span className="mt-1.5 hidden text-[9px] font-medium uppercase leading-none tracking-[0.28em] text-cream/55 sm:block">
              Private Advisory
            </span>
          </span>
          <span className="sr-only">— back to top</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative inline-block py-2 font-sans text-[13px] tracking-[0.01em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink ${
                      isActive ? 'text-cream' : 'text-cream/55 hover:text-cream'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="font-sans text-xs text-cream/60 transition-colors hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            {site.phone}
          </a>
          <Button href="#contact" size="sm" className="pl-5 pr-4">
            Book a private consultation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </div>

        <button
          type="button"
          ref={toggleRef}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 grid h-11 w-11 place-items-center rounded-full border border-white/10 text-cream transition-colors hover:border-gold/40 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink lg:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-white/[0.07] bg-ink/[0.98] backdrop-blur-xl lg:hidden"
        >
          <Container className="animate-fade-in py-8 motion-reduce:animate-none">
            <nav aria-label="Mobile">
              <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                    >
                      <span className="font-display text-xl font-light tracking-tight text-cream transition-colors group-hover:text-gold">
                        {link.label}
                      </span>
                      <span className="flex items-center gap-3 text-[10px] tracking-[0.24em] text-cream/55">
                        {String(index + 1).padStart(2, '0')}
                        <ArrowUpRight className="h-4 w-4 text-gold/70" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-7 flex flex-col gap-4">
              <Button
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full"
              >
                Book a private consultation
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <div className="flex flex-col gap-1 text-sm text-cream/60">
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="text-xs tracking-wide transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
