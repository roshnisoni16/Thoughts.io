import React from "react";
import PageHeading from "../components/PageHeading";
// import { useState  } from "react";
import { toast } from "react-toastify";
import { useRef } from "react";
import { NavLink } from 'react-router-dom';


const Register = () => {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setUser({ ...user, [name]: value });
  // };
    const RegisterFormRef = useRef(null);
  // This function handles form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    const RegisterForm = RegisterFormRef.current;
    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(user),
            body: JSON.stringify({
                name: RegisterForm["name"].value,
                email: RegisterForm["email"].value,
                password: RegisterForm["password"].value,
            }),
        });

        const data = await response.json(); // This will fail if the response is not valid JSON

        if (response.ok) {
            toast.success("Registration Successful!");
        } else {
            toast.error(data.message || "Registration failed.");
        }
    } catch (error) {
        console.error('An error occurred during registration:', error);
        toast.error("An error occurred during registration.");
    }
};


    return (
    <>
        <PageHeading heading="Register" />
        <div className="page container open-sans mt-5 w-25 p-20">
        <form onSubmit={handleSubmit} ref={RegisterFormRef} className="w-100">
        <div className="mb-3">
            <label htmlFor="name" className="lato">
                Name :
            </label>
            <input
                type="name"
                id="name"
                name="name"
                className="input w-100 open-sans p-2"
            />
            </div>
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
            <label htmlFor="password" className="lato">
                Password :
            </label>
            <input
                type="password"
                id="password"
                name="password"
                className="input w-100 open-sans p-2"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="confirmPassword" className="lato">
                Confirm Password :
            </label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="input w-100 open-sans p-2"
            />
            </div>
            <button type="submit" className="btn button-solid lato w-100">
            Register
            </button>
        </form>
        <p className="open-sans p-2">Already have an account? <NavLink to="/login">Login here</NavLink>.</p>
        </div>
    </>
    );
};

export default Register;
