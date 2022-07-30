import React, { useState, useEffect } from "react";
// import CreatePost from "./CreatePost";
import Post from "../components/Post";
import Button from "react-bootstrap/Button";
// import { getPosts, setPost } from "../services/PostService";
import { getPosts } from "../services/PostService";
import { useAuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

  const { user } = useAuthContext();

  useEffect(() => {
    let mounted = true;

    getPosts(user.id)
      .then((post) => {
        if (mounted) {
          setAllPosts(post);
        }
      })
    return () => (mounted = false);
  }, [user.id]);
  
  const onCreateButton = () => {
    navigate('/createpost');
  };
  
  return (
    <div className="p-5">
      <h4>{user.name}'s stories...</h4>
      {allPosts.map((post) => {
        return (
          <Post
            id={post._id}
            key={post._id}
            title={post.title}
            content={post.content}
          />
        );
      })}
      <Button variant="dark" onClick={onCreateButton}>
        Write your story
      </Button>
    </div>
  );
};

export default AllPosts;
