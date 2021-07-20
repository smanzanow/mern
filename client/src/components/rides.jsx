import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import { RideModal } from "./ridesModal";
import { CarOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { toEUR } from "../functions/formaters";
import "../styles/rides.css";
import "antd/dist/antd.css";

export const Ride = ({ ride }) => {
  const [clicked, click] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const size = "large";
  const moreThan2Miles = ride.distance > 2;
  const clickButton = (e) => {
    click(true);
    setIsModalVisible(true);
  };
  return (
    <Col xs={24} sm={24} md={12} lg={6} xl={4}>
      <Button
        className="rideButton"
        type="primary"
        danger={moreThan2Miles}
        shape="round"
        size={size}
        onClick={clickButton}
      >
        <Row>
          <CarOutlined />
        </Row>
        <Row>
          <b>Ride id: {ride.id} </b>
          {clicked ? (
            <>
              {"   "}Clicked
              <CheckCircleOutlined />
            </>
          ) : (
            ""
          )}
        </Row>
        <Row>
          <div>{toEUR(ride.cost || 0)}</div>
        </Row>
      </Button>
      <RideModal
        ride={ride}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </Col>
  );
};
