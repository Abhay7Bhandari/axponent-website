import { useState, useEffect } from 'react'

const NAV_LINKS = ['Home', 'Advertisers', 'Publishers', 'Our Products', 'Web', 'Careers']

export default function Navbar({ activePage, setActivePage }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (link) => {
    setActivePage(link)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(4,8,21,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('Home')}
              className="font-display font-bold text-xl tracking-wider focus:outline-none"
            >
              <span style={{ color: '#00A8FF' }}>ΛX</span>PONENT
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className="nav-link text-sm font-medium focus:outline-none"
                  style={{
                    color: activePage === link ? '#fff' : '#9CA3AF',
                    borderBottom: activePage === link ? '2px solid #00A8FF' : '2px solid transparent',
                    paddingBottom: '2px',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {link}
                </button>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <button className="hidden md:block btn-submit px-5 py-2 rounded-md text-sm font-semibold text-white">
                Enquire Now
              </button>
              <button className="md:hidden text-white p-2" onClick={() => setOpen(true)} aria-label="Open menu">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu-overlay">
          <button className="absolute top-5 right-5 text-white" onClick={() => setOpen(false)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-white text-2xl font-display font-semibold hover:text-blue-400 transition-colors focus:outline-none"
            >
              {link}
            </button>
          ))}
          <button className="btn-submit mt-4 px-8 py-3 rounded-lg text-base font-semibold text-white">
            Enquire Now
          </button>
        </div>
      )}
    </>
  )
}
