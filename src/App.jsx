import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Commitment from './components/Commitment'
import ContactForm from './components/ContactForm'
import GalaxyBackground from './components/GalaxyBackground'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-silver-gray font-sans selection:bg-tech-purple selection:text-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <div className="relative overflow-hidden">
          <GalaxyBackground />
          <Commitment />
          <ContactForm />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
