import React, { useState, useRef } from "react";
import PageHeading from "../components/PageHeading";
import { toast } from "react-toastify";

const Post = () => {
  const PostFormRef = useRef(null);
  const [categories] = useState(["Tech", "Lifestyle", "Education"]); // Example categories

  // This function handles form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const PostForm = PostFormRef.current;
    
    if (
      PostForm["title"].value === "" ||
      PostForm["content"].value === "" ||
      PostForm["category"].value === ""
    ) {
      toast.error("Fields cannot be empty!");
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/post/create', {  // Replace with your actual API endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: PostForm["title"].value,
            content: PostForm["content"].value,
            category: PostForm["category"].value,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success("Post submitted successfully!");
          // Optionally reset form or redirect
          PostForm.reset(); 
        } else {
          toast.error(data.message || 'Failed to submit post.');
        }
      } catch (error) {
        toast.error('An error occurred while submitting the post.');
        console.error('Error:', error);
      }
    }
  };

  return (
    <>
      <PageHeading heading="Create New Post" />
      <div className="page container open-sans mt-5 w-50 p-20">
        <form onSubmit={handleSubmit} ref={PostFormRef} className="w-100">
          <div className="mb-3">
            <label htmlFor="title" className="lato">
              Title :
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input w-100 open-sans p-2"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="lato">
              Content :
            </label>
            <textarea
              id="content"
              name="content"
              className="input w-100 open-sans p-2"
              rows="8"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="lato">
              Category :
            </label>
            <select
              id="category"
              name="category"
              className="input w-100 open-sans p-2"
            >
              <option value="">Select a Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn button-solid lato w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Post;