import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ClientLogin from './pages/ClientLogin'
import WhoWeAre from './pages/WhoWeAre'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo-link">
            <img src="/images/logo-teyia.png" alt="TEYIA" className="logo-img" />
          </Link>
          <nav className="nav">
            <Link to="/client-login" className="cta-nav">Client Login</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
      </Routes>
    </div>
  )
}

export default App
