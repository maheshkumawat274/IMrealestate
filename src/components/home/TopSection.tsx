

import React from "react";

interface HeroProps {
  videoSrc?: string;
  posterSrc?: string;
  title?: string;
  subtitle?: string;
}

const TopSection: React.FC<HeroProps> = ({
  videoSrc = "/imgs/realestate.mp4", // change to your video path or URL
  posterSrc = "/imags/hero-poster.jpg", // fallback image
  title = "Start Early. Save More. Buy with Confidence.",
  subtitle = "Discover hand-picked early-investment properties in Dubai’s prime locations—trusted by new investors and backed by the city’s award-winning developers.",
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video (fill) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Overlay for opacity + tint */}
      <div className="absolute inset-0 bg-black/60 " />

      {/* Content container */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-12">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
            >
              Get Free Consultation
            </a>
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-white/30 text-white font-semibold hover:bg-white/10 transition"
            >
              Find Dream Project

            </a> */}
          </div>
        </div>
      </div>

      {/* Decorative bottom curve (optional) */}
      {/* <svg
        className="absolute bottom-0 left-0 w-full h-12 md:h-20 text-white/90"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,106.7C672,96,768,96,864,85.3C960,75,1056,53,1152,64C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg> */}
    </section>
  );
};

export default TopSection;
