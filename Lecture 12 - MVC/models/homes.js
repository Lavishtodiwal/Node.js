const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
let registeredHomes = [];

module.exports = class Home {
  constructor(houseName, priceNight, rating, location, photo) {
    this.houseName = houseName;
    this.priceNight = priceNight;
    this.rating = rating;
    this.location = location;
    this.photo = photo;
  }
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        // console.log("file is concluded ", error);  
      });
    });
  }
  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
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
};
