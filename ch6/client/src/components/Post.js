import React from "react";
import Card from "react-bootstrap/Card";

const Post = ({ title, content }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      bg={"secondary"}
      text={"white"}
      className="mb-3"
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
