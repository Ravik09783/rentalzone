import React from "react";
import {
  FiCheckCircle,
  FiMic,
  FiMonitor,
  FiSpeaker,
  FiVideo,
  FiWifi,
} from "react-icons/fi";

const Services = () => {
  const serviceCategories = [
    {
      title: "Audio Equipment Rentals",
      icon: <FiSpeaker className="text-4xl mb-4 text-purple-600" />,
      description:
        "Premium sound systems for crystal-clear audio at any event size",
      features: [
        "PA Systems (500W to 2000W)",
        "Wireless Microphone Sets",
        "Mixers & Audio Processors",
        "DJ Equipment Packages",
        "Conference Sound Systems",
      ],
      note: "All systems include cables & basic setup",
    },
    {
      title: "Projection Solutions",
      icon: <FiMonitor className="text-4xl mb-4 text-blue-600" />,
      description:
        "High-quality visual displays for presentations and entertainment",
      features: [
        "HD & 4K Projectors (3000-10000 lumens)",
        'Projection Screens (100" to 300")',
        "LED Video Walls",
        "Media Players & Streaming Devices",
        "Interactive Flat Panels",
      ],
      note: "Daily/weekly rental options available",
    },
    {
      title: "Lighting & Stage",
      icon: <FiVideo className="text-4xl mb-4 text-yellow-600" />,
      description: "Transform any venue with professional lighting effects",
      features: [
        "LED Par Cans & Moving Heads",
        "Stage Lighting Kits",
        "Fog Machines & Effects",
        "Trussing & Rigging",
        "DJ Booth Packages",
      ],
      note: "Custom designs available for special events",
    },
    {
      title: "Conference Tech",
      icon: <FiMic className="text-4xl mb-4 text-green-600" />,
      description: "Complete solutions for professional meetings and seminars",
      features: [
        "Conference Microphone Systems",
        "Simultaneous Interpretation Kits",
        "Webcasting Equipment",
        "Voting Systems",
        "Hybrid Event Solutions",
      ],
      note: "Includes technical operator on request",
    },
    {
      title: "Computer Rentals",
      icon: <FiWifi className="text-4xl mb-4 text-red-600" />,
      description: "Temporary computing solutions for businesses and events",
      features: [
        "Business Laptops (i5/i7)",
        "Workstation Setups",
        "Printers & Scanners",
        "Digital Signage Displays",
        "Tablet Kits for Exhibitions",
      ],
      note: "Pre-loaded with essential software",
    },
    {
      title: "Complete Event Packages",
      icon: <FiCheckCircle className="text-4xl mb-4 text-indigo-600" />,
      description: "All-in-one solutions for hassle-free events",
      features: [
        "Wedding AV Packages",
        "Corporate Conference Kits",
        "Exhibition Stand Solutions",
        "Outdoor Event Systems",
        "Virtual Event Production",
      ],
      note: "Custom packages tailored to your needs",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Rental Services
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional event equipment rentals in Chandigarh Tricity -
            delivering quality gear and exceptional service since 2008
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500"
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <p className="text-sm text-purple-700 font-medium">
                    {service.note}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Section */}
        <div className="mt-20 bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-purple-500/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 text-white">
                Why Choose Our Rental Services?
              </h3>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto opacity-90">
                Experience the difference with our premium offerings and
                exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative bg-white/5 hover:bg-white/10 rounded-xl p-8 transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <FiCheckCircle className="text-3xl text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300">
                    Premium Equipment
                  </h4>
                  <p className="text-purple-100/90 group-hover:text-purple-100 transition-colors">
                    Only professional-grade gear from trusted brands with
                    regular maintenance
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative bg-white/5 hover:bg-white/10 rounded-xl p-8 transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300">
                    Reliable Support
                  </h4>
                  <p className="text-purple-100/90 group-hover:text-purple-100 transition-colors">
                    24/7 on-call technical assistance and emergency replacements
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative bg-white/5 hover:bg-white/10 rounded-xl p-8 transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300">
                    Flexible Rental Terms
                  </h4>
                  <p className="text-purple-100/90 group-hover:text-purple-100 transition-colors">
                    Customizable daily, weekly or monthly plans with no hidden
                    fees
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/30 active:scale-95">
                Explore Our Inventory
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Elevate Your Event?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch for personalized equipment recommendations and
            competitive rental rates
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
