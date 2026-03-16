import FadeSection from './FadeSection'

const CASES = [
  { label: 'Bybit – Crypto Trading Platform', gradient: 'linear-gradient(135deg,#1E3A5F,#0F172A)' },
  { label: 'Sber Megamarket',                 gradient: 'linear-gradient(135deg,#2D1B69,#0F0F2D)' },
  { label: 'AngelOne',                         gradient: 'linear-gradient(135deg,#14532D,#052E16)' },
  { label: 'Prime Video',                      gradient: 'linear-gradient(135deg,#1C1917,#0C0A09)' },
  { label: 'Mashreq Bank',                     gradient: 'linear-gradient(135deg,#1E3A2F,#0F2320)' },
  { label: 'Jeeny',                            gradient: 'linear-gradient(135deg,#1E1B4B,#0F0D2E)' },
]
const ICONS = [
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect x="8" y="14" width="40" height="28" rx="4" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1.2"/><path d="M16 28h24M20 22l8 6-8 6" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="18" fill="#7C3AED" opacity="0.3"/><path d="M20 28h16M28 20v16" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/><circle cx="28" cy="28" r="4" fill="#7C3AED"/></svg>,
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M28 10l5 10h11l-9 8 3 11-10-7-10 7 3-11-9-8h11z" fill="#F59E0B" opacity="0.8"/></svg>,
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect x="10" y="18" width="36" height="22" rx="3" fill="#1E40AF" opacity="0.5" stroke="#3B82F6" strokeWidth="1"/><path d="M18 29h20M22 24l6 5-6 5" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect x="8" y="12" width="40" height="32" rx="4" fill="#065F46" opacity="0.5" stroke="#10B981" strokeWidth="1.2"/><path d="M16 28h24M24 21v14" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="16" stroke="#A78BFA" strokeWidth="1.5" fill="rgba(139,92,246,0.15)"/><path d="M22 28h12M28 22v12" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round"/></svg>,
]

export default function CaseStudy() {
  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-14">Case Study</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CASES.map((c, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{background:c.gradient, aspectRatio:'16/9', border:'1px solid rgba(30,50,120,0.3)'}}>
                <div className="case-img-wrap absolute inset-0 flex items-center justify-center">{ICONS[i]}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium">{c.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}
