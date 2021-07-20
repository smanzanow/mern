const express = require("express");
const ridesRouter = express.Router();
const rides = require("../data/rides.json");
const calculateCost = require("../functions/rides.functions");
ridesRouter.get("/", (req, res, next) => {
  try {
    const calculatedRides = rides.map((ride) => ({
      ...ride,
      ...calculateCost(ride),
    }));
    res.status(200).send({
      success: true,
      data: calculatedRides,
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e.message,
    });
  }
});

module.exports = ridesRouter;
