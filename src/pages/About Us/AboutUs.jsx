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
    // Main Container: Base background color changes with the theme
    <div className="min-h-screen bg-base-100 dark:bg-base-300 text-neutral dark:text-secondary transition-colors duration-300">
      {/* Hero Section: Re-fixed color logic to ensure gradient is overridden in dark mode */}
      <div
        className="
        // Light Mode (Default): Amber/Orange Gradient
        text-white 
        
        // Dark Mode Override: Dark Gradient (forces background-image property to change)
        dark:bg-gradient-to-r dark:from-neutral dark:to-base-300 
        dark:text-secondary 
        
        py-20 px-6 transition-colors duration-300
      "
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Icon color now inherits the parent text color, with a slight adjustment for dark mode primary brand color */}
          <BookOpen className="w-16 h-16 mx-auto mb-6 dark:text-primary" />

          {/* Title inherits the parent text color (white in light, secondary in dark) */}
          <h1 className="text-5xl font-bold mb-4">About The Book Heaven</h1>

          {/* Subtitle inherits the parent text color */}
          <p className="text-xl max-w-3xl mx-auto">
            Your Ultimate Digital Sanctuary for Book Lovers
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-none">
          {/* Our Story Section - Elevated background */}
          <div className="bg-base-100 dark:bg-base-200 rounded-2xl shadow-xl dark:shadow-none p-8 mb-12">
            <h2 className="text-3xl font-bold text-neutral dark:text-secondary mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              Our Story
            </h2>
            <p className="text-neutral/80 dark:text-secondary/90 leading-relaxed mb-4">
              Welcome to{" "}
              <span className="font-semibold text-primary">
                The Book Heaven
              </span>
              , where literary dreams come to life. Born from a passion for
              reading and a vision to make quality literature accessible to
              everyone, we've created more than just a digital library – we've
              built a paradise for readers.
            </p>
            <p className="text-neutral/80 dark:text-secondary/90 leading-relaxed">
              In a world where books open doors to infinite possibilities, we
              believe every reader deserves a sanctuary where they can explore,
              discover, and celebrate the written word. The Book Heaven brings
              together an extensive collection of books spanning every genre
              imaginable, creating a haven where stories find their home.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-base-100 dark:bg-base-200 rounded-2xl p-8 shadow-md dark:shadow-none">
              <Library className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-neutral dark:text-secondary mb-4">
                Vast Digital Library
              </h3>
              <p className="text-neutral/80 dark:text-secondary/90">
                Explore thousands of carefully curated books across fiction,
                non-fiction, romance, science fiction, mystery, thriller,
                self-help, biography, academic resources, and more. From
                timeless classics to contemporary bestsellers, we have something
                for every reader.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-base-100 dark:bg-base-200 rounded-2xl p-8 shadow-md dark:shadow-none">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-neutral dark:text-secondary mb-4">
                Personal Collections
              </h3>
              <p className="text-neutral/80 dark:text-secondary/90">
                Create and organize your own personalized book collection, track
                your reading journey, and build your dream digital bookshelf.
                Your literary world, curated by you, accessible anywhere,
                anytime.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-base-100 dark:bg-base-200 rounded-2xl p-8 shadow-md dark:shadow-none">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-neutral dark:text-secondary mb-4">
                For Every Reader
              </h3>
              <p className="text-neutral/80 dark:text-secondary/90">
                Whether you're a casual reader seeking entertainment, an avid
                bibliophile hunting for hidden gems, or a student in search of
                academic resources, The Book Heaven caters to all reading
                preferences and levels.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-base-100 dark:bg-base-200 rounded-2xl p-8 shadow-md dark:shadow-none">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-neutral dark:text-secondary mb-4">
                User-Friendly Experience
              </h3>
              <p className="text-neutral/80 dark:text-secondary/90">
                Navigate through our intuitive interface designed for seamless
                browsing, searching, and discovering. Access comprehensive book
                details, author information, summaries, and reviews to make
                informed reading choices.
              </p>
            </div>
          </div>

          {/* Our Mission Section - Primary Brand Color background */}
          <div className="bg-gradient-to-r from-primary/90 to-amber-500 dark:bg-primary text-white rounded-2xl p-10 shadow-xl dark:shadow-none">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-center leading-relaxed max-w-4xl mx-auto dark:text-base-100">
              To make quality literature accessible to everyone, fostering a
              love for reading and creating a vibrant community where book
              enthusiasts can explore, collect, and celebrate the written word.
              We're not just a bookstore – we're a movement to keep the magic of
              reading alive in the digital age.
            </p>
          </div>

          {/* Why Choose Us? (Stats) */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-neutral dark:text-secondary mb-8">
              Why Choose The Book Heaven?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  1000+
                </div>
                <p className="text-neutral/80 dark:text-secondary/90 font-semibold">
                  Books Available
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-neutral/80 dark:text-secondary/90 font-semibold">
                  Access Anytime
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-neutral/80 dark:text-secondary/90 font-semibold">
                  Reader Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section - Secondary background color */}
          <div className="mt-16 text-center bg-base-200 dark:bg-base-300 rounded-2xl p-10">
            <p className="text-xl text-neutral dark:text-secondary italic max-w-3xl mx-auto">
              "Every visit to The Book Heaven opens the door to new worlds of
              imagination and knowledge. Join us in this literary journey, and
              discover why readers call us their paradise."
            </p>
          </div>
        </div>
      </div>

      {/* Legal & Policies Section */}
      <div className="pb-10 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-primary mb-10">
          Legal & Policies
        </h2>

        <div className="space-y-4">
          {/* Terms of Use */}
          <div className="collapse collapse-arrow bg-base-200 dark:bg-base-300 rounded-xl">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">
              Terms of Use
            </div>
            <div className="collapse-content text-neutral/80 dark:text-secondary/90 leading-relaxed">
              <p>
                By accessing and using{" "}
                <span className="font-semibold">The Book Heaven</span>, you
                agree to use the platform responsibly and ethically. Users are
                expected to respect intellectual property rights and refrain
                from submitting harmful, misleading, or inappropriate content.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="collapse collapse-arrow bg-base-200 dark:bg-base-300 rounded-xl">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">
              Privacy Policy
            </div>
            <div className="collapse-content text-neutral/80 dark:text-secondary/90 leading-relaxed">
              <p>
                Your privacy is important to us. We collect only essential
                information such as account details to provide our services. We
                never sell or share your personal data with third parties
                without your consent.
              </p>
            </div>
          </div>

          {/* Cookie Policy */}
          <div className="collapse collapse-arrow bg-base-200 dark:bg-base-300 rounded-xl">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">
              Cookie Policy
            </div>
            <div className="collapse-content text-neutral/80 dark:text-secondary/90 leading-relaxed">
              <p>
                The Book Heaven uses cookies to enhance user experience, analyze
                usage, and improve performance. By continuing to use our
                platform, you consent to the use of cookies in accordance with
                this policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
