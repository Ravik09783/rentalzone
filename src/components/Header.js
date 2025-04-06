import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/rental_logo.png"
import '../App.css';

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-yellow-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        {/* <h1 className="text-3xl font-bold text-blue-600">Just Rental Zone</h1> */}
        <img src={Logo} alt="logo" className="w-[60px]"/>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium decoration-none">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/products" className="hover:text-blue-500 transition">Products</Link>
          <Link to="/gallery" className="hover:text-blue-500 transition">Gallery</Link>
          <Link to="/services" className="hover:text-blue-500 transition">Services</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About me</Link>
          <Link to="/bill" className="hover:text-blue-500 transition">Admin</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <span className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:text-white transition">Sign In</span>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Get Started</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"}`}
      >
        <nav className="text-center space-y-4 text-lg font-medium">
          <Link to="/" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>About me</Link>
          <Link to="/services" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/products" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/bill" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Admin</Link>
          <Link to="/contact" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
          <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">Sign In</button>
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Get Started</button>
        </nav>
      </div>
    </header>
  );
}
