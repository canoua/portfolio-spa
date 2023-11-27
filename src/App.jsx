// routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/global';

// components
import Header from "./components/Header";

// pages
import Home from './pages/Home';
import Stack from './pages/Stack';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return <>
    <GlobalStyles />
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
    </Router>
  </>
}

export default App