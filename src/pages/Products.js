import React from "react";
import {
  FiCheck,
  FiShoppingCart,
  FiHeadphones,
  FiMonitor,
  FiMic,
  FiVideo,
  FiCpu,
} from "react-icons/fi";
import { TfiVideoCamera } from "react-icons/tfi";

const Products = () => {
  const productCategories = [
    {
      name: "Audio Equipment",
      icon: <FiHeadphones className="text-4xl text-purple-600" />,
      color: "text-purple-600",
      cardClass:
        "border-t-4 border-purple-500 hover:border-purple-600 hover:bg-purple-50",
      buttonClass:
        "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded md:rounded-lg",
      items: [
        {
          name: "PA System (1000W)",
          description:
            "Complete setup with mixer, speakers, and cables for medium-sized events",
          price: "₹4,500/day",
          features: [
            "2x 100W Speakers",
            "200W Amplifier with Bluetooth",
            "2 Wireless mic",
          ],
        },
        {
          name: "Wireless Microphone Set",
          description:
            "Professional UHF wireless system with handheld and lapel mics",
          price: "₹500800/day",
          features: ["Wireless Hand Mic", "100m range", "Lapel Mic"],
        },
        {
          name: "DJ Equipment Package",
          description:
            "Complete DJ setup with controller, speakers, and lighting",
          price: "₹3,000/day",
          features: ["Mixer", "2x 1000W speakers", "Basic lighting"],
        },
      ],
    },
    {
      name: "TV Rentals",
      icon: <FiMonitor className="text-4xl text-blue-600" />,
      color: "text-blue-600",
      cardClass:
        "border-t-4 border-blue-500 hover:border-blue-600 hover:bg-blue-50",
      buttonClass:
        "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded md:rounded-lg",
      items: [
        {
          name: "Smart TV (43 inches)",
          description:
            "Full HD smart TV perfect for small gatherings, meetings, or bedroom setups with built-in streaming apps",
          price: "₹1,500/day",
          features: [
            "Full HD (1920x1080) resolution",
            "Built-in WiFi and smart features",
            "Multiple HDMI and USB ports",
            "Wall mount or stand options",
            "Branded TV (Mi, PCL, Hisence)",
          ],
        },
        {
          name: "Smart TV (55 inches)",
          description:
            "4K UHD smart TV ideal for medium-sized rooms, corporate events, or premium home entertainment",
          price: "₹2,500/day",
          features: [
            "4K Ultra HD (3840x2160) resolution",
            "HDR10 support for vibrant colors",
            "Voice-controlled remote",
            "Premium sound system",
            "Google TV",
            "Branded TV (Mi, PCL, Hisence)",
          ],
        },
        {
          name: "Smart TV (75 inches)",
          description:
            "Massive 4K QLED TV for large venues, showrooms, or creating an immersive home theater experience",
          price: "₹5,000/day",
          features: [
            "75-inch 4K QLED display",
            "Quantum dot technology for brilliant colors",
            "120Hz refresh rate for smooth motion",
            "Professional installation available",
            "Branded TV (Mi, PCL, Hisence)",
          ],
        },
      ],
    },
    {
      name: "Projection Systems",
      icon: <TfiVideoCamera className="text-4xl text-[hotpink]" />,
      color: "text-[hotpink]",
      cardClass:
        "border-t-4 border-[hotpink] hover:border-[hotpink] hover:bg-[hotpink] rounded md:rounded-lg",
      buttonClass:
        "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700",
      items: [
        {
          name: "HD Projector (5000 lumens)",
          description:
            "High brightness projector for daytime events and large venues",
          price: "₹2,000/day",
          features: ["Full HD resolution", "5000 lumens", "10,000:1 contrast"],
        },
        {
          name: 'Projection Screen (200")',
          description:
            "Motorized retractable screen for professional presentations",
          price: "₹1,200/day",
          features: [
            "16:9 aspect ratio",
            "Fast retraction",
            "Includes carrying case",
          ],
        },
        {
          name: "LED Video Wall Panel",
          description: "Modular LED panels for creating custom video walls",
          price: "₹5,000/day",
          features: [
            "500x500mm panels",
            "Full HD resolution",
            "Bright outdoor viewing",
          ],
        },
      ],
    },
    {
      name: "Lighting Systems",
      icon: <FiVideo className="text-4xl text-yellow-600" />,
      color: "text-yellow-600",
      cardClass:
        "border-t-4 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-50",
      buttonClass:
        "bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 rounded md:rounded-lg",
      items: [
        {
          name: "Moving Head Lights",
          description:
            "Professional moving head spotlights for stage performances",
          price: "₹1,800/day",
          features: ["RGBW colors", "15-50° zoom", "Sound-active mode"],
        },
        {
          name: "LED Par Can Lights",
          description: "Energy-efficient lighting for stages and venues",
          price: "₹600/day",
          features: ["RGB colors", "DMX compatible", "Lightweight aluminum"],
        },
        {
          name: "Fog Machine",
          description: "Atmospheric effects machine with remote control",
          price: "₹900/day",
          features: [
            "1000W power",
            "Continuous operation",
            "2L fluid capacity",
          ],
        },
      ],
    },
    {
      name: "Conference Equipment",
      icon: <FiMic className="text-4xl text-green-600" />,
      color: "text-green-600",
      cardClass:
        "border-t-4 border-green-500 hover:border-green-600 hover:bg-green-50",
      buttonClass:
        "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded md:rounded-lg",
      items: [
        {
          name: "Conference Microphone ",
          description: "Complete setup for corporate meetings and seminars",
          price: "₹2,500/day",
          features: [
            "10 delegate mics",
            "Central control unit",
            "Auto camera tracking",
          ],
        },
        {
          name: "Simultaneous Interpretation ",
          description:
            "Professional translation equipment for multilingual events",
          price: "₹4,000/day",
          features: [
            "6 channels",
            "Infrared transmission",
            "30 headsets included",
          ],
        },
        {
          name: "Webcasting Kit",
          description:
            "Equipment for live streaming events or video conferencing",
          price: "₹3,500/day",
          features: ["HD camera", "Streaming encoder", "Audio interface"],
        },
      ],
    },
    {
      name: "Computer Rentals",
      icon: <FiCpu className="text-4xl text-red-600" />,
      color: "text-red-600",
      cardClass:
        "border-t-4 border-red-500 hover:border-red-600 hover:bg-red-50",
      buttonClass:
        "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded md:rounded-lg",
      items: [
        {
          name: "Business Laptop (i5)",
          description: "High-performance laptop for office and presentations",
          price: "₹800/day",
          features: ["Windows 10 Pro", "8GB RAM", "256GB SSD"],
        },
        {
          name: "Workstation Setup",
          description: "Complete desktop computer with peripherals",
          price: "₹1,200/day",
          features: ["i7 processor", "16GB RAM", "Dual monitors"],
        },
        {
          name: "Digital Signage Display",
          description: '55" commercial display for advertising',
          price: "₹2,500/day",
          features: [
            "4K resolution",
            "Built-in media player",
            "Wall mount included",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Rental Equipment
          </h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium event equipment available for rent in Chandigarh Tricity.
            Perfect for corporate events, weddings, and special occasions.
          </p>
        </div>

        {/* Product Categories */}
        {productCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-20">
            <div className="flex items-center mb-8">
              {category.icon}
              <h2 className="text-3xl font-bold text-gray-800 ml-4">
                {category.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 ${category.cardClass}`}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <a
                        href="tel:7986584344"
                        className="flex items-center justify-between hover:bg-indigo-50 transition "
                      >
                        <button
                          className={`flex items-center text-white font-medium py-2 px-4 rounded-lg transition duration-300 ${category.buttonClass}`}
                        >
                          <FiShoppingCart className="mr-2" />
                          Rent Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Rental Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Rental Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Pricing & Terms
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Daily, weekly, and monthly rental options available
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Discounts available for long-term rentals
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Security deposit required for all rentals
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    All necessary cables and accessories
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Basic setup instructions
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Optional technical support available
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
