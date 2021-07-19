import axios from "axios";
import React from "react";

const baseURL = "/posts/";

export const DeletePost = ({ setRefetch, id }) => {
  const deletepost = (id) => {
    axios
      .delete(baseURL + id)
      .then((response) => {
        console.log("RUN");
        console.log(response.data);
        setRefetch(true);
      })
      .catch((e) => console.log("Conection Error"));
  };
  return <button onClick={(e) => deletepost(id)}>delete</button>;
};
