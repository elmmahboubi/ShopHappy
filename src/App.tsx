import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Apple as WhatsApp } from 'lucide-react';

// Eager load HomePage for better initial load performance
import HomePage from './pages';

// Lazy load other pages
const ReturnPolicyPage = lazy(() => import('./pages/return-policy'));
const PrivacyPolicyPage = lazy(() => import('./pages/privacy-policy'));
const TermsPage = lazy(() => import('./pages/terms'));
const ProductPage = lazy(() => import('./pages/product'));
const TrackPage = lazy(() => import('./pages/track'));
const ContactPage = lazy(() => import('./pages/contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0046be]"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/+12512615451?text=Hello%2C%20i%20need%20more%20informations%20about%20this%20offer!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5C] p-4 rounded-full shadow-lg transition-transform hover:scale-110 duration-300"
      >
        <WhatsApp className="w-8 h-8 text-white" />
      </a>
    </Router>
  );
}

export default App;