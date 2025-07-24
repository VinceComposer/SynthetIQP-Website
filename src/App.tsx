import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import FAQs from './pages/FAQs';
import Discovery from './pages/Discovery';
import Services from './pages/Services';
import Confirmation from './pages/Confirmation'; // Import the new Confirmation page
import './i18n';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to contact section when navigating from another page
    if (location.state && location.state.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ block: 'start' });
      }
      // Clear the state to prevent scrolling on subsequent navigation
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/es/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/es/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/es/refund" element={<Refund />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/confirmation" element={<Confirmation />} /> {/* Add the new route for Confirmation */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;