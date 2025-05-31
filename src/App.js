// App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import DevelopmentTimeline from './components/DevelopmentTimeline/DevelopmentTimeline';
import TechnologyShowcase from './components/TechnologyShowcase/TechnologyShowcase';
import Gallery from './components/Gallery/Gallery';
import ContactInvest from './components/ContactInvest/ContactInvest';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <DevelopmentTimeline />
        <TechnologyShowcase />
        <Gallery />
        <ContactInvest />
      </main>
      <Footer />
    </div>
  );
}

export default App;