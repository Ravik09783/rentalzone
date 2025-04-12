import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value }) => {
  const stars = Array(5).fill(0);
  
  return (
    <div className="flex items-center">
      {stars.map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={index} className="text-yellow-400">
            {value >= starValue ? (
              <FaStar className="w-4 h-4 md:w-5 md:h-5" />
            ) : value >= starValue - 0.5 ? (
              <FaStarHalfAlt className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <FaRegStar className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </span>
        );
      })}
      <span className="ml-1 text-gray-600 text-sm md:text-base">({value.toFixed(1)})</span>
    </div>
  );
};

export default Rating;