import { useFadeIn } from '../hooks/useFadeIn'

export default function FadeSection({ children, className = '' }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className={`section-fade ${className}`}>
      {children}
    </div>
  )
}
