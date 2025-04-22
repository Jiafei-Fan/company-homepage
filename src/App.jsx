import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ResourcesPage from './pages/ResourcesPage';
import ResponsibilityPage from './pages/ResponsibilityPage';
import ContactPage from './pages/ContactPage';
import { LoginPage, NotFoundPage } from './pages/PlaceholderPages';
import MobileMenu from './components/MobileMenu';

// ScrollToTop component to reset scroll position on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Reset both horizontal and vertical scroll position when route changes
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className="min-h-screen relative bg-white">
      <ScrollToTop />
      <Header 
        ref={headerRef}
        setIsMobileMenuOpen={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className="pt-16 flex flex-col min-h-screen">
        <main className="flex-grow p-5 md:p-10 border-b">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/responsibility" element={<ResponsibilityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;