import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WhyChooseUs from './pages/WhyChooseUs';
import Services from './pages/Services';
import CompletedWorks from './pages/CompletedWorks';
import OngoingWorks from './pages/OngoingWorks';
import Clients from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />            
            <Route path="/services" element={<Services />} />
            <Route path="/completed-works" element={<CompletedWorks />} />
            <Route path="/ongoing-works" element={<OngoingWorks />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
