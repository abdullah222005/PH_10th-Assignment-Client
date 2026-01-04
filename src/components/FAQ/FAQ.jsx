const faqs = [
  {
    question: "What is The Book Heaven?",
    answer:
      "The Book Heaven is an online platform where book lovers can explore, manage, and share books. Users can create personal libraries, rate books, and contribute by adding new titles.",
  },
  {
    question: "Do I need an account to use The Book Heaven?",
    answer:
      "You can browse books without an account. However, creating an account allows you to add books, manage your personal collection, leave reviews, and interact with the community.",
  },
  {
    question: "Can I add my own books to the platform?",
    answer:
      "Yes! Registered users can add their own books to the platform and share them with other readers.",
  },
  {
    question: "How does the rating and review system work?",
    answer:
      "Users can rate books and leave reviews based on their reading experience. These ratings help other readers discover popular and highly recommended books.",
  },
  {
    question: "Is The Book Heaven free to use?",
    answer:
      "Yes, The Book Heaven is completely free to use. Our goal is to create an open and welcoming community for book lovers.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-500">
            Everything you need to know about using The Book Heaven.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-200 rounded-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-500">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
