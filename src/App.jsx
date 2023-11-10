// routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from './pages/Home';
import Stack from './pages/Stack';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return <>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stack' element={<Stack />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </>
}

export default App