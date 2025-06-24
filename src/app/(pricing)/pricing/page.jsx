import React from 'react'
import Hero from './components/Hero'
import ContactUs from '@/app/(frontend)/components/sections/ContactUs'
import AboutUs from '@/app/(frontend)/components/sections/AboutUs';
import WhyChooseUs from '@/app/(frontend)/components/sections/WhyChooseUs';

const page = () => {
  return (
    <div>
      <Hero />
      <section id="about" className="section-offset">
        <AboutUs />
      </section>
      <section id="contact" className="section-offset">
        <ContactUs />
      </section>
      <section id="whychooseus" className="section-offset">
        <WhyChooseUs />
      </section>
    </div>
  );
}

export default page