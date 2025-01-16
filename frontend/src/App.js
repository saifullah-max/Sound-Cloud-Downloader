import "./App.css";
import AboutUs from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import TermsAndConditions from "./components/terms-conditions/Terms&Conditions";
import Disclaimer from "./components/disclaimer/Disclaimer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  );
}

export default App;
