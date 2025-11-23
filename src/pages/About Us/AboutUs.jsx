// AboutUsSection.jsx
import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section className="py-16 px-6 bg-base-200">
      <div className="max-w-10/12 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 shadow-lg transform hover:scale-105 transition">
              <BookOpen className="w-32 md:w-40 h-32 md:h-40 text-white" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About <span className="text-secondary">The Book Heaven</span>
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-8">
              Welcome to The Book Heaven, your ultimate digital sanctuary for
              book lovers. We bring together an extensive collection of books
              spanning every genre imaginable, from timeless classics to
              contemporary bestsellers. Our mission is to make quality
              literature accessible to everyone, fostering a love for reading
              and creating a community where book enthusiasts can explore,
              collect, and celebrate the written word.
            </p>
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-8">
              Whether you’re a casual reader or a passionate bibliophile, The
              Book Heaven offers a space to discover new titles, revisit old
              favorites, and share your journey with fellow readers. We believe
              books have the power to inspire, educate, and transform lives —
              and we’re here to make that experience seamless and enjoyable.
            </p>
            <Link to="/aboutUs">
              <button className="btn btn-primary text-lg flex items-center gap-2">
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
