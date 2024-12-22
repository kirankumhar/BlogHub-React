import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleBlog = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching Blog", error);
      });
  }, [id]);

  return (
    <div className="single-blog-container">
      {blog ? (
        <div className="single-blog">
          {blog.image_url && (
            <img
              src={blog.image_url}
              alt={blog.title}
              className="single-blog-image"
            />
          )}
          <h2 className="single-blog-title">{blog.title}</h2>
          <div
            className="single-blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      ) : (
        <p>Loading blog...</p>
      )}
    </div>
  );
};

export default SingleBlog;
