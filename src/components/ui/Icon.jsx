const iconMap = {
  web: (
    <path d="M4 6h16v12H4zM4 10h16M10 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  app: (
    <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3 13h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  automation: (
    <path d="M7 9h10M7 15h10M9 9l-2 3 2 3M15 9l2 3-2 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  ai: (
    <path d="M12 4v4m0 8v4m8-8h-4M8 12H4m13.5-5.5-2.8 2.8M9.3 14.7l-2.8 2.8m0-11 2.8 2.8m5.4 5.4 2.8 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  api: (
    <path d="M8 7h8M8 12h8M8 17h8M5 7h.01M5 12h.01M5 17h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  database: (
    <path d="M12 5c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zm8 3v8c0 1.7-3.6 3-8 3s-8-1.3-8-3V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  warning: (
    <path d="M12 5l8 14H4L12 5zm0 5v4m0 3h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  check: <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  mail: (
    <path d="M4 7h16v10H4zM4 8l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  phone: <path d="M8 5h4l1 3-2 2a10 10 0 0 0 4 4l2-2 3 1v4c-8 1-13-4-12-12z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  location: <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
}

export function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {iconMap[name]}
    </svg>
  )
}
