// import React from "react";

const categories = [
    { name: "Audio", image: "https://via.placeholder.com/150" },
    { name: "Video", image: "https://via.placeholder.com/150" },
    { name: "Mic", image: "https://via.placeholder.com/150" },
    { name: "Laptop", image: "https://via.placeholder.com/150" },
  ];
  
  export default function Categories() {
    return (
      <section className="w-full p-6 bg-gray-100 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Categories</h2>
        <div className="grid grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-64 h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  