import React from "react";
import PageHeading from "../components/PageHeading";
import { toast } from "react-toastify";
import { useRef } from "react";

const Contact = () => {
  const contactFormRef = useRef(null);

  //this function handles form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const contactform = contactFormRef.current;
    if (
      contactform["name"].value === "" ||
      contactform["email"].value === "" ||
      contactform["message"].value === ""
    ) {
      toast.error("Fields cannot be empty!");
    } else {
      toast.success("Good data!");
      console.log(contactform["name"].value);
      console.log(contactform["email"].value);
      console.log(contactform["message"].value);
    }
  };

  return (
    <>
      <PageHeading heading="Contact" />
      <div className="page container open-sans mt-5">
        <form onSubmit={handleSubmit} ref={contactFormRef}>
          <div className="mb-3">
            <label htmlFor="name" className="lato">
              Name :
            </label>
            <input
              type="text"
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
            <label htmlFor="message" className="lato">
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              className="input textarea w-100 open-sans p-2"
            ></textarea>
          </div>
          <button type="submit" className="btn button-solid lato">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
