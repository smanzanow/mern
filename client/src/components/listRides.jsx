import axios from "axios";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Row } from "antd";
import { Ride } from "./rides";
const baseURL = "/rides/";

export const ListRides = () => {
  const [ridesData, setRides] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setRides(response.data.data);
      })
      .catch((e) => console.log("Conection Error"));
  }, []);
  const rides = ridesData.map((ride) => <Ride key={ride.id} ride={ride} />);
  return <Row gutter={10}>{rides}</Row>;
};
