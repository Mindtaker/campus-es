import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { setPost } from "../services/PostService";
import { useAuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const postTitle = (event) => setTitle(event.target.value);
  const postContent = (event) => setContent(event.target.value);

  const savePost = (event) => {
    event.preventDefault();
    setPost(title, content, user.id);
    navigate('/allposts');
  };

  return (
    <div className="p-5">
      <h4>Story writer</h4>
      <Form onSubmit={savePost}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={postTitle}
            size="lg"
            required            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Story</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write the story..."
            onChange={postContent}
            required
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="dark" size="lg" type="submit">
            Submit Story
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreatePost;
