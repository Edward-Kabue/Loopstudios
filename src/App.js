import "./App.css";
import Creations from "./components/CreationsMobile";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Leader from "./components/Leader";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Careers from "./pages/careers";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={About} />
          <Route path="/careers" element={Careers} />
          <Route path="/services" element={Services} />
          <Route path="/contact-us" element={Contact} />
        </Routes>
      </Router>
      <Hero />
      <Leader />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
