import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesSection1: React.FC = () => {
  return (
    <section id="services" className="px-4 py-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Small Heading */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-600 text-xl">🏠</span>
            <p className="uppercase tracking-wide text-sm font-semibold text-gray-600">
              Our Services
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A3E72] mb-6">
            Newest Off-Plan Projects & Prime Investment Opportunities

          </h2>

          {/* Consult Link */}
          <a
            href="#consult"
            className="inline-flex items-center gap-2 text-black font-medium border-b border-black hover:text-[#1A3E72] transition"
          >
            Consult Now <ArrowRight size={18} />
          </a>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-gray-600 text-md sm:text-lg leading-relaxed">
            Explore Dubai’s top off-plan opportunities, carefully selected for maximum growth and value. From upscale apartments to high-yield projects, our exclusive listings give you early access to developments that match your investment strategy.

          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection1;
