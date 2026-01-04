// ResponsiveShowcase.jsx
import React from "react";
import bgRsp from "../../assets/responsiveness-bg.jpg";
import resp from "../../assets/responsiveness.png";

const ResponsiveShowcase = () => {
  return (
    <section className="relative w-full overflow-hidden bg-base-200 py-20">
      {/* Background */}
      <img
        src={bgRsp}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70 pointer-events-none"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text */}
        <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Fully Responsive & <span className="text-secondary">Modern UI</span>
          </h2>

          <p className="text-secondary text-base md:text-lg">
            Seamlessly adapts across all devices. Clean, modern and elegant
            interface optimized for mobile, tablet and desktop.
          </p>

          <button className="btn btn-primary text-lg">Learn More</button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={resp}
            alt="tablet preview"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ResponsiveShowcase;
