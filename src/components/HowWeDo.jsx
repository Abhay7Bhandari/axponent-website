import FadeSection from './FadeSection'
import creativeImg from '../assets/images/home/how-we-do/creative-performance.png'
import measureImg  from '../assets/images/home/how-we-do/measurement-attribution.png'
import fraudImg    from '../assets/images/home/how-we-do/fraud-prevention.png'
import strategyImg from '../assets/images/home/how-we-do/strategy-planning.png'
import mediaImg    from '../assets/images/home/how-we-do/media-buying.png'

const CARD_W = '389px'
const CARD_H = '315px'

const CARDS = [
  { img: creativeImg, alt: 'Creative & Performance Optimization'  },
  { img: measureImg,  alt: 'Measurement & Attribution'            },
  { img: fraudImg,    alt: 'Fraud Prevention & Quality Control'   },
  { img: strategyImg, alt: 'Strategy & Campaign Planning'         },
  { img: mediaImg,    alt: 'Media Buying & User Acquisition'      },
]

const cardStyle = {
  width: CARD_W,
  height: CARD_H,
  borderRadius: '12px',
  border: '1px solid transparent',
  backgroundImage:
    'linear-gradient(rgba(7,4,21,1),rgba(7,4,21,1)), linear-gradient(180deg,rgba(250,250,250,0.20) 0%,rgba(250,250,250,0.10) 100%)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
  overflow: 'hidden',
  flexShrink: 0,
  transition: 'box-shadow 0.35s',
}

const imgStyle = {
  width: CARD_W,
  height: CARD_H,
  display: 'block',
  objectFit: 'cover',
  borderRadius: '12px',
  transition: 'transform 0.7s ease',
}

function HowCard({ img, alt }) {
  return (
    <div
      className="group"
      style={cardStyle}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 0 0 1px rgba(59,130,246,0.45), 0 8px 48px rgba(0,60,200,0.3)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.5)'
      }}
    >
      <img
        src={img}
        alt={alt}
        style={imgStyle}
        className="group-hover:scale-[1.03]"
      />
    </div>
  )
}

export default function HowWeDo() {
  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-14">
            How We Do
          </h2>

          {/* Row 1 — Creative | Measurement | Fraud (3 cards) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
            <HowCard img={CARDS[0].img} alt={CARDS[0].alt} />
            <HowCard img={CARDS[1].img} alt={CARDS[1].alt} />
            <HowCard img={CARDS[2].img} alt={CARDS[2].alt} />
          </div>

          {/* Row 2 — Strategy | Media Buying (2 cards centered) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <HowCard img={CARDS[3].img} alt={CARDS[3].alt} />
            <HowCard img={CARDS[4].img} alt={CARDS[4].alt} />
          </div>
        </div>
      </section>
    </FadeSection>
  )
}
