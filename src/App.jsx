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
import BrandsSwiper from './component/BrandSwiper'
import FloatingActions from './component/Floating'
import FocusGrid from './component/Foucus'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesPage />
   
      <BrandsSwiper />
      <AboutPage />
      <WhyChooseUs />
      <FocusGrid />
      {/* <ServiceBoxes /> */}
      <Gallery />
      <ContactPage />
      <Footer />
      <FloatingActions/>

    </div>
  )
}

export default App
