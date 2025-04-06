// import React, { useState } from 'react';
// import { 
//   FiPhone, 
//   FiInstagram, 
//   FiFacebook,
//   FiX,
//   FiChevronRight,
//   FiMail
// } from 'react-icons/fi';
// import { FaWhatsapp } from 'react-icons/fa';

// const MobileStickyContact = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className="lg:hidden fixed right-0 bottom-1/2 transform translate-y-1/2 z-50 transition-all duration-300">
//       {/* Closed State - Sticky Tab */}
//       {!expanded && (
//         <button
//           onClick={() => setExpanded(true)}
//           className="flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 text-white h-14 w-14 rounded-l-lg shadow-xl"
//           aria-label="Open contact options"
//         >
//           <div className="relative">
//             <FiPhone className="text-2xl animate-pulse" />
//             <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></span>
//           </div>
//         </button>
//       )}

//       {/* Expanded State */}
//       {expanded && (
//         <div className="bg-white rounded-l-lg shadow-2xl overflow-hidden w-72">
//           {/* Header */}
//           <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 text-white flex justify-between items-center">
//             <h3 className="font-bold text-lg">Contact Us</h3>
//             <button 
//               onClick={() => setExpanded(false)}
//               className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition"
//               aria-label="Close contact options"
//             >
//               <FiX className="text-xl" />
//             </button>
//           </div>

//           {/* Contact Options */}
//           <div className="p-4 space-y-3">
//             {/* Call Options */}
//             <div className="bg-gray-50 rounded-lg p-3">
//               <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
//                 <FiPhone className="mr-2 text-blue-600" />
//                 Call Directly
//               </h4>
//               <div className="space-y-2">
//                 <a
//                   href="tel:7888915584"
//                   className="flex items-center justify-between p-2 bg-white rounded-md hover:bg-blue-50 transition"
//                 >
//                   <span className="text-gray-800">+91 78889 15584</span>
//                   <FiChevronRight className="text-gray-400" />
//                 </a>
//                 <a
//                   href="tel:7986584344"
//                   className="flex items-center justify-between p-2 bg-white rounded-md hover:bg-blue-50 transition"
//                 >
//                   <span className="text-gray-800">+91 79865 84344</span>
//                   <FiChevronRight className="text-gray-400" />
//                 </a>
//               </div>
//             </div>

//             {/* WhatsApp */}
//             <a
//               href="https://wa.me/917888915584"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition"
//             >
//               <div className="flex items-center">
//                 <FaWhatsapp className="text-2xl text-green-600 mr-3" />
//                 <span className="font-medium text-gray-800">Chat on WhatsApp</span>
//               </div>
//               <FiChevronRight className="text-gray-400" />
//             </a>

//             {/* Email */}
//             <a
//               href="mailto:bhardwajelectrical2023@gmail.com"
//               className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
//             >
//               <div className="flex items-center">
//                 <FiMail className="text-2xl text-blue-600 mr-3" />
//                 <span className="font-medium text-gray-800">Send Email</span>
//               </div>
//               <FiChevronRight className="text-gray-400" />
//             </a>

//             {/* Social Media */}
//             <div className="pt-2">
//               <h4 className="font-semibold text-gray-700 mb-2">Follow Us</h4>
//               <div className="flex space-x-3">
//                 <a
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-lg flex items-center justify-center shadow hover:shadow-md transition"
//                 >
//                   <FiInstagram className="text-2xl" />
//                 </a>
//                 <a
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow hover:shadow-md transition"
//                 >
//                   <FiFacebook className="text-2xl" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileStickyContact;



import React, { useState } from 'react';
import { 
  FiPhone, 
  FiX,
  FiChevronRight,
  FiMail
} from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const MobileStickyContact = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="lg:hidden fixed right-0 bottom-1/2 transform translate-y-1/2 z-50">
      {/* Floating Action Button */}
      <AnimatePresence>
        {!expanded && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            onClick={() => setExpanded(true)}
            className="flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white h-14 w-14 rounded-l-lg shadow-xl hover:shadow-2xl transition-all"
            aria-label="Open contact options"
          >
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <RiCustomerService2Line className="text-2xl" />
            </motion.div>
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded Panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white rounded-l-lg shadow-2xl overflow-hidden w-72 border-l border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center">
                <RiCustomerService2Line className="text-xl mr-2" />
                <h3 className="font-bold text-lg">Contact Options</h3>
              </div>
              <button 
                onClick={() => setExpanded(false)}
                className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition"
                aria-label="Close contact options"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Contact Options */}
            <div className="p-4 space-y-4">
              {/* Call Options */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-xl p-3 border border-gray-100"
              >
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <HiOutlinePhone className="mr-2 text-indigo-600 text-xl" />
                  Call Directly
                </h4>
                <div className="space-y-2">
                  {/* <a
                    href="tel:7888915584"
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-indigo-50 transition border border-gray-100"
                  >
                    <span className="text-gray-800 font-medium">+91 78889 15584</span>
                    <FiChevronRight className="text-gray-400" />
                  </a> */}
                  <a
                    href="tel:7986584344"
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-indigo-50 transition border border-gray-100"
                  >
                    <span className="text-gray-800 font-medium">+91 79865 84344</span>
                    <FiChevronRight className="text-gray-400" />
                  </a>
                </div>
              </motion.div>

              {/* Social Messaging - Single Row */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-semibold text-gray-700 mb-3">Message Us</h4>
                <div className="grid grid-cols-3 gap-2">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917986584344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-[#fff] bg-opacity-10 rounded-lg hover:bg-opacity-20 transition border border-green-100"
                  >
                    <FaWhatsapp className="text-2xl text-[#25D366]" />
                    <span className="text-xs mt-1 font-medium text-gray-700">WhatsApp</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://m.me/yourpagename"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-[#fff] bg-opacity-10 rounded-lg hover:bg-opacity-20 transition border border-blue-100"
                  >
                    <FaFacebook className="text-2xl text-[#1877F2]" />
                    <span className="text-xs mt-1 font-medium text-gray-700">Messenger</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/direct"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-[#fff] bg-opacity-10 rounded-lg hover:bg-opacity-20 transition border border-pink-100"
                  >
                    <FaInstagram className="text-2xl text-[#E1306C]" />
                    <span className="text-xs mt-1 font-medium text-gray-700">Instagram</span>
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="mailto:bhardwajelectrical2023@gmail.com"
                  className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition border border-indigo-100"
                >
                  <div className="flex items-center">
                    <HiOutlineMail className="text-2xl text-indigo-600 mr-3" />
                    <span className="font-medium text-gray-800">Send Email</span>
                  </div>
                  <FiChevronRight className="text-gray-400" />
                </a>
              </motion.div>

              {/* Social Media Follow */}
              {/* <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <h4 className="font-semibold text-gray-700 mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white rounded-lg flex items-center justify-center shadow hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileStickyContact;