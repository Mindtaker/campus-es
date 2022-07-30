import React, { useState } from "react";
import { useAuthContext } from "../contexts/authContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login } = useAuthContext();


  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password)
  };

  return (
    <div className="p-5">
      <h4 >Welcome, please login</h4>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="dark" size="lg" type="submit" onClick={handleSubmit}>
            Log In
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
