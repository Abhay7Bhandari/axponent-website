import FadeSection from './FadeSection'

const ITEMS = [
  { title: 'Creative & Performance Optimization', desc: 'Continuous testing, optimization, and data-driven focused execution.',
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 4C11.2 4 4 11.2 4 20s7.2 16 16 16 16-7.2 16-16" stroke="#3B82F6" strokeWidth="1.5"/><path d="M20 10v10l6 6" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/><circle cx="32" cy="10" r="4" fill="#1E40AF" stroke="#3B82F6" strokeWidth="1"/><path d="M30 10l1.5 1.5L34 8" stroke="#93C5FD" strokeWidth="1.2"/></svg> },
  { title: 'Measurement & Attribution', desc: 'MMP integration, event tracking, and real-time performance intelligence.',
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="20" width="6" height="14" rx="1.5" fill="#1E3A8A"/><rect x="13" y="14" width="6" height="20" rx="1.5" fill="#1E40AF"/><rect x="22" y="8" width="6" height="26" rx="1.5" fill="#2563EB"/><rect x="31" y="4" width="5" height="30" rx="1.5" fill="#3B82F6"/><polyline points="4,22 10,16 19,18 28,10 36,6" stroke="#60A5FA" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg> },
  { title: 'Fraud Prevention & Quality Control', desc: 'Built-in fraud protection, traffic authentication, and compliance management.',
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 4L6 10v10c0 8.8 6 17 14 19 8-2 14-10.2 14-19V10L20 4z" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(30,64,175,0.2)"/><path d="M14 20l4 4 8-8" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Strategy & Campaign Planning', desc: 'Data-led global strategy, audience analysis, and KPI-driven growth strategy.',
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(30,64,175,0.2)"/><rect x="22" y="6" width="12" height="12" rx="2" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(30,64,175,0.2)"/><rect x="6" y="22" width="12" height="12" rx="2" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(30,64,175,0.2)"/><rect x="22" y="22" width="12" height="12" rx="2" stroke="#60A5FA" strokeWidth="1.5" fill="rgba(37,99,235,0.3)"/><path d="M28 25v6M25 28h6" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: 'Media Buying & User Acquisition', desc: 'Direct media buying across mobile web, OTT, CTV, DSP & SSP inventory.',
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="8" width="22" height="16" rx="2" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(30,64,175,0.2)"/><path d="M10 24v4M16 24v4M8 28h16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/><rect x="24" y="14" width="12" height="20" rx="2" stroke="#60A5FA" strokeWidth="1.5" fill="rgba(37,99,235,0.2)"/><circle cx="30" cy="30" r="1.5" fill="#60A5FA"/></svg> },
]

export default function HowWeDo() {
  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-14">How We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ITEMS.map((item, i) => (
              <div key={i} className={`how-card rounded-2xl p-6 flex flex-col gap-4 ${i===4?'sm:col-span-2 lg:col-span-1':''}`}>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{background:'linear-gradient(135deg,rgba(30,64,175,0.3),rgba(15,30,80,0.5))'}}>
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-base text-white">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}
