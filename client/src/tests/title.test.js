import React from "react";
import renderer from "react-test-renderer";
import { Title } from "../components/title";

test("header has title", () => {
  const component = renderer.create(<Title />);
  let tree = JSON.stringify(component.toJSON());
  expect(tree).toMatch(/Paris Taxi/);
});
