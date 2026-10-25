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
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 44 44" fill="none">
        <path d="M4 29.5 16.5 13l7.7 9.1 4.6-5.2L40 30.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 34h32" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
    </span>
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
          <div className="hero-grid page-container">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Phoenix, Arizona · 24/7 response</p>
              <h1 id="hero-heading">When damage stops everything, <em>we get to work.</em></h1>
              <p className="hero-lede">Emergency repairs, restoration, and reconstruction for Arizona homes and commercial properties. A capable team beside you from the first call to the final detail.</p>
              <div className="hero-actions">
                <a className="button button-amber" href={phoneHref}><PhoneIcon /> Call our team <ArrowIcon diagonal /></a>
                <a className="text-link hero-text-link" href="#services">Explore our services <ArrowIcon /></a>
              </div>
              <div className="hero-footnote"><span className="pulse-dot" /> Available for emergency damage services, day or night.</div>
            </div>
            <div className="hero-visual" aria-label="Summit restoration truck and tools on site">
              <img src="/images/summit-crew-truck.jpg" alt="Summit Restoration truck with a circular saw ready for work" fetchPriority="high" />
              <div className="image-corner-label"><span>SUMMIT</span><span>ON THE GROUND</span></div>
            </div>
          </div>
          <div className="hero-side-label" aria-hidden="true">RESTORE WHAT MATTERS / 001</div>
        </section>

        <div className="credibility-strip">
          <div className="page-container credibility-inner">
            <span>Built for the unexpected.</span>
            <span>Residential <b>·</b> Commercial <b>·</b> Managed properties</span>
            <a href={phoneHref}>24-hour assistance <ArrowIcon diagonal /></a>
          </div>
        </div>

        <section id="services" className="section services-section" aria-labelledby="services-heading">
          <div className="page-container services-layout">
            <div className="section-intro" data-reveal>
              <p className="eyebrow dark-eyebrow">What we do</p>
              <h2 id="services-heading">The right team for what comes <em>next.</em></h2>
              <p>Property damage has no convenient schedule. Summit brings emergency response, restoration, and reconstruction together so the next step is clear.</p>
              <a className="text-link dark-link" href={phoneHref}>Talk through your project <ArrowIcon diagonal /></a>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <article className="service-row" key={service.number} data-reveal style={{ '--reveal-delay': `${index * 110}ms` } as React.CSSProperties}>
                  <span className="service-number">{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                  </div>
                  <ArrowIcon diagonal />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="approach-section" aria-labelledby="approach-heading">
          <div className="approach-photo" data-reveal>
            <img src="/images/summit-workshop.jpg" alt="Summit workshop with cabinetry, construction tools, and a large worktable" loading="lazy" />
            <span className="photo-index">01 / PREPARED TO REBUILD</span>
          </div>
          <div className="approach-copy" data-reveal>
            <div className="approach-content">
              <p className="eyebrow light-eyebrow">Our approach</p>
              <h2 id="approach-heading">A steady hand when it matters most.</h2>
              <p className="approach-lede">We help you navigate the work ahead, including the insurance claim process, while keeping the focus on returning your property to its pre-loss condition.</p>
              <div className="process-list">
                <div><span>01</span><p><strong>Respond</strong><small>Start with the urgent damage and the next practical step.</small></p></div>
                <div><span>02</span><p><strong>Coordinate</strong><small>Work through the repair scope and insurance claim process.</small></p></div>
                <div><span>03</span><p><strong>Restore</strong><small>Carry the project through restoration and reconstruction.</small></p></div>
              </div>
              <a className="text-link light-link" href={phoneHref}>Start the conversation <ArrowIcon diagonal /></a>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-heading">
          <div className="page-container about-grid">
            <div className="about-copy" data-reveal>
              <p className="eyebrow dark-eyebrow">People behind the work</p>
              <h2 id="about-heading">Local presence. <em>Personal commitment.</em></h2>
              <p>Summit is based in Phoenix and serves residential and commercial properties across Arizona. When recovery feels complicated, you deserve a team that can guide the work and pick up the phone.</p>
              <div className="about-detail">
                <span>OUR HOME BASE</span>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer">4831 S 35th Pl, Suite 1<br />Phoenix, AZ 85040 <ArrowIcon diagonal /></a>
              </div>
            </div>
            <figure className="about-image" data-reveal>
              <img src="/images/summit-community-team.jpg" alt="Summit team members in a company vehicle in Phoenix" loading="lazy" />
              <figcaption>THE PEOPLE WHO SHOW UP.</figcaption>
            </figure>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <div className="page-container contact-grid">
            <div data-reveal>
              <p className="eyebrow light-eyebrow">Ready when you need us</p>
              <h2 id="contact-heading">Let’s get your property moving <em>forward.</em></h2>
            </div>
            <div className="contact-action" data-reveal>
              <p>Tell us what happened. We’ll help you understand the next step.</p>
              <a className="button button-amber" href={phoneHref}><PhoneIcon /> (602) 595-5977 <ArrowIcon diagonal /></a>
              <small>24/7 emergency damage assistance</small>
            </div>
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
