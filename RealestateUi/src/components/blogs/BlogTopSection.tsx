import React from "react";
import { ArrowRight } from "lucide-react";

const BlogTopSection: React.FC = () => {
  return (
    <section id="blog" className="px-4 py-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Small Heading */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-600 text-xl">🏠</span>
            <p className="uppercase tracking-wide text-sm font-semibold text-gray-600">
              What's New
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A3E72] mb-6">
            
          Real Estate Insights & Market Trends


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
           Stay informed with our in-depth articles on Dubai’s fast-growing off-plan real estate market. From selecting the right development to navigating payment plans, legal steps, and investment strategies, we share expert insights to help you make smart, future-focused decisions—whether you’re buying your first property or expanding your portfolio.


          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogTopSection;
