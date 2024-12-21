import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Perfect Smile <br />
              <span className="text-blue-600">Starts Here</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Experience world-class dental care with our team of expert dentists. 
              We provide comprehensive dental services with a gentle touch.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Your Visit
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
                View Services
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full h-[500px] relative">
              <Image
                src="/dentist-hero.jpg"
                alt="Dentist examining patient"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}