const categories = [
  {
    name: "Audio Equipment",
    image: "https://i0.wp.com/viknick.com/wp-content/uploads/2024/09/Zoom-H2N-Recorder2.jpg?resize=457%2C457&ssl=1",
    description: "Get premium audio gear for crystal-clear sound at events, podcasts, and recordings without the high cost of ownership."
  },
  {
    name: "Projectors & Displays",
    image: "https://i0.wp.com/viknick.com/wp-content/uploads/2018/09/Epson-Projector-1-900-x-900.jpg?resize=768%2C768&ssl=1",
    description: "Rent high-quality projectors and screens for business presentations, home theaters, and conferences at affordable rates."
  },
  {
    name: "Microphones & Sound",
    image: "https://i0.wp.com/viknick.com/wp-content/uploads/2024/06/podcast-mic-1.jpg?fit=859%2C1000&ssl=1",
    description: "Choose from a variety of professional microphones for speeches, interviews, and live events with top-tier sound quality."
  },
  {
    name: "Laptops & Workstations",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5450-laptop/mg/notebook-latitude-14-5450t-ir-gallery-12.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4320&hei=2721&qlt=100,1&resMode=sharp2&size=4320,2721&chrss=full&imwidth=5000",
    description: "Rent high-performance laptops for remote work, business use, and personal needs—saving you the hassle of upfront investment."
  },
];

export default function Categories() {
  return (
    <section className="w-full py-16 px-6 bg-gray-50 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Explore Our Rental Categories</h2>
      <p className="text-lg text-gray-700 mb-10 max-w-2xl text-center">
        Get premium equipment on rent and save costs while enjoying professional-grade features. Whether for events, work, or entertainment, we’ve got you covered!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-xl bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative w-full overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <div className="absolute inset-0 br-[#D3D3D3] bg-opacity-40 flex items-center justify-center">
                <h3 className="text-[#FACC15] text-2xl font-semibold">{category.name}</h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <p className="text-gray-300 text-sm">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



