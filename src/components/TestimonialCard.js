const TestimonialCard = ({ testimonial }) => {
  const { name, location, avatar, comment, rating, itemsRented } = testimonial;

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-3 italic">“{comment}”</p>
      <div className="text-yellow-400 text-sm mb-2">
        {"★".repeat(Math.floor(rating)) + (rating % 1 ? "½" : "")}
      </div>
      <div className="text-xs text-gray-500">Items Rented: {itemsRented.join(", ")}</div>
    </div>
  );
};

export default TestimonialCard;
