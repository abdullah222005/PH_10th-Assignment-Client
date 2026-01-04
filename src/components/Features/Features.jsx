import {
  FaBookOpen,
  FaUserFriends,
  FaStar,
  FaCloudUploadAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen className="text-4xl text-primary" />,
    title: "Vast Book Collection",
    description:
      "Explore a growing collection of books across multiple categories, carefully curated for readers of all tastes.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-primary" />,
    title: "Personal Library",
    description:
      "Create and manage your own book collection, track your reads, and organize books your way.",
  },
  {
    icon: <FaStar className="text-4xl text-primary" />,
    title: "Ratings & Reviews",
    description:
      "Share your thoughts, rate books, and read honest reviews from other passionate readers.",
  },
  {
    icon: <FaCloudUploadAlt className="text-4xl text-primary" />,
    title: "Add Your Own Books",
    description:
      "Contribute to the community by adding books and helping others discover new reads.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Why Choose <span className="text-primary">The Book Heaven</span>?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A modern platform built for book lovers to explore, organize, and
            share their reading journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 hover:shadow-xl transition duration-300"
            >
              <div className="card-body items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="text-gray-500 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
