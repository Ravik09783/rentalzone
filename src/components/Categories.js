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
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Premium Equipment Rental Solutions
        </h2>
        <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto text-center">
          Why buy when you can rent? Access top-tier professional equipment without the heavy investment. Perfect for events, businesses, and creative projects.
        </p>

        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`mb-24 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
          >
            <div className="md:w-1/2">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {category.name} Rental Services
              </h3>
              
              <div className="prose prose-lg text-gray-700">
                {category.name === "Audio Equipment" && (
                  <p>
                    Elevate your events with our professional audio equipment rentals. Whether you're hosting a corporate conference, wedding reception, or live concert, our inventory includes high-end mixers, PA systems, wireless microphones, and studio-grade recording gear. All equipment is regularly maintained and comes with optional technical support to ensure flawless audio performance throughout your rental period.
                  </p>
                )}
                
                {category.name === "Projectors & Displays" && (
                  <p>
                    Make an impact with our premium projection solutions. We offer short-throw and ultra-bright projectors (up to 10,000 lumens) with 4K resolution perfect for boardroom presentations, outdoor movie nights, or large venue events. Packages include projection screens up to 300", mounting hardware, and HDMI cables. Our team can advise on the ideal setup for your specific venue and audience size.
                  </p>
                )}
                
                {category.name === "Microphones & Sound" && (
                  <p>
                    Crystal clear audio starts with the right microphone. Choose from our selection of handheld, lapel, headset, and shotgun mics from trusted brands like Shure and Sennheiser. Ideal for panel discussions, theater productions, or video shoots. We provide complete kits with stands, windscreens, and necessary accessories. Ask about our wireless systems for maximum mobility during events.
                  </p>
                )}
                
                {category.name === "Laptops & Workstations" && (
                  <p>
                    Temporary computing power when you need it. Our laptop rentals feature the latest business-class machines from Dell and HP with optional docking stations and dual monitor setups. Perfect for training sessions, temporary staff, or while your equipment is being repaired. All systems come pre-loaded with Office 365 and are thoroughly sanitized between rentals. Flexible daily, weekly, or monthly rental terms available.
                  </p>
                )}
                
                <div className="mt-6">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition duration-300">
                    View {category.name} Rental Options
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



