import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/blogs")
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching Blogs", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blogs-container">
      <h2 className="blogs-heading">All Blogs</h2>
      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length > 0 ? (
        <div className="blogs-list">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              {blog.image_url && (
                <img
                  src={blog.image_url}
                  alt={blog.title || "Blog Image"}
                  className="blog-image"
                />
              )}
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.content.slice(0, 100)}...</p>
              <Link to={`/blog/${blog.id}`}>
                <button className="btn btn-outline-secondary">Read More</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default Blog;
