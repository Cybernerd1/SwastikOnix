import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ServicesWheel from './components/ServicesWheel';
import WhoWeAre from './components/WhoWeAre';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Features />
      <ServicesWheel />
      <WhoWeAre />
      <Projects />
      <FAQ />
      <Footer />
    </Layout>
  );
}

export default App;
