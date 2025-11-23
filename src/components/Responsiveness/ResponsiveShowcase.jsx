import React from "react";
import bgRsp from '../../assets/responsiveness-bg.jpg'
import resp from '../../assets/responsiveness.png';


const ResponsiveShowcase = ()=> {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f3ea] py-20">
      {/* Background Image */}
      <img
        src={bgRsp}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 pointer-events-none"
      />

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Left – Text Content */}
        <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Fully Responsive &
            <span className="text-purple-600"> Modern UI</span>
          </h2>

          <p className="text-gray-700 text-lg">
            Seamlessly adapts across all devices. Clean, modern and elegant
            interface optimized for mobile, tablet and desktop.
          </p>

          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg transition shadow">
            Learn More
          </button>
        </div>

        {/* Right – Tablet Image */}
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
}

export default ResponsiveShowcase;