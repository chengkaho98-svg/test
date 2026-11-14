export const site = {
  name: 'Aurelian',
  legalName: 'Aurelian Private Advisory LLP',
  tagline: 'Quiet counsel for consequential decisions.',
  email: 'partners@aurelian.example.com',
  phone: '+44 20 7946 0912',
  phoneHref: '+442079460912',
  offices: [
    { city: 'London', lines: ['22 St James’s Square', 'London SW1Y 4JH'] },
    { city: 'New York', lines: ['9 West 57th Street, 42nd Floor', 'New York, NY 10019'] },
  ],
  hours: 'Monday to Friday, 09:00–18:00 GMT',
};

export const navLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Approach', href: '#approach' },
  { label: 'Clients', href: '#clients' },
  { label: 'Questions', href: '#questions' },
];

export const services = [
  {
    id: '01',
    title: 'Wealth architecture',
    enquiry: 'Wealth architecture',
    description:
      'One coherent structure for assets held across entities, jurisdictions and generations — built to survive contact with real life.',
    points: ['Consolidated balance sheet', 'Risk and liquidity modelling', 'Banking and custodian review'],
  },
  {
    id: '02',
    title: 'Deal & transaction advisory',
    enquiry: 'Deal or liquidity event',
    description:
      'Independent counsel on the sale of a business, a recapitalisation, or a stake that took a decade to build.',
    points: ['Valuation and positioning', 'Buyer and lender diligence', 'Negotiation support'],
  },
  {
    id: '03',
    title: 'Succession & legacy',
    enquiry: 'Succession & legacy',
    description:
      'Transfer intent, not only assets. Plans your family can read, understand and follow long after the signing.',
    points: ['Family governance', 'Trust and estate design', 'Next-generation preparation'],
  },
  {
    id: '04',
    title: 'Private markets access',
    enquiry: 'Private markets',
    description:
      'Considered exposure to managers and opportunities that never reach the shelf — with the fees negotiated in your favour.',
    points: ['Manager sourcing', 'Co-investment review', 'Fee and terms negotiation'],
  },
  {
    id: '05',
    title: 'Tax & structuring',
    enquiry: 'Something else',
    description:
      'Structures kept aligned with substance, coordinated closely with the counsel and accountants you already trust.',
    points: ['Cross-border holding', 'Residence and mobility', 'Reporting coordination'],
  },
  {
    id: '06',
    title: 'Family office services',
    enquiry: 'Family office services',
    description:
      'An operating backbone for families who would rather not build one — reporting, philanthropy and oversight.',
    points: ['Consolidated reporting', 'Philanthropy administration', 'Vendor and staff oversight'],
  },
];

export const approach = [
  {
    id: '01',
    title: 'Diagnose',
    lead: 'Two weeks. No fee.',
    body: 'We map the whole picture — assets, entities, obligations and the decisions already in motion — and tell you what we would do in your position.',
  },
  {
    id: '02',
    title: 'Design',
    lead: 'A written plan, with trade-offs.',
    body: 'Options, costs and consequences in plain language. You approve the direction before a single document is drafted.',
  },
  {
    id: '03',
    title: 'Deliver',
    lead: 'Your partner stays on it.',
    body: 'Implementation runs across counsel, accountants and custodians. One partner owns the outcome and reports to you directly.',
  },
];

export const metrics = [
  { value: 4.8, prefix: '$', suffix: 'B', decimals: 1, label: 'Under advisory', note: 'Across 11 jurisdictions' },
  { value: 214, prefix: '', suffix: '', decimals: 0, label: 'Families served', note: 'Since 2009' },
  { value: 96, prefix: '', suffix: '%', decimals: 0, label: 'Client retention', note: 'Five-year rolling' },
  { value: 9, prefix: '', suffix: ' yrs', decimals: 0, label: 'Average relationship', note: 'Median tenure' },
];

export const faqs = [
  {
    q: 'Who do you typically work with?',
    a: 'Founders, executives and families with roughly $5m or more in investable assets or a business in transition. Most arrive at a decision that is already in motion — a sale, a liquidity event, a move between countries, or a generation handing over.',
  },
  {
    q: 'Do you hold or manage our assets?',
    a: 'No. We are independent and fee-only, and we take no custody. Your assets stay with your existing banks and custodians. That separation is deliberate: we are paid to advise, not to sell a product.',
  },
  {
    q: 'How are you compensated?',
    a: 'A fixed annual retainer, quoted after the first conversation, plus agreed project fees for transaction work. No commissions, no product revenue, no percentage of assets. If we recommend a manager, we disclose every relationship involved.',
  },
  {
    q: 'We already have advisers. Does that disqualify us?',
    a: 'Not at all. Roughly half our clients keep their existing accountant, lawyer and private bank. We coordinate with them, and we say so plainly when their advice is sound. A second opinion is often the whole engagement.',
  },
  {
    q: 'How quickly can a mandate begin?',
    a: 'A partner replies within one business day, and the initial conversation usually happens within a week. Diagnostic work can begin two to three weeks after an engagement letter is signed.',
  },
];

export const enquiryTypes = [
  'Wealth architecture',
  'Succession & legacy',
  'Deal or liquidity event',
  'Private markets',
  'Family office services',
  'Something else',
];

export const assetRanges = [
  'Under $5m',
  '$5m – $20m',
  '$20m – $50m',
  '$50m+',
  'Prefer not to say',
];
