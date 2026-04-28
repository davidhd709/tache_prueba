export function Button({ href, children, variant = 'primary', className = '' }) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d0cdf]/30'

  const styles = {
    primary:
      'bg-[#1d0cdf] text-white shadow-[0_10px_30px_-12px_rgba(29,12,223,0.55)] hover:-translate-y-0.5 hover:bg-[#1609bb]',
    secondary:
      'border border-[#1d0cdf]/25 bg-white text-[#1d0cdf] hover:-translate-y-0.5 hover:bg-[#f4f2ff]',
  }

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  )
}
