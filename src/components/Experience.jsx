import { useLang } from '../context/LangContext'
import { experiences } from '../data/resumeData'
import TimelineEntry from './TimelineEntry'
import FounderCard from './FounderCard'

export default function Experience() {
  const { lang } = useLang()

  return (
    <section className="section" id="experience">
      <div className="sec-header">
        <h2 className="sec-title">
          {lang === 'en' ? 'Experience' : 'Experiência'}
        </h2>
        <span className="sec-sub">
          {lang === 'en' ? '8 companies' : '8 empresas'}
        </span>
      </div>

      <div className="timeline">
        {experiences.map(exp => (
          <TimelineEntry
            key={exp.id}
            entry={exp}
            defaultOpen={exp.current}
          />
        ))}
      </div>

      <FounderCard />
    </section>
  )
}
