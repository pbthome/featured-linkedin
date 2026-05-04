import { useState } from 'react'
import { useLang } from '../context/LangContext'

function t(val, lang) {
  if (!val) return ''
  if (typeof val === 'string') return val
  return val[lang] ?? val.en
}

function CompanyLogo({ domain, fallback }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className="tl-logo-fb">{fallback}</div>
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt=""
      onError={() => setFailed(true)}
      style={{ width: 36, height: 36, objectFit: 'contain', display: 'block' }}
    />
  )
}

export default function TimelineEntry({ entry, defaultOpen }) {
  const { lang } = useLang()
  const [open, setOpen] = useState(defaultOpen ?? false)

  const rightItems = entry.rightItems ?? (entry.rightDesc ? [{ desc: entry.rightDesc }] : [])

  return (
    <div className={`tl-entry${entry.current ? ' current' : ''}`}>
      <div className="tl-dot" />
      <div className={`tl-card${open ? ' open' : ''}`}>
        <div className="tl-header" onClick={() => setOpen(o => !o)}>
          <div className="tl-logo">
            <CompanyLogo domain={entry.domain} fallback={entry.fallback} />
          </div>
          <div>
            <div className="tl-company">{entry.company}</div>
            <div className="tl-role">{t(entry.role, lang)}</div>
          </div>
          <div className="tl-meta">
            <div className="tl-date">{t(entry.date, lang)}</div>
            <div className="tl-city">{t(entry.city, lang)}</div>
            <span className="tl-arrow">▼</span>
          </div>
        </div>

        <div className={`tl-body${open ? ' open' : ''}`}>
          <div className="tl-body-inner">
            <div className="pedro-says">
              <div className="pedro-says-quote">{t(entry.quote, lang)}</div>
            </div>
            <div className="body-grid">
              <div>
                <p className="col-label">{t(entry.leftLabel, lang)}</p>
                {entry.projects.map((proj, i) => (
                  <div className="proj" key={i}>
                    {proj.name && <div className="proj-name">{t(proj.name, lang)}</div>}
                    <div className="proj-desc">{t(proj.desc, lang)}</div>
                    {proj.badge && (
                      <span className={`badge ${proj.badge.type}`}>
                        {t(proj.badge.text, lang)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <p className="col-label">{t(entry.rightLabel, lang)}</p>
                {rightItems.map((item, i) => (
                  <div className="proj" key={i}>
                    <div className="proj-desc">{t(item.desc, lang)}</div>
                  </div>
                ))}
                {entry.tags && entry.tags.length > 0 && (
                  <div className="tags" style={{ marginTop: 12 }}>
                    {entry.tags.map(tag => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
