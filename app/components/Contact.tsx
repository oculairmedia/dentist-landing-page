export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We're here to help with all your dental needs
            </p>
            
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="mt-2 text-gray-600">
                  123 Dental Street<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
                <div className="mt-2 text-gray-600 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
                <div className="mt-2 text-gray-600 space-y-1">
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@dentcare.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Schedule an Appointment
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service
                </label>
                <select
                  id="service"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>General Check-up</option>
                  <option>Cleaning</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Orthodontics</option>
                  <option>Emergency</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}