import React from 'react'
import Hero from "./components/Hero"
import ProfessionalCleaning from './components/ProfessionalCleaning'
import ContactUs from '@/app/(frontend)/components/sections/ContactUs'
import Navbar from '@/components/reusables/NavBar'
import Footer from '@/components/reusables/Footer'
const page = () => {
  const customNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#services", label: "Services", hasDropdown: true },
    { href: "/#whychooseus", label: "Why Choose Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div>
        <Navbar navLinks={customNavLinks} />
      <Hero />
      <ProfessionalCleaning />
      <section id="contact" className="section-offset">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default page