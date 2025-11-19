import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

import ServiceBoxes from './component/ServiceBoxes'
import WhyChooseUs from './component/WhyChooseUs'
import AboutPage from './component/AboutPage'
import ACService from './component/ACService'
import ACSection from './component/TvSection'
import TelevisionServiceSection from './component/TvSection'
import ServicesPage from './component/Allsection'
import Footer from './component/Footer1'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
     
      <ServiceBoxes/>

      <ServicesPage/>
      <AboutPage />
      <WhyChooseUs/>
      <Footer/>
     
    </div>
  )
}

export default App
