import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/blogs.json")
      .then((res) => res.data)
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Web Security": "bg-red-500",
      Authentication: "bg-blue-500",
      Threats: "bg-orange-500",
      "Social Engineering": "bg-yellow-500",
      Cryptography: "bg-purple-500",
    };
    return colors[category] || "bg-gray-500";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <p className="text-white text-2xl">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Security Blogs
          </h1>
          <p className="text-xl text-gray-300">
            Learn about the latest cybersecurity trends and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-700">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
                <div
                  className={`absolute top-3 right-3 ${getCategoryColor(blog.category)} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {blog.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                  <span>📖 {blog.readTime}</span>
                  <span>📅 {formatDate(blog.publishedDate)}</span>
                </div>

                <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={blog.authorProfile}
                      alt={blog.author}
                      className="w-10 h-10 rounded-full border-2 border-blue-500"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {blog.author}
                      </p>
                      <p className="text-gray-500 text-xs">Author</p>
                    </div>
                  </div>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="cursor-pointer text-blue-400 hover:text-blue-300 text-sm font-semibold transition"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
