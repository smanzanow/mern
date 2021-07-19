import axios from "axios";
import React, { useEffect, useState } from "react";
import { DeletePost } from "./deletePost";
import { CreatePost } from "./createPost";
const baseURL = "/posts/";

export const ListPost = () => {
  const [postsData, setPost] = useState([]);
  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    if (refetch) {
      axios
        .get(baseURL)
        .then((response) => {
          console.log("RUN");
          console.log(response.data);
          setPost(response.data.data);
        })
        .catch((e) => console.log("Conection Error"));
      setRefetch(false);
    }
  }, [refetch]);
  const posts = postsData.map((post) => (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <DeletePost setRefetch={setRefetch} id={post._id} />
    </>
  ));
  return (
    <div>
      {posts}
      <CreatePost setRefetch={setRefetch} />
    </div>
  );
};
