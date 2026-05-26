import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Brazil from './pages/Brazil'
import Argentina from './pages/Argentina'
import Privacidade from './pages/Privacidade'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/br" replace />} />
        <Route path="/br" element={<Brazil />} />
        <Route path="/ar" element={<Argentina />} />
        <Route path="/privacy" element={<Privacidade />} />
        <Route path="*" element={<Navigate to="/br" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
