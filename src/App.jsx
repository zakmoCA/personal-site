import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Projects, Contact, References, RefereeRequest, VerifyAccess } from './pages'

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/referee-request" element={<RefereeRequest />} />
          <Route path="/verify-access" element={<VerifyAccess />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App