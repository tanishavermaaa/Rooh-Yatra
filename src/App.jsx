import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <main>
        <Hero />

        <Mission />
        <Contact />
      </main>

    </div>
  );
}

export default App;