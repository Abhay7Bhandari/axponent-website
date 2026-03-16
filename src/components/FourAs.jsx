import { useState } from 'react'
import FadeSection from './FadeSection'

const TABS = ['Analysis','Activation','Acquisition','Amplification']
const CONTENT = {
  Analysis: 'We conduct deep data analysis to understand market trends, audience behavior, and campaign performance — turning raw data into actionable intelligence.',
  Activation: 'We activate campaigns with precision, leveraging the right channels, creatives, and audiences to drive maximum engagement and conversions.',
  Acquisition: 'Our user acquisition strategies are designed to bring high-value, loyal customers to your brand through performance-driven media buying.',
  Amplification: "We amplify your brand's reach by scaling winning campaigns, optimizing budgets, and expanding to new markets and audience segments.",
}

export default function FourAs() {
  const [active, setActive] = useState('Analysis')
  return (
    <FadeSection>
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div style={{width:'600px',height:'600px',background:'radial-gradient(circle, rgba(0,60,180,0.08) 0%, transparent 70%)',borderRadius:'50%'}}/>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-16">
            Axponent <span className="text-brand-blue">4A'S</span>
          </h2>
          <div className="flex flex-wrap justify-center border-b border-white/10 mb-10">
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                className={`four-a-tab px-5 py-3 text-sm font-medium ${active===tab?'active':'text-gray-500 hover:text-gray-300'}`}>
                {tab}
              </button>
            ))}
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{CONTENT[active]}</p>
        </div>
      </section>
    </FadeSection>
  )
}
