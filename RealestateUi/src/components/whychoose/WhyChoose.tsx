import React from "react";
import {
  FaMapMarkedAlt,
  FaKey,
  FaHandsHelping,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
const features = [
  {
    title: "Local Market Expertise",
    description:
      "Deep knowledge of Dubai’s neighborhoods, trends, and regulations ensures accurate guidance and smart investment decisions.",
    icon: <FaMapMarkedAlt className="text-[#1A3E72] text-4xl" />, // Better than invoice, map for locality
  },
  {
    title: "Exclusive Listings & Early Access",
    description:
      "Priority access to off-plan launches and premium properties before they reach the wider market.",
    icon: <FaKey className="text-[#1A3E72] text-4xl" />, // Key = access, exclusivity
  },
  {
    title: "End-to-End Support",
    description:
      "From property selection and negotiation to paperwork, financing, and handover, every step is handled seamlessly.",
    icon: <FaHandsHelping className="text-[#1A3E72] text-4xl" />, // Represents full support & assistance
  },
  {
    title: "Trusted Developer Partnerships",
    description:
      "Established relationships with Dubai’s top and award-winning developers guarantee quality projects and secure transactions.",
    icon: <FaHandshake className="text-[#1A3E72] text-4xl" />, // Partnership & trust
  },
  {
    title: "Tailored Investment Strategies",
    description:
      "Personalized advice based on your budget, goals, and risk profile to maximize returns and long-term value.",
    icon: <FaChartLine className="text-[#1A3E72] text-4xl" />, // Represents growth & strategy
  },
];


  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-[#1A3E72] font-medium flex items-center gap-2">
            <span className="text-xl">🏠</span> WHY CHOOSE US
          </p>
          <h2 className="text-4xl font-bold mt-2">
            Trust, Confidence, Deliver
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-xl">
            With expert knowledge, personalized service, and a proven track record, we ensure a seamless and successful real estate experience.

          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border bg-[#fffaf5] shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-md leading-relaxed">{feature.description}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button className="text-sm font-medium text-black border-b border-black hover:text-[#1A3E72]">
                  Consult Now →
                </button>
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
