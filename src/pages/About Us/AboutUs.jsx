import React from "react";
import {
  BookOpen,
  Heart,
  Users,
  Target,
  Sparkles,
  Library,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {}
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">About The Book Heaven</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Your Ultimate Digital Sanctuary for Book Lovers
          </p>
        </div>
      </div>

      {}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-amber-500" />
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to{" "}
              <span className="font-semibold text-amber-600">
                The Book Heaven
              </span>
              , where literary dreams come to life. Born from a passion for
              reading and a vision to make quality literature accessible to
              everyone, we've created more than just a digital library – we've
              built a paradise for readers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In a world where books open doors to infinite possibilities, we
              believe every reader deserves a sanctuary where they can explore,
              discover, and celebrate the written word. The Book Heaven brings
              together an extensive collection of books spanning every genre
              imaginable, creating a haven where stories find their home.
            </p>
          </div>

          {}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-md">
              <Library className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Vast Digital Library
              </h3>
              <p className="text-gray-700">
                Explore thousands of carefully curated books across fiction,
                non-fiction, romance, science fiction, mystery, thriller,
                self-help, biography, academic resources, and more. From
                timeless classics to contemporary bestsellers, we have something
                for every reader.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-md">
              <Heart className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Personal Collections
              </h3>
              <p className="text-gray-700">
                Create and organize your own personalized book collection, track
                your reading journey, and build your dream digital bookshelf.
                Your literary world, curated by you, accessible anywhere,
                anytime.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                For Every Reader
              </h3>
              <p className="text-gray-700">
                Whether you're a casual reader seeking entertainment, an avid
                bibliophile hunting for hidden gems, or a student in search of
                academic resources, The Book Heaven caters to all reading
                preferences and levels.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-md">
              <Target className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                User-Friendly Experience
              </h3>
              <p className="text-gray-700">
                Navigate through our intuitive interface designed for seamless
                browsing, searching, and discovering. Access comprehensive book
                details, author information, summaries, and reviews to make
                informed reading choices.
              </p>
            </div>
          </div>

          {}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-center leading-relaxed max-w-4xl mx-auto">
              To make quality literature accessible to everyone, fostering a
              love for reading and creating a vibrant community where book
              enthusiasts can explore, collect, and celebrate the written word.
              We're not just a bookstore – we're a movement to keep the magic of
              reading alive in the digital age.
            </p>
          </div>

          {}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Why Choose The Book Heaven?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  1000+
                </div>
                <p className="text-gray-700 font-semibold">Books Available</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  24/7
                </div>
                <p className="text-gray-700 font-semibold">Access Anytime</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  100%
                </div>
                <p className="text-gray-700 font-semibold">
                  Reader Satisfaction
                </p>
              </div>
            </div>
          </div>

          {}
          <div className="mt-16 text-center bg-gray-50 rounded-2xl p-10">
            <p className="text-xl text-gray-800 italic max-w-3xl mx-auto">
              "Every visit to The Book Heaven opens the door to new worlds of
              imagination and knowledge. Join us in this literary journey, and
              discover why readers call us their paradise."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
