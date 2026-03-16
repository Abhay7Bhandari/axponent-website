import FadeSection from './FadeSection'

const STATS = [
  { num: '65+',  label: 'performance\nmarketing specialists' },
  { num: '3',    label: 'global offices' },
  { num: '4',    label: 'Products' },
  { num: '120+', label: 'countries reached' },
  { num: '200+', label: 'brand partners' },
]

export default function Stats() {
  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl text-white mb-1">{s.num}</div>
                <div className="text-gray-500 text-xs leading-snug whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}
