import { useEffect, useRef, useState } from 'react';
import { assetRanges, enquiryTypes, site } from '../data/site';
import {
  ArrowUpRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  Spinner,
} from './icons';
import Button from './ui/Button';
import Container from './ui/Container';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  assets: '',
  message: '',
  consent: false,
  company: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please tell us your name.';
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (values.phone.trim() && values.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please check this number.';
  }
  if (values.message.trim().length < 12) {
    errors.message = 'A sentence or two helps us prepare properly.';
  }
  if (!values.consent) {
    errors.consent = 'Please confirm we may reply to your enquiry.';
  }

  return errors;
}

const fieldBase =
  'block w-full rounded-xl border bg-ink/60 px-4 py-3.5 font-sans text-sm text-cream placeholder:text-cream/55 transition-colors duration-200 focus:outline-none focus:ring-1';

function fieldClass(hasError) {
  return `${fieldBase} ${
    hasError
      ? 'border-[#E7A0A0]/70 focus:border-[#E7A0A0] focus:ring-[#E7A0A0]/30'
      : 'border-white/[0.12] hover:border-white/20 focus:border-gold/60 focus:ring-gold/30'
  }`;
}

function Field({ id, label, error, required, hint, className = '', children }) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 flex items-baseline justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/60"
      >
        <span>
          {label}
          {required && (
            <>
              <span aria-hidden="true" className="ml-1 text-gold/85">
                *
              </span>
              <span className="sr-only"> (required)</span>
            </>
          )}
        </span>
        {hint && (
          <span className="normal-case tracking-normal text-[10px] text-cream/55">
            {hint}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-[#E7A0A0]">
          {error}
        </p>
      )}
    </div>
  );
}

const steps = [
  'A partner reads your note — no assistant screening.',
  'We reply within one business day to arrange a call.',
  'The first conversation is complimentary and confidential.',
];

export default function Contact({ enquiry, onEnquiryChange }) {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const successRef = useRef(null);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const update = (key) => (event) => {
    const value = key === 'consent' ? event.target.checked : event.target.value;
    setForm((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) =>
      previous[key] ? { ...previous, [key]: undefined } : previous,
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'submitting') return;

    // Honeypot: quietly accept and discard bot submissions.
    if (form.company) {
      setStatus('success');
      return;
    }

    const nextErrors = validate(form);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      const target = document.getElementById(`contact-${firstError}`);
      target?.focus();
      return;
    }

    setStatus('submitting');

    // Demo submission. Replace with your CRM or form endpoint, e.g.
    // await fetch('/api/enquiries', { method: 'POST', body: JSON.stringify(payload) })
    await new Promise((resolve) => setTimeout(resolve, 900));

    setForm(INITIAL);
    onEnquiryChange('');
    setStatus('success');
  };

  const resetForm = () => {
    setForm(INITIAL);
    setErrors({});
    onEnquiryChange('');
    setStatus('idle');
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-ink-soft/40 py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(201,168,76,0.08),transparent_55%)]"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
          <div className="contents lg:block lg:col-span-5">
            <Reveal className="order-1">
              <Eyebrow>06 — Contact</Eyebrow>
              <h2
                id="contact-heading"
                className="mt-6 font-display text-[clamp(2.1rem,4.2vw,3.3rem)] font-light leading-[1.05] tracking-[-0.035em] text-cream"
              >
                Tell us what’s changing.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/55">
                A sale, a succession, a move abroad — or simply a second opinion you
                would rather not ask your existing advisers for. Write a few lines and
                we will reply personally.
              </p>
            </Reveal>

            <div className="order-3">
              <Reveal delay={120}>
                <ul className="mt-9 space-y-5 border-t border-white/[0.08] pt-8">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-center gap-3 text-sm text-cream/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  >
                    <Mail className="h-4 w-4 text-gold/85" />
                    {site.email}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="group flex items-center gap-3 text-sm text-cream/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  >
                    <Phone className="h-4 w-4 text-gold/85" />
                    {site.phone}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
                <li className="flex items-center gap-3 text-xs text-cream/60">
                  <Clock className="h-4 w-4 text-gold/50" />
                  {site.hours}
                </li>
              </ul>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {site.offices.map((office) => (
                  <div key={office.city}>
                    <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-gold/85">
                      <MapPin className="h-3.5 w-3.5" />
                      {office.city}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-cream/60">
                      {office.lines[0]}
                      <br />
                      {office.lines[1]}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 border-t border-white/[0.08] pt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/55">
                  What happens next
                </p>
                <ol className="mt-4 space-y-2.5">
                  {steps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-xs leading-relaxed text-cream/60">
                      <span className="font-display text-[10px] tracking-[0.16em] text-gold/80">
                        0{index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
            </div>
          </div>

          <div className="order-2 lg:order-none lg:col-span-7">
            <Reveal delay={100}>
              <div className="rounded-3xl border border-white/[0.1] bg-white/[0.02] p-6 shadow-card sm:p-8 lg:p-10">
                {status === 'success' ? (
                  <div
                    ref={successRef}
                    role="status"
                    aria-live="polite"
                    tabIndex={-1}
                    className="flex min-h-[26rem] flex-col items-start justify-center focus:outline-none"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                      <Check className="h-5 w-5" />
                    </span>
                    <h3 className="mt-8 font-display text-2xl font-light tracking-[-0.02em] text-cream sm:text-3xl">
                      Thank you — your note is with a partner.
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/55">
                      We reply within one business day. If it is time-sensitive, call{' '}
                      <a
                        href={`tel:${site.phoneHref}`}
                        className="text-gold underline-offset-4 transition-colors hover:text-cream hover:underline"
                      >
                        {site.phone}
                      </a>{' '}
                      and ask for the partner on duty.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetForm}
                      className="mt-8"
                    >
                      Send another enquiry
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-6">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold/85">
                          Private enquiry
                        </p>
                        <p className="mt-1.5 text-xs text-cream/60">
                          Replies within one business day
                        </p>
                      </div>
                      <span className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-cream/55">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold/80" />
                        Confidential
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="mt-7">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field
                          id="contact-name"
                          label="Full name"
                          required
                          error={errors.name}
                        >
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Alex Whitfield"
                            required
                            value={form.name}
                            onChange={update('name')}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? 'contact-name-error' : undefined}
                            className={fieldClass(Boolean(errors.name))}
                          />
                        </Field>

                        <Field
                          id="contact-email"
                          label="Email"
                          required
                          error={errors.email}
                        >
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            inputMode="email"
                            placeholder="alex@company.com"
                            required
                            value={form.email}
                            onChange={update('email')}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'contact-email-error' : undefined}
                            className={fieldClass(Boolean(errors.email))}
                          />
                        </Field>

                        <Field
                          id="contact-phone"
                          label="Phone"
                          hint="Optional"
                          error={errors.phone}
                        >
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+44 20 7946 0000"
                            value={form.phone}
                            onChange={update('phone')}
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                            className={fieldClass(Boolean(errors.phone))}
                          />
                        </Field>

                        <Field
                          id="contact-enquiry"
                          label="Nature of enquiry"
                        >
                          <div className="relative">
                            <select
                              id="contact-enquiry"
                              name="enquiry"
                              value={enquiry}
                              onChange={(event) => onEnquiryChange(event.target.value)}
                              className={`${fieldClass(false)} appearance-none pr-10 [&>option]:bg-ink`}
                            >
                              <option value="">Select if you wish</option>
                              {enquiryTypes.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                              fill="none"
                              className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-cream/60"
                            >
                              <path
                                d="m5 7.5 5 5 5-5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </Field>

                        <Field
                          id="contact-assets"
                          label="Investable assets"
                          hint="Helps us prepare"
                          className="sm:col-span-2"
                        >
                          <div className="relative">
                            <select
                              id="contact-assets"
                              name="assets"
                              value={form.assets}
                              onChange={update('assets')}
                              className={`${fieldClass(false)} appearance-none pr-10 [&>option]:bg-ink`}
                            >
                              <option value="">Prefer not to say</option>
                              {assetRanges.map((range) => (
                                <option key={range} value={range}>
                                  {range}
                                </option>
                              ))}
                            </select>
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                              fill="none"
                              className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-cream/60"
                            >
                              <path
                                d="m5 7.5 5 5 5-5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </Field>

                        <Field
                          id="contact-message"
                          label="What is changing?"
                          required
                          error={errors.message}
                          className="sm:col-span-2"
                        >
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={4}
                            placeholder="A few lines on the decision in front of you, and what a good outcome would look like."
                            required
                            value={form.message}
                            onChange={update('message')}
                            aria-invalid={Boolean(errors.message)}
                            aria-describedby={
                              errors.message ? 'contact-message-error' : undefined
                            }
                            className={`${fieldClass(Boolean(errors.message))} resize-none`}
                          />
                        </Field>

                        {/* Honeypot — hidden from people, not from bots. */}
                        <div
                          aria-hidden="true"
                          className="absolute -left-[9999px] h-px w-px overflow-hidden"
                        >
                          <label htmlFor="contact-company">Company</label>
                          <input
                            id="contact-company"
                            name="company"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={form.company}
                            onChange={update('company')}
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-cream/60">
                            <input
                              id="contact-consent"
                              name="consent"
                              type="checkbox"
                              checked={form.consent}
                              onChange={update('consent')}
                              required
                              aria-invalid={Boolean(errors.consent)}
                              aria-describedby={
                                errors.consent ? 'contact-consent-error' : undefined
                              }
                              className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-ink accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                            />
                            <span>
                              I agree to be contacted about this enquiry. My details
                              are not shared, sold or added to a mailing list.
                            </span>
                          </label>
                          {errors.consent && (
                            <p
                              id="contact-consent-error"
                              role="alert"
                              className="mt-2 text-xs text-[#E7A0A0]"
                            >
                              {errors.consent}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-[15rem] text-[10px] leading-relaxed text-cream/55">
                          We treat every enquiry as privileged. No obligation follows
                          from sending it.
                        </p>
                        <Button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full shrink-0 sm:w-auto"
                        >
                          {status === 'submitting' ? (
                            <>
                              Sending
                              <Spinner className="h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Send enquiry
                              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
