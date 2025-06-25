import React from 'react'
import Hero from "./components/Hero"
import ContactUs from '@/app/(frontend)/components/sections/ContactUs';
const page = () => {
  return (
    <div>
      <Hero />
      <section id="contact" className="section-offset">
        <ContactUs />
      </section>
    </div>
  );
}

export default page