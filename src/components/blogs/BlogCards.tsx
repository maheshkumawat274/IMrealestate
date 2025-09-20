import React, { useState } from "react";

type Blog = {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Your Guide to Off-Plan Property in Dubai",
    description:
      "Explore expert tips, market trends, and exclusive opportunities in Dubai’s off-plan property market...",
    content:
      "Here is the complete blog content for Dubai off-plan property. You can write long detailed blogs here fetched from database or CMS.",
    image: "/imgs/blog1.jpg",
  },
  {
    id: 2,
    title: "Smart Off-Plan Moves",
    description:
      "Make informed decisions with expert advice tailored to off-plan real estate. Discover the best strategies...",
    content:
      "This is the detailed version of Smart Off-Plan Moves blog post. Admin can update the content from dashboard...",
    image: "/imgs/blog2.jpg",
  },
  {
    id: 3,
    title: "Off-Plan Simplified",
    description:
      "Buying off-plan doesn’t have to be complex. We break down the process into simple steps—from project selection...",
    content:
      "Complete blog explaining how off-plan investments are simplified. This section will show full details when clicking read more.",
    image: "/imgs/blog3.jpg",
  },
];

const BlogSection: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  return (
    <section className="py-4 md:py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        {selectedBlog ? (
          // ----------------- Blog Detail -----------------
          <div>
            <button
              onClick={() => setSelectedBlog(null)}
              className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
              ← Back to Blogs
            </button>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">{selectedBlog.title}</h1>
            <p className="text-gray-700 leading-relaxed">
              {selectedBlog.content}
            </p>
          </div>
        ) : (
          // ----------------- Blog Cards -----------------
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-2 sm:p-5">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="flex items-center text-blue-700 font-semibold hover:underline"
                  >
                    <span className="mr-1">READ NOW</span>
                    <span>➝</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
