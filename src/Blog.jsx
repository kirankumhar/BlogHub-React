import { useEffect, useState } from "react";
import axios from "axios";


const Blog = () =>{

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/blogs')
        .then(response => {
                setBlogs(response.data)
        })
        .catch(error => {
            console.error('Error Fetching Blogs', error);
        });
    }, []);



    return (
      <div>
        <h2>All Blogs</h2>
        {blogs.length > 0 ? (
          <div>
            {blogs.map((blog) => (
              <div className="blog-card"  key={blog.id}>
                {blog.image_url && (
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      maxHeight: "300px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                )}
                <h2>{blog.title}</h2>

                <p
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                  style={{ textAlign: "justify", marginBottom: "10px" }}
                ></p>
              </div>
            ))}
          </div>
        ) : (
          <p>No blogs</p>
        )}
      </div>
    );
};
 export default Blog;