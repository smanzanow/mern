import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/posts/";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        console.log(response.data)
        setPost(response.data[0]);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}