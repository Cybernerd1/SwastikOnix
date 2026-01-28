import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ServicesWheel from './components/ServicesWheel';
import WhoWeAre from './components/WhoWeAre';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Admin from './pages/Admin';

const Home = () => (
  <>
    <Hero />
    <Features />
    <ServicesWheel />
    <WhoWeAre />
    <Projects />
    <FAQ />
    <ContactForm />
  </>
);

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
