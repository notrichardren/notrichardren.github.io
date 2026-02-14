import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage } from './components/PersonalWebsite'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
