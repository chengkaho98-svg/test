const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
};

export function ArrowUpRight({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDown({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  );
}

export function ArrowUp({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 20V4M6 10l6-6 6 6" />
    </svg>
  );
}

export function Check({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="m4 12 5.5 5.5L20 6.5" />
    </svg>
  );
}

export function Mail({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function Phone({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2.5 2.5 0 0 1-2.7 2.5C10 19.4 4.6 14 4 5.7A2.5 2.5 0 0 1 6.5 3Z" />
    </svg>
  );
}

export function MapPin({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Menu({ className = 'h-5 w-5', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  );
}

export function Close({ className = 'h-5 w-5', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Plus({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Clock({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 1.75" />
    </svg>
  );
}

export function Spinner({ className = 'h-4 w-4', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={`animate-spin ${className}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Disclaimer({ className = 'h-3.5 w-3.5', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v.5M12 11v5" />
    </svg>
  );
}

/** Brand mark: an open triangle with a gold horizon line. */
export function BrandMark({ className = 'h-8 w-8' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 4 28 27H4Z" stroke="#C9A84C" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M10.5 19.5h11" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
