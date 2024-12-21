import Image from 'next/image';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
    icon: '/icons/tooth.svg'
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with whitening, veneers, and other aesthetic treatments.',
    icon: '/icons/smile.svg'
  },
  {
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern braces and clear aligners.',
    icon: '/icons/braces.svg'
  },
  {
    title: 'Dental Implants',
    description: 'Replace missing teeth with permanent, natural-looking implants.',
    icon: '/icons/implant.svg'
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency dental care when you need it most.',
    icon: '/icons/emergency.svg'
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly environment.',
    icon: '/icons/child.svg'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive dental care for your entire family
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-blue-600">
                  {/* Icon placeholder - you'll need to add actual icons */}
                  <div className="w-6 h-6 bg-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}