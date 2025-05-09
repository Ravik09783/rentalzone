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
      description: "Top-quality, well-maintained devices from leading brands.",
      icon: "🎧"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance for your events.",
      icon: "📞"
    },
    {
      title: "Flexible Rentals",
      description: "Daily, weekly, and monthly rental options available.",
      icon: "🗓️"
    },
    {
      title: "Quick Delivery",
      description: "On-time setup and pickup across Tricity region.",
      icon: "🚚"
    },
    {
      title: "Expert Guidance",
      description: "Consult our AV professionals for tailored setups.",
      icon: "🧠"
    },
    {
      title: "Hygiene & Safety",
      description: "All equipment is thoroughly sanitized before dispatch.",
      icon: "🧼"
    },
    {
      title: "On-Site Setup",
      description: "Trained technicians available for installation.",
      icon: "🛠️"
    },
    {
      title: "Affordable Packages",
      description: "Custom packages available to fit your event budget.",
      icon: "💰"
    }
  ];

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Why Choose <span className="text-blue-600">Bhardwaj Electricals?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing trusted rental solutions for corporate events, weddings, and productions across the Tricity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-2">What Our Clients Say</h3>
          <p className="text-gray-600">Real feedback from real events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-4xl font-bold text-blue-600">100+</p>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-4xl font-bold text-blue-600">500+</p>
            <p className="text-gray-600 text-sm">Successful Events</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-4xl font-bold text-blue-600">4.8</p>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-4xl font-bold text-blue-600">24/7</p>
            <p className="text-gray-600 text-sm">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
