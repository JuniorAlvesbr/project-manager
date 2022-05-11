import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Company from './Pages/Company'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import NewProject from './Pages/NewProject'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container customClass={"min-height"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
