export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600">DentCare</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}