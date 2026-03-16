const LOGOS = [
  { name: 'prime video', icon: '★' },
  { name: 'swiggy', icon: '🛵' },
  { name: 'CAMOKAT', icon: '◆' },
  { name: 'unacademy', icon: '▲' },
  { name: 'BBVA', icon: '■' },
  { name: 'Daibap', icon: '●' },
]
const TICKER = [...LOGOS, ...LOGOS]

export default function LogoTicker() {
  return (
    <div className="py-10 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee gap-16 w-max">
        {TICKER.map((logo, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-400 text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
            <span className="text-lg">{logo.icon}</span>
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  )
}
