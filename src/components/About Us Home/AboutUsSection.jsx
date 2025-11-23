import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section
      className="
        py-16 px-6 
        bg-base-100 // Light Mode: Standard Card/Section BG (usually lightest shade)
        dark:bg-base // Dark Mode: Slightly darker than base-100 to contrast with the page/other sections
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Icon */}
          <div className="flex justify-center">
            <div
              className="
                bg-gradient-to-br from-primary to-accent 
                rounded-3xl p-12 shadow-2xl 
                transform hover:scale-105 transition-transform duration-300
              "
            >
              <BookOpen className="w-32 md:w-40 h-32 md:h-40 text-white" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-6">
              About <span className="text-primary">The Book Heaven</span>
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-8">
              Welcome to The Book Heaven, your ultimate digital sanctuary for
              book lovers...
            </p>
            <Link to="/aboutUs">
              <button
                className="
                  bg-gradient-to-r from-primary to-accent 
                  text-white px-8 py-3 rounded-full font-semibold text-lg 
                  flex items-center gap-2 
                  hover:from-accent hover:to-primary 
                  transition-all duration-300 shadow-lg hover:shadow-xl 
                  transform hover:-translate-y-1
                "
              >
                Know More
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
