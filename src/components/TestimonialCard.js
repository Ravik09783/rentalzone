import Rating from './Rating';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full transform transition-all hover:scale-[1.02] hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-500"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      <Rating value={testimonial.rating} />
      <p className="mt-4 text-gray-600 italic">"{testimonial.comment}"</p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          Rented: <span className="font-medium">{testimonial.itemsRented.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;