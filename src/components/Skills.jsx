import { useLang } from '../context/LangContext'
import { skillGroups, languages } from '../data/resumeData'

function t(val, lang) {
  if (!val) return ''
  if (typeof val === 'string') return val
  return val[lang] ?? val.en
}

export default function Skills() {
  const { lang } = useLang()

  return (
    <section className="section" id="skills">
      <div className="sec-header">
        <h2 className="sec-title">
          {lang === 'en' ? 'Skills & Tools' : 'Habilidades e Ferramentas'}
        </h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div className="skill-group" key={i}>
            <div className="sg-title">{t(group.title, lang)}</div>
            <div className="pills">
              {group.pills.map((pill, j) => (
                <span className="pill" key={j}>{t(pill, lang)}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 36 }}>
        <p className="col-label">
          {lang === 'en' ? 'Languages' : 'Idiomas'}
        </p>
        <div className="lang-row">
          {languages.map((l, i) => (
            <div className="lc" key={i}>
              <div className="lc-name">{t(l.name, lang)}</div>
              <div className="lc-lvl">{t(l.level, lang)}</div>
              <div className="lc-dots">
                {Array.from({ length: 5 }, (_, d) => (
                  <div className={`ld${d < l.dots ? ' on' : ''}`} key={d} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
