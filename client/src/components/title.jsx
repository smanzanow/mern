import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

export const Title = () => {
  return (
    <Row gutter={10} justify={"center"}>
      <Col>
        <h1>Paris Taxi</h1>
      </Col>
    </Row>
  );
};
