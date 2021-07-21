const {
  calculateCost,
  getDateHour,
  getPeriodCost,
} = require("../functions/rides.functions");

test("Check ride cost", () => {
  const ride = {
    id: 1,
    distance: 2,
    startTime: "2020-06-19T13:01:17.031Z",
    duration: 9000,
  };
  const result = {
    cost: 301.5,
    costComponents: {
      durationPeriods: 600,
      initialCharge: 1,
      milesCost: 0.5,
      milesPeriods: 1,
      periodCost: 0.5,
    },
  };
  const calculatedRide = calculateCost(ride);
  expect(calculatedRide.cost).toBe(result.cost);
  expect(calculatedRide.costComponents.durationPeriods).toBe(
    result.costComponents.durationPeriods
  );
  expect(calculatedRide.costComponents.initialCharge).toBe(
    result.costComponents.initialCharge
  );
  expect(calculatedRide.costComponents.milesCost).toBe(
    result.costComponents.milesCost
  );
  expect(calculatedRide.costComponents.milesPeriods).toBe(
    result.costComponents.milesPeriods
  );
  expect(calculatedRide.costComponents.periodCost).toBe(
    result.costComponents.periodCost
  );
});

test("Get hour from date", () => {
  const startTime = "2020-06-19T13:01:17.031Z";
  const hour = getDateHour(startTime);
  expect(hour).toBe(13);
});

test("Get cost from ride hour", () => {
  const hour = "2020-06-19T13:01:17.031Z";
  const cost = getPeriodCost(hour);
  expect(cost).toBe(0.5);

  const busyHour = "2020-06-19T17:01:17.031Z";
  const busyCost = getPeriodCost(busyHour);
  expect(busyCost).toBe(1);
});
