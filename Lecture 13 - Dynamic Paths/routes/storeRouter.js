// core modules
const path = require("path");

// external modules
const express = require("express");
const storeRouter = express.Router();
//local modules
const rootDir = require("../utils/pathUtils");
const { registeredHomes } = require("./hostRouter");
const {
  getHomes,
  getBookings,
  getFavorite,
  getIndex,
  getHomeList,
  getHomeDetail,
  postAddToFavorite,
} = require("../controllers/storeController");

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favorite", getFavorite);
storeRouter.get("/home-list", getHomeList);
storeRouter.get("/homes/:homeId", getHomeDetail);
storeRouter.post("/favorite", postAddToFavorite);

module.exports = storeRouter;
