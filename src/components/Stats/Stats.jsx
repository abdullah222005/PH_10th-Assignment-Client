import { FaBook, FaUsers, FaStar, FaUpload } from "react-icons/fa";

const Stats = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <FaBook className="text-4xl text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold">5,000+</h3>
            <p className="text-gray-500">Books Available</p>
          </div>

          <div>
            <FaUsers className="text-4xl text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold">2,000+</h3>
            <p className="text-gray-500">Active Readers</p>
          </div>

          <div>
            <FaStar className="text-4xl text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold">15,000+</h3>
            <p className="text-gray-500">Reviews & Ratings</p>
          </div>

          <div>
            <FaUpload className="text-4xl text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold">1,200+</h3>
            <p className="text-gray-500">User Added Books</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;