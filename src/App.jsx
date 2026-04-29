import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import J30 from './pages/J30';
import J10 from './pages/J10';
import M1 from './pages/M1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/j30" element={<J30 />} />
        <Route path="/j10" element={<J10 />} />
        <Route path="/m1" element={<M1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;