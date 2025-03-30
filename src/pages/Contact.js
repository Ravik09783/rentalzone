export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you! Get in touch with us using the details
          below.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            {/* <div className="flex items-center space-x-3">
                <span className="text-blue-600 font-semibold">📍 Address:</span>
                <p className="text-gray-700 capitalize">Shop no 3, Jarnail enclave, bhabat road zirakpur, punjab 140603</p>
              </div> */}
            <div className="flex items-center space-x-3 flex-wrap md:flex-nowrap">
              <span className="text-blue-600 font-semibold whitespace-nowrap">
                📍 Address:
              </span>
              <p className="text-gray-700 capitalize">
                Shop no 3, Jarnail enclave, Bhabat road, Zirakpur, Punjab 140603
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 font-semibold">📞 Phone:</span>
              <p className="text-gray-700">7888915584</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 font-semibold">📞 Phone:</span>
              <p className="text-gray-700">7986584344</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 font-semibold">📧 Email:</span>
              <p className="text-gray-700">bhardwajelectrical2023@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 font-semibold">📲 Social:</span>
              <a
                href="https://instagram.com"
                className="text-blue-500 hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                className="text-blue-500 hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full h-64 md:h-auto">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=30.6431,76.8173"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                className="w-full h-full rounded-lg shadow-sm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.528123542047!2d76.8145!3d30.6431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzM1LjIiTiA3NsKwNDknMDIuMCJF!5e0!3m2!1sen!2sin!4v1614954474575!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
