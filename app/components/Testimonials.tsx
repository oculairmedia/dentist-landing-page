import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    image: '/testimonials/sarah.jpg',
    quote: 'The best dental experience I\'ve ever had. The staff is incredibly friendly and professional.',
  },
  {
    name: 'Michael Chen',
    role: 'Patient',
    image: '/testimonials/michael.jpg',
    quote: 'I was nervous about my dental implant, but they made the process smooth and painless.',
  },
  {
    name: 'Emily Davis',
    role: 'Patient',
    image: '/testimonials/emily.jpg',
    quote: 'My kids love coming here! The pediatric dentists are amazing with children.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-200">
                  {/* Add actual images later */}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}