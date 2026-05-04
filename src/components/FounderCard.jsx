import { useLang } from '../context/LangContext'
import { founder } from '../data/resumeData'
import { publicUrl } from '../utils/publicUrl'

function t(val, lang) {
  if (!val) return ''
  if (typeof val === 'string') return val
  return val[lang] ?? val.en
}

export default function FounderCard() {
  const { lang } = useLang()

  return (
    <div className="founder-card">
      <div className="founder-card-top">
        <div>
          <p className="founder-eye">{t(founder.eyebrow, lang)}</p>
          <h3 className="founder-title">{t(founder.title, lang)}</h3>
          <p className="founder-desc">{t(founder.desc, lang)}</p>
        </div>
        <div className="founder-stats">
          {founder.stats.map((s, i) => (
            <div className="f-stat" key={i}>
              <div className="f-stat-n">{s.n}</div>
              <div className="f-stat-l">{t(s.l, lang)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="founder-brands-section">
        <p className="founder-brands-label">{t(founder.brandsLabel, lang)}</p>
        <div className="founder-brand-grid">
          {founder.brands.map((brand, i) => (
            <div
              className="brand-logo-wrap"
              key={i}
              style={brand.name === 'Othori' ? { background: 'rgba(0,0,0,0.6)' } : undefined}
            >
              {brand.src && (
                <img src={publicUrl(brand.src)} alt={brand.name} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
