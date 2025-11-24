import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Exo1 from './pages/Exo1'
import Exo2 from './pages/Exo2'
import Exo3 from './pages/Exo3'
import Exo4 from './pages/Exo4'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Exo1" element={<Exo1 />} />
        <Route path="/Exo2" element={<Exo2 />} />
        <Route path="/Exo3" element={<Exo3 />} />
        <Route path="/Exo4" element={<Exo4 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
