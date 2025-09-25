// src/components/Testimonials.tsx
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ali Bin Saleh",
    role: "Customer",
    message:"I was searching for an investment property, and they guided me very well. The company is honest, transparent, and I truly feel my investment is safe with them. I would highly recommend them to anyone looking for a reliable real estate partner.",
    avatar: "/imgs/ts-03.webp",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Customer",
    message:
      "As a real estate investor, I need an agency that understands the market deeply. Asgard delivered exceptional insights, identified high-potential properties, and secured great deals. Their expertise and professionalism are unmatched. 10/10!",
    avatar: "/imgs/profile1.jpeg",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Customer",
    message:
      "From the first consultation to closing the deal, their team was professional, responsive, and truly understood our needs. They helped us find our dream home in a competitive market, and their negotiation skills saved us thousands. Highly recommend!",
    avatar: "/imgs/profile2.jpg",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-[#fdf6e9] py-6 md:py-16">
      <div className="container max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#1A3E72] text-xl">🏠</span>
            <p className="uppercase tracking-wide text-sm font-semibold text-gray-600">
              Our CLIENTS
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Stories,{" "}
            <span className="text-[#1A3E72]">Real Success</span>, 5 Star Services 

          </h2>
          <p className="text-gray-600 mb-6">
            Helping clients secure future-ready homes and smart investments with expert guidance, trusted partnerships, and seamless off-plan property solutions tailored to their goals.

          </p>

          {/* Testimonial Card */}
          <div className="bg-white shadow-md rounded-md border p-4 sm:p-6 mb-6 ">
            <p className="text-gray-700 mb-4">"{testimonial.message}"</p>
            <div className="flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Dots for slider */}
          <div className="flex gap-2 mb-6">
            {testimonials.map((t, idx) => (
              <span
                key={t.id}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-[#1A3E72]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            {/* Small avatars */}
            <div className="flex -space-x-3">
              <img
                src="/imgs/profile1.jpeg"
                alt="client1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/imgs/profile3.jpg"
                alt="client2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/imgs/profile2.jpg"
                alt="client3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <p className="font-semibold text-gray-700 flex items-center">
              4.9/5{" "}
              <FaStar className="text-[#1A3E72] ml-1" /> (100+ Reviews)
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            We have 100+ Happy Clients
          </p>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src="/imgs/Beach-Residence-1.webp"
            alt="Luxury Room"
            className="rounded-lg shadow-lg object-cover w-full h-[300px] md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
