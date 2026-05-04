import { useLang } from '../context/LangContext'

export default function Nav() {
  const { lang, setLang } = useLang()

  return (
    <nav className="nav">
      <span className="nav-name">Pedro Thomé</span>
      <div className="nav-right">
        <a className="nav-link" href="#experience">
          {lang === 'en' ? 'Experience' : 'Experiência'}
        </a>
        <a className="nav-link" href="#skills">
          {lang === 'en' ? 'Skills' : 'Habilidades'}
        </a>
        <a className="nav-link" href="mailto:ph.thome@gmail.com">
          {lang === 'en' ? 'Contact' : 'Contato'}
        </a>
        <div className="lang-toggle">
          <button
            className={`lang-btn${lang === 'en' ? ' active' : ''}`}
            onClick={() => setLang('en')}
          >EN</button>
          <button
            className={`lang-btn${lang === 'pt' ? ' active' : ''}`}
            onClick={() => setLang('pt')}
          >PT</button>
        </div>
      </div>
    </nav>
  )
}
