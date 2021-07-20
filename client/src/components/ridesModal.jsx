import React, { useState } from "react";
import { Modal, Divider } from "antd";
import "antd/dist/antd.css";
import { toEUR, timeFormater } from "../functions/formaters";
import "../styles/rides.css";

export const RideModal = ({ ride, isModalVisible, setIsModalVisible }) => {
  const elementFormat = (text, value) => (
    <p>
      <b>{text}:</b> {value}
    </p>
  );
  const subTitle = (text) => (
    <>
      <Divider />
      <h3>{text}</h3>
      <Divider />
    </>
  );
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title={"Ride Id:" + ride.id}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {elementFormat("Started at", ride.startTime)}
      {elementFormat("Duration", timeFormater(ride.duration || 0))}
      {elementFormat("Distance", ride.distance)}
      {subTitle("Detail")}
      {elementFormat(
        "Initial charge",
        toEUR(ride.costComponents.initialCharge || 0)
      )}
      {elementFormat(
        "0.5 miles periods",
        ride.costComponents.milesPeriods || 0
      )}
      {elementFormat(
        `Miles charge (${toEUR(ride.costComponents.milesCost)})`,
        toEUR(ride.costComponents.milesCost * ride.costComponents.milesPeriods)
      )}
      {elementFormat("15 min periods", ride.costComponents.durationPeriods)}
      {elementFormat(
        `Duration charge (${toEUR(ride.costComponents.periodCost)})`,
        toEUR(
          ride.costComponents.periodCost * ride.costComponents.durationPeriods
        )
      )}
      {subTitle("Total")}
      {elementFormat("Price", toEUR(ride.cost || 0))}
    </Modal>
  );
};
