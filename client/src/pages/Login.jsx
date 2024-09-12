import React from "react";
import PageHeading from "../components/PageHeading";
import { toast } from "react-toastify";
import { useRef } from "react";
import { NavLink } from 'react-router-dom';

const Login = () => {
  const LoginFormRef = useRef(null);

  //this function handles form submit
const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Handle successful login, e.g., save token and redirect
            toast.success('Login successful!');
            console.log('Login successful:', data);
        } else {
            toast.error(data.message || 'Login failed.');
            console.error('Login failed:', data.message);
        }
    } catch (error) {
        toast.error('An error occurred.');
        console.error('An error occurred:', error);
    }
};
  return (
    <>
      <PageHeading heading="Log In" />
      <div className="page container open-sans mt-5 w-25 p-20">
      <form onSubmit={handleSubmit} ref={LoginFormRef} className="w-100">
          <div className="mb-3">
            <label htmlFor="email" className="lato">
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input w-100 open-sans p-2"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="lato">
              Password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input w-100 open-sans p-2"
            />
          </div>
          <button type="submit" className="btn button-solid lato w-100">
            Log In
          </button>
        </form>
        <p className="open-sans p-2">Don't have an account? <NavLink to="/register">Register here</NavLink>.</p>
        </div>
    </>
  );
};

export default Login;
