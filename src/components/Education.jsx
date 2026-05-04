import { useLang } from '../context/LangContext'
import { education } from '../data/resumeData'

function t(val, lang) {
  if (!val) return ''
  if (typeof val === 'string') return val
  return val[lang] ?? val.en
}

export default function Education() {
  const { lang } = useLang()

  return (
    <section className="section">
      <div className="sec-header">
        <h2 className="sec-title">
          {lang === 'en' ? 'Education' : 'Formação'}
        </h2>
      </div>
      <div className="edu-row">
        {education.map((e, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-deg">{t(e.deg, lang)}</div>
            <div className="edu-sch">{e.school}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
