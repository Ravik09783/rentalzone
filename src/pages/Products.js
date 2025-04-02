import React from 'react';
import { FiCheck, FiShoppingCart, FiHeadphones, FiMonitor, FiMic, FiVideo, FiCpu } from 'react-icons/fi';

const Products = () => {
  const productCategories = [
    {
      name: "Audio Equipment",
      icon: <FiHeadphones className="text-4xl text-purple-600" />,
      items: [
        {
          name: "PA System (1000W)",
          description: "Complete setup with mixer, speakers, and cables for medium-sized events",
          price: "₹1,500/day",
          features: ["2x 500W Speakers", "8-channel mixer", "Wireless mic compatible"]
        },
        {
          name: "Wireless Microphone Set",
          description: "Professional UHF wireless system with handheld and lapel mics",
          price: "₹800/day",
          features: ["Dual channel", "100m range", "LCD display"]
        },
        {
          name: "DJ Equipment Package",
          description: "Complete DJ setup with controller, speakers, and lighting",
          price: "₹3,000/day",
          features: ["Controller with software", "2x 1000W speakers", "Basic lighting"]
        }
      ]
    },
    {
      name: "Projection Systems",
      icon: <FiMonitor className="text-4xl text-blue-600" />,
      items: [
        {
          name: "HD Projector (5000 lumens)",
          description: "High brightness projector for daytime events and large venues",
          price: "₹2,000/day",
          features: ["Full HD resolution", "5000 lumens", "10,000:1 contrast"]
        },
        {
          name: "Projection Screen (200\")",
          description: "Motorized retractable screen for professional presentations",
          price: "₹1,200/day",
          features: ["16:9 aspect ratio", "Fast retraction", "Includes carrying case"]
        },
        {
          name: "LED Video Wall Panel",
          description: "Modular LED panels for creating custom video walls",
          price: "₹5,000/day",
          features: ["500x500mm panels", "Full HD resolution", "Bright outdoor viewing"]
        }
      ]
    },
    {
      name: "Lighting Systems",
      icon: <FiVideo className="text-4xl text-yellow-600" />,
      items: [
        {
          name: "Moving Head Lights",
          description: "Professional moving head spotlights for stage performances",
          price: "₹1,800/day",
          features: ["RGBW colors", "15-50° zoom", "Sound-active mode"]
        },
        {
          name: "LED Par Can Lights",
          description: "Energy-efficient lighting for stages and venues",
          price: "₹600/day",
          features: ["RGB colors", "DMX compatible", "Lightweight aluminum"]
        },
        {
          name: "Fog Machine",
          description: "Atmospheric effects machine with remote control",
          price: "₹900/day",
          features: ["1000W power", "Continuous operation", "2L fluid capacity"]
        }
      ]
    },
    {
      name: "Conference Equipment",
      icon: <FiMic className="text-4xl text-green-600" />,
      items: [
        {
          name: "Conference Microphone System",
          description: "Complete setup for meetings and seminars",
          price: "₹2,500/day",
          features: ["10 delegate mics", "Central control unit", "Auto camera tracking"]
        },
        {
          name: "Simultaneous Interpretation System",
          description: "Professional translation equipment for multilingual events",
          price: "₹4,000/day",
          features: ["6 channels", "Infrared transmission", "30 headsets included"]
        },
        {
          name: "Webcasting Kit",
          description: "Equipment for live streaming events",
          price: "₹3,500/day",
          features: ["HD camera", "Streaming encoder", "Audio interface"]
        }
      ]
    },
    {
      name: "Computer Rentals",
      icon: <FiCpu className="text-4xl text-red-600" />,
      items: [
        {
          name: "Business Laptop (i5)",
          description: "High-performance laptop for office and presentations",
          price: "₹800/day",
          features: ["Windows 10 Pro", "8GB RAM", "256GB SSD"]
        },
        {
          name: "Workstation Setup",
          description: "Complete desktop computer with peripherals",
          price: "₹1,200/day",
          features: ["i7 processor", "16GB RAM", "Dual monitors"]
        },
        {
          name: "Digital Signage Display",
          description: "55\" commercial display for advertising",
          price: "₹2,500/day",
          features: ["4K resolution", "Built-in media player", "Wall mount included"]
        }
      ]
    }
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
            Premium event equipment available for rent in Chandigarh Tricity. Perfect for corporate events, weddings, and special occasions.
          </p>
        </div>

        {/* Product Categories */}
        {productCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-20">
            <div className="flex items-center mb-8">
              {category.icon}
              <h2 className="text-3xl font-bold text-gray-800 ml-4">{category.name}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-purple-600">{item.price}</span>
                      <button className="flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                        <FiShoppingCart className="mr-2" />
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Rental Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Rental Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pricing & Terms</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Daily, weekly, and monthly rental options available</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Discounts available for long-term rentals</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Security deposit required for all rentals</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">All necessary cables and accessories</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Basic setup instructions</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Optional technical support available</span>
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