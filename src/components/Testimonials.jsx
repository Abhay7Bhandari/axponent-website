import FadeSection from './FadeSection'

const REVIEWS = [
  { name: 'Laura T', role: 'Growth Marketer', text: "There's always a great idea, but Flynn needs it tense it up and running in 4 months. No tutorials. Just straight to doing." },
  { name: 'Pheella Levy', role: '', text: "I've been working with Axponent for more than two years on a consistent basis, and their team has proven to be responsive, transparent and highly professional. Our collaboration has always been smooth and reliable." },
  { name: 'Tiphut Feifer', role: '', text: 'They are very diligent and business-minded partners who understand our strategic marketing specialty and dedication to the work.' },
  { name: 'Chloe S', role: 'Head of Dev', text: "We found a reliable ally in Axponent, whose expertise in user acquisition has been instrumental in refining our strategies and delivering better scale to campaigns." },
  { name: 'Ethan C', role: 'Product Strategist', text: "Axponent has become an integral part of our team. Their blend of strategic insight and expertise effectively bridges our target audience and converts them into loyal customers." },
]
const COLORS = ['hsl(220,60%,35%)','hsl(280,60%,35%)','hsl(160,60%,30%)','hsl(340,60%,35%)','hsl(40,60%,35%)']

export default function Testimonials() {
  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {REVIEWS.map((r, i) => (
              <div key={i} className="testimonial-card rounded-2xl p-5">
                <p className="text-gray-400 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{background:COLORS[i]}}>
                    {r.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{r.name}</div>
                    {r.role && <div className="text-gray-500 text-xs">{r.role}</div>}
                  </div>
                  <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_,j)=><span key={j} className="text-yellow-400 text-xs">★</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}
