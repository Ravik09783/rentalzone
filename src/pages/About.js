// import React from 'react';

// const About = () => {
//   return (
//     <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50" id="about">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//           {/* Image placeholder - replace with your image */}
//           <div className="w-full md:w-1/3 lg:w-2/5 flex justify-center">
//             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
//               <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
//                 [Your Image Here]
//               </div>
//               <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-gray-900 px-6 py-2 font-bold rounded-lg shadow-md transform rotate-6">
//                 15+ Years
//               </div>
//             </div>
//           </div>

//           <div className="w-full md:w-2/3 lg:w-3/5">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative inline-block">
//               <span className="relative z-10">About My Event Services</span>
//               <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 z-0 opacity-70"></span>
//             </h2>

//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               With <span className="font-bold text-purple-600">15 years of experience</span> in the event management industry, 
//               I've successfully organized countless events across <span className="font-semibold">Chandigarh, Mohali, Panchkula</span> and nearby regions.
//             </p>

//             <div className="mb-8">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <span className="w-4 h-4 bg-yellow-400 mr-2 rounded-full"></span>
//                 What I Offer
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-3">
//                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700">Complete event planning & organization</span>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-3">
//                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700">Projectors & AV equipment rental</span>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-3">
//                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700">Professional sound systems & mics</span>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-3">
//                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700">Laptops & technical equipment</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-400">
//               <h4 className="font-medium text-gray-800 mb-3">Serving Chandigarh Region Since 2008</h4>
//               <p className="text-gray-600">
//                 I take pride in having organized hundreds of successful events, from intimate gatherings to large-scale functions. 
//                 My equipment is maintained to the highest standards, available for both <span className="font-medium">daily and monthly rentals</span>.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50" id="about">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image Section */}
          <div className="w-full md:w-2/5 flex justify-center relative">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Event Professional at Work"
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-3 -right-3 bg-yellow-400 text-gray-900 px-6 py-2 font-bold rounded-lg shadow-md transform rotate-3 text-lg">
                15+ Years Experience
              </div>
            </div>
            
            {/* Small stats */}
            <div className="absolute -left-4 bottom-20 hidden md:block bg-white p-4 rounded-lg shadow-lg z-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm font-medium text-gray-600">Events Managed</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/5">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 relative">
              <span className="relative z-10">Professional Event Solutions in Tricity</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300 z-0 opacity-60"></span>
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-6">
                <span className="font-bold text-purple-600">Hello, I'm Rohit Bhardwaj</span>, founder and principal event specialist serving the Chandigarh Tricity area (Chandigarh, Mohali, Panchkula) since 2008. 
                What began as a small AV equipment rental service has grown into a comprehensive event solutions provider trusted by corporate clients, 
                educational institutions, and private event organizers throughout Northern India.
              </p>
              
              <p className="mb-6">
                Over my <span className="font-semibold">15+ year journey</span>, I've had the privilege of supporting:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>200+ corporate conferences and seminars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>150+ weddings and social gatherings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>100+ educational and institutional events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>50+ large-scale exhibitions and trade shows</span>
                </li>
              </ul>
            </div>

            {/* Services Highlights */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-5 h-5 bg-yellow-400 mr-3 rounded-full"></span>
                My Comprehensive Service Approach
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Equipment Excellence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    All rental equipment is professionally maintained and upgraded annually. From 10,000-lumen projectors to studio-grade microphones, I invest in quality to ensure your event's success.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Technical Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Every rental includes basic setup guidance. Optional on-site technical support is available for complex events to handle equipment operation and troubleshooting.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial/Quote */}
            <div className="bg-white p-6 rounded-xl shadow-md relative border-t-4 border-yellow-400">
              <div className="absolute -top-4 left-6 bg-yellow-400 text-gray-900 px-4 py-1 font-bold rounded-lg">
                My Philosophy
              </div>
              <blockquote className="text-gray-700 italic mt-4">
                "In the events industry, success lies in the details. That's why I personally oversee every rental and event, ensuring the equipment performs flawlessly and your vision comes to life exactly as imagined."
              </blockquote>
              <div className="mt-4 text-right font-medium text-gray-800">
                — Rohit Bhardwaj, Founder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;