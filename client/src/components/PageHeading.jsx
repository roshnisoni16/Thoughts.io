import React, { Children } from "react";

const PageHeading = (props) => {
  return (
    <>
      <h1 className="logo ml-auto mt-2 text-center lato-bold">
        {props.heading}
        <div className="under"></div>
      </h1>
    </>
  );
};

export default PageHeading;
