import React from "react";
import { motion } from "framer-motion";
import { 
  FiCheck, 
  FiShoppingCart, 
  FiHeadphones, 
  FiMonitor, 
  FiMic, 
  FiVideo, 
  FiCpu,
  FiChevronRight,
  FiClock,
  FiDollarSign,
  FiShield,
  FiTruck
} from "react-icons/fi";
import { TfiVideoCamera } from "react-icons/tfi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Products = () => {
  const productCategories = [
    {
      name: "Audio Equipment",
      icon: <FiHeadphones className="text-4xl" />,
      color: "from-purple-500 to-indigo-600",
      items: [
        {
          name: "PA System (1000W)",
          description: "Complete setup with mixer, speakers, and cables for medium-sized events",
          price: "₹4,500/day",
          features: ["2x 100W Speakers", "200W Amplifier with Bluetooth", "2 Wireless mic"],
          popular: true
        },
        {
          name: "Wireless Microphone Set",
          description: "Professional UHF wireless system with handheld and lapel mics",
          price: "₹800/day",
          features: ["Wireless Hand Mic", "100m range", "Lapel Mic"]
        },
        {
          name: "DJ Equipment Package",
          description: "Complete DJ setup with controller, speakers, and lighting",
          price: "₹3,000/day",
          features: ["Mixer", "2x 1000W speakers", "Basic lighting"],
          popular: true
        },
      ],
    },
    {
      name: "TV Rentals",
      icon: <FiMonitor className="text-4xl" />,
      color: "from-blue-500 to-cyan-600",
      items: [
        {
          name: "Smart TV (43 inches)",
          description: "Full HD smart TV perfect for small gatherings",
          price: "₹1,500/day",
          features: ["Full HD resolution", "Built-in WiFi", "Multiple HDMI ports"],
          popular: true
        },
        {
          name: "Smart TV (55 inches)",
          description: "4K UHD smart TV ideal for medium-sized rooms",
          price: "₹2,500/day",
          features: ["4K Ultra HD", "HDR10 support", "Premium sound system"]
        },
        {
          name: "Smart TV (75 inches)",
          description: "Massive 4K QLED TV for large venues",
          price: "₹5,000/day",
          features: ["75-inch 4K QLED", "Quantum dot technology", "120Hz refresh rate"]
        },
      ],
    },
    {
      name: "Projection Systems",
      icon: <TfiVideoCamera className="text-4xl" />,
      color: "from-pink-500 to-rose-600",
      items: [
        {
          name: "HD Projector (5000 lumens)",
          description: "High brightness projector for daytime events",
          price: "₹2,000/day",
          features: ["Full HD resolution", "5000 lumens", "10,000:1 contrast"],
          popular: true
        },
        {
          name: 'Projection Screen (200")',
          description: "Motorized retractable screen for professional presentations",
          price: "₹1,200/day",
          features: ["16:9 aspect ratio", "Fast retraction", "Includes carrying case"]
        },
      ],
    },
  ];

  const benefits = [
    {
      icon: <FiClock className="text-3xl" />,
      title: "Flexible Rental Periods",
      description: "Daily, weekly or monthly options to suit your needs"
    },
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: "Competitive Pricing",
      description: "Affordable rates with no hidden charges"
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Equipment Protection",
      description: "Optional damage waiver available"
    },
    {
      icon: <FiTruck className="text-3xl" />,
      title: "Delivery & Setup",
      description: "Professional installation services"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Hero Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Premium Equipment Rentals
            </span> in Chandigarh
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Elevate your events with our top-tier AV equipment. Perfect for corporate events, weddings, and special occasions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center"
            >
              Browse All Equipment <FiChevronRight className="ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              Call Now: 7986584344
            </motion.button>
          </div>
        </motion.div>

        {/* Benefits Carousel */}
        <div className="mb-20">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="pb-12"
          >
            {benefits.map((benefit, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col items-center text-center hover:shadow-lg transition-all">
                  <div className={`bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-full mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Featured Categories */}
        {productCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center mb-8">
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4`}>
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 ${item.popular ? 'border-yellow-400' : `border-${category.color.split(' ')[1]}`}`}
                >
                  {item.popular && (
                    <div className="bg-yellow-400 text-yellow-900 font-bold text-sm px-4 py-1 text-center">
                      POPULAR CHOICE
                    </div>
                  )}
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
                      <span className="text-2xl font-bold text-gray-800">{item.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-gradient-to-r ${category.color} text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center`}
                      >
                        <FiShoppingCart className="mr-2" />
                        Rent Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-3xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Trusted by Event Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 mr-4"></div>
                <div>
                  <h4 className="font-bold">Rajesh Verma</h4>
                  <p className="text-purple-200">Wedding Planner</p>
                </div>
              </div>
              <p className="text-purple-100">
                "The audio equipment made our wedding reception unforgettable. Crystal clear sound and their team handled everything professionally."
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 mr-4"></div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-purple-200">Corporate Event Manager</p>
                </div>
              </div>
              <p className="text-purple-100">
                "Our product launch was a success thanks to their projection systems. The 4K projectors delivered stunning visuals."
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 mr-4"></div>
                <div>
                  <h4 className="font-bold">Amit Patel</h4>
                  <p className="text-purple-200">DJ & Event Producer</p>
                </div>
              </div>
              <p className="text-purple-100">
                "I regularly rent their DJ equipment. Well-maintained gear that never lets me down during performances."
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Elevate Your Event?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our rental specialists are available 24/7 to help you choose the perfect equipment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get Instant Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center"
            >
              <FiShoppingCart className="mr-2" /> Book Equipment Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;