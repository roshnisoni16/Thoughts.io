import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./css/Article.css"; // Ensure this path is correct

function Article({ title, description, url }) {
  return (
    <Card className="w-100 article mt-5">
      {/* Optionally include an image */}
      {/* <Card.Img variant="top" src="path/to/image.jpg" /> */}
      <Card.Body>
        <Card.Title className="lato">{title}</Card.Title>
        <Card.Text className="open-sans">{description}</Card.Text>
        <Link to={url} className="btn button-solid lato-regular">
          Read More
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Article;