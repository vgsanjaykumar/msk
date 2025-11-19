import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

import ServiceBoxes from './component/ServiceBoxes'
import WhyChooseUs from './component/WhyChooseUs'
import AboutPage from './component/AboutPage'
import ServicesPage from './component/Allsection'
import Footer from './component/Footer1'
import ContactPage from './component/ContactPage'
import Gallery from './component/Gallery'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesPage />
      <AboutPage />
      <WhyChooseUs />
      <ServiceBoxes />
      <Gallery />
      <ContactPage />
      <Footer />

    </div>
  )
}

export default App
