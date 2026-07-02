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
      if (error) {
        return callback([]);
      }

      if (!data || data.length === 0) {
        return callback([]);
      }

      try {
        callback(JSON.parse(data));
      } catch (err) {
        callback([]);
      }
    });
  }
  static deleteById(delHomeId, callback) {
    Favorite.getFavorite((homeIds) => {
      homeIds = homeIds.filter((homeId) => delHomeId !== homeId);
      fs.writeFile(favoriteDataPath, JSON.stringify(homeIds), callback);
    });
  }
};
