import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { HOME } from "../config/routes/paths";

const NotFound = () => {
  return (
    <div className="text-center p-5">
      <h1>404 - Page not Found</h1>
      <Button as={Link} to={HOME} className="mt-5" variant="dark">
        Return Home
      </Button>
    </div>
  );
};

export default NotFound;
