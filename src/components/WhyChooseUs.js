import TestimonialCard from './TestimonialCard';

const WhyChooseUs = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      location: "Mohali, Punjab",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.5,
      comment: "Excellent service! The projector and sound system worked perfectly for our corporate event.",
      itemsRented: ["Projector", "Speakers", "Mic"]
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Chandigarh",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "Reliable equipment and on-time delivery. Will definitely rent again for our next conference.",
      itemsRented: ["Laptop", "Projector Screen", "TV"]
    },
    {
      id: 3,
      name: "Amit Singh",
      location: "Panchkula",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
      comment: "Good quality equipment at reasonable prices. Technical support was very helpful.",
      itemsRented: ["Speakers", "Mic", "Lighting"]
    }
  ];

  const features = [
    {
      title: "Premium Equipment",
      description: "Top-quality, well-maintained devices from leading brands",
      icon: "🖥️"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance for your events",
      icon: "📞"
    },
    {
      title: "Flexible Rentals",
      description: "Daily, weekly, and monthly rental options available",
      icon: "⏱️"
    },
    {
      title: "Quick Delivery",
      description: "On-time setup and pickup across Tricity",
      icon: "🚚"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gray-50 mb-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Why Choose Bhardwaj Electricals?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by 100+ clients for their event equipment needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">What Our Clients Say</h3>
          <p className="text-gray-600">Hear from our satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-3xl font-bold text-blue-600">100+</p>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-3xl font-bold text-blue-600">500+</p>
            <p className="text-gray-600">Events Supported</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-3xl font-bold text-blue-600">4.8/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;