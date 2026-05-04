import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { hero } from '../data/resumeData'
import { publicUrl } from '../utils/publicUrl'

function t(val, lang) {
  if (!val) return ''
  if (typeof val === 'string') return val
  return val[lang] ?? val.en
}

const icons = {
  email: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="14" height="10" rx="1.5"/>
      <path d="M1 4l7 5 7-5"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M3.5 2A1.5 1.5 0 102 3.5 1.5 1.5 0 003.5 2zM2 6h3v8H2zm5 0h2.9v1.1h.04A3.2 3.2 0 0113 6c3 0 3.5 2 3.5 4.5V14h-3v-3c0-1.1 0-2.5-1.5-2.5S10.5 9.8 10.5 11v3H8z"/>
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 1.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-1.5 2.5c-.2 0-.5.1-.7.4-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.2 1.6 2.5 3.9 3.4.5.2 1 .3 1.3.2.4 0 1.1-.4 1.3-.9.2-.4.2-.8.1-.9l-.6-.3-1.3-.6c-.2-.1-.3 0-.4.1l-.5.6c-.1.1-.2.1-.3.1-.2-.1-.7-.3-1.3-.8-.5-.5-.8-1-.9-1.2 0-.1 0-.2.1-.3l.3-.4c.1-.1.1-.2.2-.3v-.3l-.6-1.4c-.1-.3-.3-.4-.5-.4z"/>
    </svg>
  ),
  location: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="7" r="3"/>
      <path d="M8 1a6 6 0 016 6c0 4-6 9-6 9S2 11 2 7a6 6 0 016-6z"/>
    </svg>
  ),
}

export default function Hero() {
  const { lang } = useLang()
  const [photoError, setPhotoError] = useState(false)

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">{t(hero.eyebrow, lang)}</p>
        <h1 className="hero-name">
          Pedro<br /><em>Thomé</em>
        </h1>
        <p className="hero-tagline">{t(hero.tagline, lang)}</p>
        <div className="hero-pills">
          {hero.pills.map((pill, i) => (
            <span
              key={i}
              className={`hero-pill${pill.accent ? ' accent' : ''}`}
            >
              {t(pill, lang)}
            </span>
          ))}
        </div>
        <div className="hero-contacts">
          {hero.contacts.map((c, i) => (
            <a
              key={i}
              className="hero-contact"
              href={c.href}
              target={c.target}
              rel={c.target ? 'noopener noreferrer' : undefined}
            >
              {icons[c.icon]}
              {t(c.label, lang)}
            </a>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-wrap">
          {photoError ? (
            <div className="photo-initials">PT</div>
          ) : (
            <img
              src={publicUrl('photo.jpg')}
              alt="Pedro Thomé"
              onError={() => setPhotoError(true)}
            />
          )}
        </div>
        <div className="hero-stats">
          {hero.stats.map((s, i) => (
            <div className="h-stat" key={i}>
              <div className="h-stat-n">{s.n}</div>
              <div className="h-stat-l">{t(s.l, lang)}</div>
            </div>
          ))}
        </div>
        <div className="location-row">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="7" r="3"/>
            <path d="M8 1a6 6 0 016 6c0 4-6 9-6 9S2 11 2 7a6 6 0 016-6z"/>
          </svg>
          {lang === 'en' ? 'Goiânia, Brazil · Open to remote' : 'Goiânia, Brasil · Aberto a remoto'}
        </div>
        <a
          className="cv-download-btn"
          href={publicUrl('Pedro-Thome-Resume.pdf')}
          download="Pedro-Thome-Resume.pdf"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 1v9M4 7l4 4 4-4"/>
            <path d="M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
          </svg>
          {lang === 'en' ? 'Download CV' : 'Baixar CV'}
        </a>
      </div>
    </section>
  )
}
