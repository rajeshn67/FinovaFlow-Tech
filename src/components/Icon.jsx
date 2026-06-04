const paths = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  layout: (
    <>
      <rect width="16" height="12" x="4" y="6" rx="2" />
      <path d="M4 10h16" />
      <path d="M9 14h6" />
    </>
  ),
  cart: (
    <>
      <path d="M6 6h15l-2 8H8L6 3H3" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 18 9 5 9-5" />
    </>
  ),
  brain: (
    <>
      <path d="M9 3a4 4 0 0 0-4 4v2a4 4 0 0 0 0 8v1a3 3 0 0 0 6 0V7a4 4 0 0 0-2-4Z" />
      <path d="M15 3a4 4 0 0 1 4 4v2a4 4 0 0 1 0 8v1a3 3 0 0 1-6 0V7a4 4 0 0 1 2-4Z" />
    </>
  ),
  phone: (
    <>
      <rect width="10" height="18" x="7" y="3" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  cloud: (
    <path d="M17.5 19H8a5 5 0 1 1 1.2-9.85A6 6 0 0 1 20 12.5 3.5 3.5 0 0 1 17.5 19Z" />
  ),
  shield: (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 4-4 3 3 5-7" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.2-2 3-2 3s1.8-.5 3-2" />
      <path d="M9 15 4 20l5-1 1 1 5-5" />
      <path d="M15 9 9 15l-1-1 6-6c2-2 4.5-3.5 7-4-.5 2.5-2 5-4 7Z" />
      <path d="M14 6h4v4" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="7" r="3" />
      <circle cx="18" cy="7" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="m8 9 3 6" />
      <path d="m16 9-3 6" />
    </>
  ),
  speed: (
    <>
      <path d="M5 19a8 8 0 1 1 14 0" />
      <path d="m13 13 4-4" />
      <path d="M8 19h8" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  design: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 16l9 5 9-5" />
      <path d="M3 12l9 5 9-5" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </>
  ),
  check: (
    <path d="m5 12 4 4L19 6" />
  ),
  close: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  external: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  chevron: (
    <path d="m6 9 6 6 6-6" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 4" />
      <path d="m15.4 6.5-6.8 4" />
    </>
  ),
}

export function Icon({ name, size = 24, className = '', strokeWidth = 2 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  )
}
