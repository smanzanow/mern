const calculateCost = (ride) => {
  try {
    const initialCharge = 1;
    const milesCost = 0.5;
    const periodCost = getPeriodCost(ride.startTime);
    const milesPeriods = Math.trunc(ride.distance / 2);
    const durationPeriods = Math.trunc(ride.duration / 15);
    const cost =
      initialCharge + milesCost * milesPeriods + durationPeriods * periodCost;
    return {
      cost,
      costComponents: {
        initialCharge,
        milesCost,
        periodCost,
        milesPeriods,
        durationPeriods,
      },
    };
  } catch (e) {
    console.error(e);
    throw "Error - fail to calculate cost";
  }
};
const getDateHour = (date) => {
  try {
    const hourRegex = /T\d\d:/;
    const [hour] = date.match(hourRegex);
    return parseInt(hour);
  } catch (e) {
    console.error(e);
    throw "Error - fail to get hour from date";
  }
};
const getPeriodCost = (date) => {
  try {
    const normalCost = 0.5;
    const bussyCost = 1;
    const rideHour = getDateHour(date);
    const periodCost =
      rideHour >= 16 && rideHour <= 19 ? bussyCost : normalCost;
    return periodCost;
  } catch (e) {
    console.error(e);
    throw "Error - fail to get bussy period cost";
  }
};

module.exports = calculateCost;
