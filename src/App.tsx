import { useEffect, useState } from 'react'

const phoneHref = 'tel:+16025955977'
const mapsHref = 'https://www.google.com/maps/search/?api=1&query=4831+S+35th+Pl+Suite+1+Phoenix+AZ+85040'

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 15.5 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M6.5 2.75H4.3c-.76 0-1.34.65-1.26 1.4a15.1 15.1 0 0 0 12.8 12.8c.75.08 1.4-.5 1.4-1.26v-2.2c0-.6-.42-1.12-1-1.25l-2.38-.53c-.48-.1-.98.07-1.29.45l-1.03 1.25a12.2 12.2 0 0 1-4.15-4.15l1.25-1.03c.38-.31.55-.81.45-1.29l-.53-2.38c-.13-.58-.65-1-1.25-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function SummitMark() {
  return (
    <img className="brand-mark" src="/images/summit-logo.png" alt="" width="43" height="43" />
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    function onResize() {
      if (window.innerWidth >= 900) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner page-container">
        <a className="brand" href="#top" aria-label="Summit Restoration and Construction, back to top" onClick={closeMenu}>
          <SummitMark />
          <span className="brand-type">
            <strong>SUMMIT</strong>
            <span>RESTORATION & CONSTRUCTION</span>
          </span>
        </a>

        <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#about" onClick={closeMenu}>About Summit</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-mobile-call" href={phoneHref} onClick={closeMenu}><PhoneIcon /> Call (602) 595-5977</a>
        </nav>

        <a className="header-call" href={phoneHref}>
          <PhoneIcon />
          <span>(602) 595-5977</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

const services = [
  {
    number: '01',
    title: 'Residential restoration',
    copy: 'From the first urgent repair through the finishing work, we help homeowners move toward a property that feels like home again.',
  },
  {
    number: '02',
    title: 'Commercial recovery',
    copy: 'Restoration and reconstruction for commercial buildings, with a practical focus on protecting the property and moving work forward.',
  },
  {
    number: '03',
    title: 'Property management',
    copy: 'A responsive restoration partner for managed properties, condos, and industrial complexes across Arizona.',
  },
]

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })

    document.documentElement.classList.add('motion-ready')
    elements.forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-heading">
          <div className="hero-photo">
            <img src="/images/summit-crew-truck.jpg" alt="Summit Restoration truck and circular saw prepared for work" fetchPriority="high" />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="page-container hero-content">
            <p className="eyebrow hero-eyebrow"><span className="signal-dot" /> Phoenix, Arizona / Emergency restoration</p>
            <h1 id="hero-heading"><span>DAMAGE</span><span>HAPPENS.</span><span className="hero-accent">WE SHOW UP.</span></h1>
            <div className="hero-bottom">
              <p>24/7 emergency repairs, restoration, and reconstruction for Arizona homes and commercial properties.</p>
              <a className="hero-call" href={phoneHref}><span><PhoneIcon /> Call Summit now</span><ArrowIcon diagonal /></a>
            </div>
          </div>
          <div className="hero-edition" aria-hidden="true">SUMMIT / IN THE FIELD / PHOENIX AZ</div>
        </section>

        <div className="moving-line" aria-hidden="true">
          <div className="moving-line-track">
            <span>RESPONSE <b>✳</b> RESTORATION <b>✳</b> RECONSTRUCTION <b>✳</b> RESPONSE <b>✳</b> RESTORATION <b>✳</b> RECONSTRUCTION <b>✳</b></span>
            <span>RESPONSE <b>✳</b> RESTORATION <b>✳</b> RECONSTRUCTION <b>✳</b> RESPONSE <b>✳</b> RESTORATION <b>✳</b> RECONSTRUCTION <b>✳</b></span>
          </div>
        </div>

        <section className="manifesto-section" aria-labelledby="manifesto-heading">
          <div className="page-container manifesto-grid">
            <p className="eyebrow section-label" data-reveal>01 / The moment after</p>
            <div>
              <h2 id="manifesto-heading" data-reveal>The damage is sudden.<br /><em>The response should be certain.</em></h2>
              <div className="manifesto-foot" data-reveal>
                <span className="crosshair" aria-hidden="true">✳</span>
                <p>From the first urgent repair to the final rebuild, Summit helps you find a clear way forward. One capable team for the work ahead.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section" aria-labelledby="services-heading">
          <div className="page-container">
            <div className="services-top" data-reveal>
              <p className="eyebrow section-label">02 / Where we step in</p>
              <h2 id="services-heading">BUILT TO RESPOND<span>.</span></h2>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <article className="service-row" key={service.number} data-reveal style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}>
                  <span className="service-number">{service.number} / 03</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <ArrowIcon diagonal />
                </article>
              ))}
            </div>
            <a className="services-link" href={phoneHref}>Tell us what your property needs <ArrowIcon diagonal /></a>
          </div>
        </section>

        <section id="approach" className="approach-section" aria-labelledby="approach-heading">
          <div className="workshop-photo image-reveal" data-reveal>
            <img src="/images/summit-workshop.jpg" alt="Summit workshop with cabinetry, construction tools, and a large worktable" loading="lazy" />
            <div className="workshop-photo-overlay" aria-hidden="true" />
            <div className="workshop-caption page-container">
              <span>SUMMIT / WORKSHOP</span>
              <span>READY FOR WHAT COMES NEXT.</span>
            </div>
          </div>
          <div className="page-container approach-content">
            <div className="approach-intro" data-reveal>
              <p className="eyebrow section-label">03 / The work after the call</p>
              <h2 id="approach-heading">A PLAN FOR THE<br /><em>WAY BACK.</em></h2>
              <p>We help guide you through the insurance claim process and can work directly with your carrier to determine necessary repairs, with your property's recovery in focus.</p>
            </div>
            <div className="process-grid">
              <div data-reveal><span>01 — START HERE</span><h3>Respond.</h3><p>Address urgent damage and establish the next practical step.</p></div>
              <div data-reveal><span>02 — FIND CLARITY</span><h3>Coordinate.</h3><p>Work through the repair scope and insurance claim process.</p></div>
              <div data-reveal><span>03 — MOVE FORWARD</span><h3>Restore.</h3><p>Carry the property through restoration and reconstruction.</p></div>
              </div>
          </div>
        </section>

        <section id="about" className="local-section" aria-labelledby="about-heading">
          <div className="local-photo image-reveal" data-reveal>
            <img src="/images/summit-community-team.jpg" alt="Summit team members in a company vehicle in Phoenix" loading="lazy" />
            <div className="local-photo-shade" aria-hidden="true" />
            <div className="page-container local-photo-text">
              <p className="eyebrow">04 / People behind the work</p>
              <h2 id="about-heading">PHOENIX<br />IS HOME<span>.</span></h2>
            </div>
          </div>
          <div className="page-container local-foot" data-reveal>
            <p>Based in Phoenix. On the ground for Arizona homeowners, businesses, and property managers when the unexpected happens.</p>
            <a href={mapsHref} target="_blank" rel="noopener noreferrer"><span>FIND OUR OFFICE</span>4831 S 35th Pl, Suite 1<br />Phoenix, AZ 85040 <ArrowIcon diagonal /></a>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <div className="page-container contact-content" data-reveal>
            <div className="contact-topline"><p className="eyebrow">05 / Ready when you need us</p><span>24 / 7 EMERGENCY ASSISTANCE</span></div>
            <h2 id="contact-heading">LET'S GET<br /><em>TO WORK.</em></h2>
            <div className="contact-bottom"><p>Tell us what happened. We’ll help you understand the next step.</p><a href={phoneHref} aria-label="Call Summit at (602) 595-5977"><span>(602) 595-5977</span><ArrowIcon diagonal /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container footer-main">
          <a className="brand footer-brand" href="#top" aria-label="Summit Restoration and Construction, back to top">
            <SummitMark />
            <span className="brand-type"><strong>SUMMIT</strong><span>RESTORATION & CONSTRUCTION</span></span>
          </a>
          <div className="footer-links"><a href="#services">Services</a><a href="#approach">Our approach</a><a href="#about">About</a><a href="#contact">Contact</a></div>
          <a className="footer-phone" href={phoneHref}>(602) 595-5977</a>
        </div>
        <div className="page-container footer-bottom"><span>© {new Date().getFullYear()} Summit Restoration and Construction LLC</span><span>Phoenix, Arizona</span></div>
      </footer>
      <a className="mobile-call-bar" href={phoneHref} aria-label="Call Summit Restoration at (602) 595-5977"><PhoneIcon /> Call Summit now <ArrowIcon diagonal /></a>
    </>
  )
}

export default App
