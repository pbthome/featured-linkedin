import { createContext, useContext, useState } from 'react'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('en')

  function setLang(l) {
    setLangState(l)
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en'
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

export function useT(translations) {
  const { lang } = useLang()
  return translations[lang] ?? translations.en
}
