import React from "react";
import renderer from "react-test-renderer";
import { Ride } from "../components/rides";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test("renders rides component", () => {
  const ride = {
    id: 1,
    distance: 2,
    startTime: "2020-06-19T13:01:17.031Z",
    duration: 9000,
    cost: 301.5,
    costComponents: {
      durationPeriods: 600,
      initialCharge: 1,
      milesCost: 0.5,
      milesPeriods: 1,
      periodCost: 0.5,
    },
  };

  const component = renderer.create(<Ride key={ride.id} ride={ride} />);
  let tree = JSON.stringify(component.toJSON());
  expect(tree).toMatch(/["Ride id: ","1"," "]/);
  expect(tree).toMatch("301.50");
});
