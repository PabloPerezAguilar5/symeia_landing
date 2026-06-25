import { createContext, useContext } from 'react'
import { translations, type T } from './translations'

export const LanguageContext = createContext<T>(translations.es)

export const useT = () => useContext(LanguageContext)
