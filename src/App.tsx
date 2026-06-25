import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageContext } from './i18n'
import { translations, type Lang } from './translations'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Mision from './components/Mision/Mision'
import Productos from './components/Productos/Productos'
import Fundador from './components/Fundador/Fundador'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'

const Page = ({ lang }: { lang: Lang }) => (
  <LanguageContext.Provider value={translations[lang]}>
    <Navbar />
    <main>
      <Hero />
      <Mision />
      <Productos />
      <Fundador />
      <Contacto />
    </main>
    <Footer />
  </LanguageContext.Provider>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ar" replace />} />
        <Route path="/ar" element={<Page lang="es" />} />
        <Route path="/br" element={<Page lang="pt" />} />
        <Route path="*" element={<Navigate to="/ar" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
