import React, { useEffect, useState } from "react";
import PageHeading from "../components/PageHeading";
import Article from "../components/Article";
import "./css/Home.css"; // Import custom CSS
import { toast } from "react-toastify";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/post/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        toast.error(`Failed to load posts: ${error.message}`);
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <PageHeading heading="Blogs" />
      <div className="page container grid">
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map(post => (
            <Article
              key={post.id} // Ensure this is unique
              title={post.title}
              description={post.content} // Use actual content
              url={`/feeds/${post.id}`} // Ensure the URL format is correct
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;