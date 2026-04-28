import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedBlog = data.find((b) => b.id === parseInt(id));
        setBlog(selectedBlog);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
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
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <p className="text-white text-2xl">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-96 md:h-[500px] overflow-hidden bg-gray-700">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute top-6 right-6 ${getCategoryColor(blog.category)} text-white px-4 py-2 rounded-full text-sm font-semibold`}
            >
              {blog.category}
            </div>
          </div>

          <div className="p-6 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-8 border-b border-slate-700">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <img
                  src={blog.authorProfile}
                  alt={blog.author}
                  className="w-16 h-16 rounded-full border-3 border-blue-500"
                />
                <div>
                  <p className="text-white font-bold text-lg">{blog.author}</p>
                  <p className="text-gray-400">Author</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>{formatDate(blog.publishedDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📖</span>
                  <span>{blog.readTime} read</span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                {blog.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/blogs"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300"
          >
            ← Back to Blogs
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
