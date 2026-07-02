const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
let registeredHomes = [];
const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, priceNight, rating, location, photo) {
    this.houseName = houseName;
    this.priceNight = priceNight;
    this.rating = rating;
    this.location = location;
    this.photo = photo;
  }
  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        // console.log("file is concluded ", error);
      });
    });
  }
  static fetchAll(callback) {
    fs.readFile(homeDataPath, (error, data) => {
      // console.log("file read successfully", data, error);

      //handling the empty file
      if (!error) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
    // return registeredHomes;
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound); //this returns the callback or full details of the home
    });
  }
};
