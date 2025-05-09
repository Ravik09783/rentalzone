import { motion } from "framer-motion";
import { FiHeadphones, FiMonitor, FiMic, FiHardDrive, FiCheck, FiClock, FiDollarSign, FiShield } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    name: "Audio Equipment",
    image: "https://i0.wp.com/viknick.com/wp-content/uploads/2024/09/Zoom-H2N-Recorder2.jpg?resize=457%2C457&ssl=1",
    icon: FiHeadphones,
    highlights: [
      "Studio-grade recording gear",
      "Wireless microphone systems",
      "PA systems for any venue size",
      "Professional audio mixers"
    ],
    pricing: "From $49/day"
  },
  {
    name: "Projectors & Displays",
    image: "https://i0.wp.com/viknick.com/wp-content/uploads/2018/09/Epson-Projector-1-900-x-900.jpg?resize=768%2C768&ssl=1",
    icon: FiMonitor,
    highlights: [
      "4K Ultra HD resolution",
      "Up to 10,000 lumens brightness",
      "Screens up to 300 inches",
      "Short-throw and laser options"
    ],
    pricing: "From $79/day"
  },
  {
    name: "Microphones & Sound",
    image: "https://i0.wp.com/viknick.com/wp-content/uploads/2024/06/podcast-mic-1.jpg?fit=859%2C1000&ssl=1",
    icon: FiMic,
    highlights: [
      "Broadcast-quality microphones",
      "Lavalier and headset options",
      "Complete podcasting kits",
      "Wireless systems available"
    ],
    pricing: "From $29/day"
  },
  {
    name: "Laptops & Workstations",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5450-laptop/mg/notebook-latitude-14-5450t-ir-gallery-12.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4320&hei=2721&qlt=100,1&resMode=sharp2&size=4320,2721&chrss=full&imwidth=5000",
    icon: FiHardDrive,
    highlights: [
      "Latest business-class machines",
      "Dual monitor setups available",
      "Pre-loaded with Office 365",
      "Thoroughly sanitized between uses"
    ],
    pricing: "From $89/day"
  }
];

const benefits = [
  {
    icon: FiCheck,
    title: "Quality Guaranteed",
    description: "All equipment is professionally maintained and tested"
  },
  {
    icon: FiClock,
    title: "Flexible Durations",
    description: "Daily, weekly, or monthly rentals to suit your needs"
  },
  {
    icon: FiDollarSign,
    title: "No Hidden Fees",
    description: "Transparent pricing with all costs included upfront"
  },
  {
    icon: FiShield,
    title: "Damage Protection",
    description: "Optional coverage available for peace of mind"
  }
];

export default function PremiumRentalShowcase() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Professional Equipment
            </span>{" "}
            Rental Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Access top-tier technology without the capital investment. Perfect for businesses, events, and creative projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Browse All Equipment
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              Speak to an Expert
            </motion.button>
          </div>
        </motion.div>

        {/* Benefits Carousel */}
        <div className="mb-24">
          <Swiper
            modules={[Pagination, Autoplay]}
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
                <div className="bg-white p-8 rounded-2xl shadow-md h-full flex flex-col items-center text-center">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-full mb-6">
                    <benefit.icon className="text-3xl text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Category Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl shadow-xl overflow-hidden group"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent px-4 py-6 sm:px-8 sm:py-10 text-white flex flex-col justify-between">
                <div className="overflow-y-auto max-h-[67%]">
                  <div className="flex items-center mb-4">
                    <category.icon className="text-3xl mr-3" />
                    <span className="text-lg font-semibold">{category.pricing}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                  <ul className="space-y-2 text-sm sm:text-base">
                    {category.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="mt-1 mr-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md"
                  >
                    View Options
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg"
                  >
                    Quick Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Elevate Your Next Project?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our rental specialists are standing by to help you find the perfect equipment solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              Call Us: 97865 84344
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
