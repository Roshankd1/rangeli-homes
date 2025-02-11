import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Building2, Users2, Phone, HelpCircle, ChevronRight, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import PropertyCard from './components/PropertyCard';
import PropertyDetails from './pages/PropertyDetails';
import { properties } from './data/properties';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Luxury Short-Term Stays in NoVa
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the comfort of home with the luxury of a hotel in Northern Virginia's prime locations.
          </p>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="bg-gray-900 text-white px-8 py-3 rounded-full inline-flex items-center group hover:bg-gray-800 transition-colors"
          >
            View Properties
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
                alt="Luxury apartment interior"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Rangeli Homes specializes in providing exceptional short-term rental properties in Northern Virginia's most desirable locations. Our carefully curated collection of homes offers the perfect blend of comfort, style, and convenience for both business and leisure travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Properties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Prime Locations',
                description: 'All our properties are strategically located near DC metro area attractions.',
                icon: <MapPin className="h-8 w-8" />,
              },
              {
                title: 'Luxury Amenities',
                description: 'Every property is equipped with high-end furnishings and modern amenities.',
                icon: <Building2 className="h-8 w-8" />,
              },
              {
                title: '24/7 Support',
                description: 'Our dedicated team is always available to assist you during your stay.',
                icon: <Phone className="h-8 w-8" />,
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'What is the minimum stay requirement?',
                answer: 'Our minimum stay requirement varies by property and season, typically ranging from 2 to 5 nights.',
              },
              {
                question: 'Do you provide cleaning services?',
                answer: 'Yes, we provide professional cleaning services before and after your stay. Additional cleaning during your stay can be arranged for an extra fee.',
              },
              {
                question: 'Is parking available?',
                answer: 'Most of our properties include dedicated parking spaces. Specific parking details are listed in each property description.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  Have questions about our properties or services? We'd love to hear from you. Contact us using the form or through our social media channels.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6" />
                <span className="ml-2 text-lg font-semibold">Rangeli Homes</span>
              </div>
              <p className="text-gray-400">
                Luxury short-term rentals in Northern Virginia
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Portfolio', 'FAQ', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400">Northern Virginia, United States</p>
              <p className="text-gray-400">info@rangelihomes.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rangeli Homes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-gray-900" />
              <span className="ml-2 text-xl font-semibold">Rangeli Homes</span>
            </div>
            {location.pathname === '/' && (
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'portfolio', 'why-us', 'faq', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`${
                      activeSection === section ? 'text-gray-900' : 'text-gray-500'
                    } hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
}

export default App;