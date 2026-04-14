import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy load below-the-fold components
const Solutions = lazy(() => import('./components/Solutions'))
const Commitment = lazy(() => import('./components/Commitment'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const GalaxyBackground = lazy(() => import('./components/GalaxyBackground'))
const Footer = lazy(() => import('./components/Footer'))

// Basic loader fallback for Suspense
const Loader = () => (
  <div className="flex justify-center items-center py-20 min-h-[300px]">
    <div className="w-8 h-8 border-4 border-tech-purple border-t-transparent rounded-full animate-spin opacity-50"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-black text-silver-gray font-sans selection:bg-tech-purple selection:text-white">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <Solutions />
          <div className="relative overflow-hidden">
            <GalaxyBackground />
            <Commitment />
            <ContactForm />
            <Footer />
          </div>
        </Suspense>
      </main>
    </div>
  )
}

export default App
