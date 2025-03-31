import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image placeholder - replace with your image */}
          <div className="w-full md:w-1/3 lg:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                [Your Image Here]
              </div>
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-gray-900 px-6 py-2 font-bold rounded-lg shadow-md transform rotate-6">
                15+ Years
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative inline-block">
              <span className="relative z-10">About My Event Services</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 z-0 opacity-70"></span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With <span className="font-bold text-purple-600">15 years of experience</span> in the event management industry, 
              I've successfully organized countless events across <span className="font-semibold">Chandigarh, Mohali, Panchkula</span> and nearby regions.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-4 h-4 bg-yellow-400 mr-2 rounded-full"></span>
                What I Offer
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Complete event planning & organization</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Projectors & AV equipment rental</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Professional sound systems & mics</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Laptops & technical equipment</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-400">
              <h4 className="font-medium text-gray-800 mb-3">Serving Chandigarh Region Since 2008</h4>
              <p className="text-gray-600">
                I take pride in having organized hundreds of successful events, from intimate gatherings to large-scale functions. 
                My equipment is maintained to the highest standards, available for both <span className="font-medium">daily and monthly rentals</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;