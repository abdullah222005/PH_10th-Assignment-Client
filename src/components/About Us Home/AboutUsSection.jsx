import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Icon */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-40 h-40 text-white" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-amber-600">The Book Heaven</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Welcome to The Book Heaven, your ultimate digital sanctuary for
              book lovers. We bring together an extensive collection of books
              spanning every genre imaginable, from timeless classics to
              contemporary bestsellers. Our mission is to make quality
              literature accessible to everyone, fostering a love for reading
              and creating a community where book enthusiasts can explore,
              collect, and celebrate the written word.
            </p>
            <Link to='/aboutUs'>
              <button className="bg-gradient-to-r from-amber-500 cursor-pointer to-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-2 hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
