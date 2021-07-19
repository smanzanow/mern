import axios from "axios";
import React, { useState } from "react";

const baseURL = "/posts/";

export const CreatePost = ({ setRefetch }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    author: "",
  });
  const setValue = (val) => setPost((prevPost) => ({ ...prevPost, ...val }));
  const createPost = (event) => {
    console.log(post);
    axios
      .post(baseURL, { ...post })
      .then((response) => {
        console.log("RUN");
        console.log(response.data);
        setRefetch(true);
      })
      .catch((e) => console.log("Conection Error"));
    event.preventDefault();
  };
  return (
    <form onSubmit={createPost}>
      <label>
        Title:
        <input
          type="text"
          onChange={(ev) => setValue({ title: ev.target.value })}
        />
      </label>
      <label>
        Body:
        <input
          type="text"
          onChange={(ev) => setValue({ body: ev.target.value })}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          onChange={(ev) => setValue({ author: ev.target.value })}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
