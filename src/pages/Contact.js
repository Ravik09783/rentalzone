// export default function Contact() {
//   return (
//     <section className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Contact Us
//         </h2>
//         <p className="text-gray-600 text-center mb-8">
//           We'd love to hear from you! Get in touch with us using the details
//           below.
//         </p>

//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Contact Info */}
//           <div className="space-y-4">
//             {/* <div className="flex items-center space-x-3">
//                 <span className="text-blue-600 font-semibold">📍 Address:</span>
//                 <p className="text-gray-700 capitalize">Shop no 3, Jarnail enclave, bhabat road zirakpur, punjab 140603</p>
//               </div> */}
//             <div className="flex items-center space-x-3 flex-wrap md:flex-nowrap">
//               <span className="text-blue-600 font-semibold whitespace-nowrap">
//                 📍 Address:
//               </span>
//               <p className="text-gray-700 capitalize">
//                 Shop no 3, Jarnail enclave, Bhabat road, Zirakpur, Punjab 140603
//               </p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <span className="text-blue-600 font-semibold">📞 Phone:</span>
//               <p className="text-gray-700">7888915584</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <span className="text-blue-600 font-semibold">📞 Phone:</span>
//               <p className="text-gray-700">7986584344</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <span className="text-blue-600 font-semibold">📧 Email:</span>
//               <p className="text-gray-700">bhardwajelectrical2023@gmail.com</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <span className="text-blue-600 font-semibold">📲 Social:</span>
//               <a
//                 href="https://instagram.com"
//                 className="text-blue-500 hover:underline"
//               >
//                 Instagram
//               </a>
//               <a
//                 href="https://facebook.com"
//                 className="text-blue-500 hover:underline"
//               >
//                 Facebook
//               </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="w-full h-64 md:h-auto">
//             <a
//               href="https://www.google.com/maps/dir/?api=1&destination=30.6431,76.8173"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <iframe
//                 className="w-full h-full rounded-lg shadow-sm"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.528123542047!2d76.8145!3d30.6431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzM1LjIiTiA3NsKwNDknMDIuMCJF!5e0!3m2!1sen!2sin!4v1614954474575!5m2!1sen!2sin"
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiClock } from 'react-icons/fi';
import MobileStickyContact from '../components/MobileStickyContact';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" id="contact">
      <MobileStickyContact />
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our rental services? Reach out to us anytime - we're happy to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-6 h-6 bg-yellow-400 mr-3 rounded-full"></span>
              Contact Details
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiMapPin className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    Shop No. 3, Jarnail Enclave<br />
                    Bhabat Road, Zirakpur<br />
                    Punjab - 140603
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                  <p className="text-gray-600 space-y-1">
                    <a href="tel:7888915584" className="block hover:text-blue-600 transition">+91 78889 15584</a>
                    <a href="tel:7986584344" className="block hover:text-blue-600 transition">+91 79865 84344</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiMail className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                  <a href="mailto:bhardwajelectrical2023@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                    bhardwajelectrical2023@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiClock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

              <div className="flex items-start pt-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <div className="flex space-x-2">
                    <FiInstagram className="text-blue-600 text-xl" />
                    <FiFacebook className="text-blue-600 text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                      Instagram
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Contact Form */}
          <div className="space-y-8">
            {/* Map Section */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.528123542047!2d76.8145!3d30.6431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzM1LjIiTiA3NsKwNDknMDIuMCJF!5e0!3m2!1sen!2sin!4v1614954474575!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-6 h-6 bg-yellow-400 mr-3 rounded-full"></span>
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}