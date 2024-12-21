import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DentCare</h3>
              <p className="text-gray-400">
                Providing quality dental care for over 20 years.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">General Dentistry</a></li>
                <li><a href="#" className="hover:text-white">Cosmetic Dentistry</a></li>
                <li><a href="#" className="hover:text-white">Orthodontics</a></li>
                <li><a href="#" className="hover:text-white">Pediatric Dentistry</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Dental Street</li>
                <li>New York, NY 10001</li>
                <li>(555) 123-4567</li>
                <li>info@dentcare.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 DentCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
