import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Transportation from './pages/Transportation/Transportation';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Services from './pages/Services/Services';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/transportation/:productId" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
