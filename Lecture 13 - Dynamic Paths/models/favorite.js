const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
let registeredHomes = [];
const favoriteDataPath = path.join(rootDir, "data", "favorite.json");

module.exports = class Favorite {
  static addToFavorite(homeId, callback) {
    this.getFavorite((favorites) => {
      if (favorites.includes(homeId)) {
        callback("Home already in favorites");
      } else {
        favorites.push(homeId);
        fs.writeFile(favoriteDataPath, JSON.stringify(favorites), callback);
      }
    });
  }
  static getFavorite(callback) {
    fs.readFile(favoriteDataPath, (error, data) => {
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
