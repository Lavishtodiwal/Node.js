const { getDB } = require("../utils/databaseUtils");

module.exports = class Favorite {
  constructor(houseId) {
    this.houseId = houseId;
  }
  save() {
    const db = getDB();
    return db
      .collection("favorites")
      .findOne({ houseId: this.houseId })
      .then((existingFav) => {
        if (!existingFav) {
          return db.collection("favorites").insertOne(this);
        }
        return Promise.resolve();
      });
  }
  // static addToFavorite(homeId, callback) {}
  static getFavorite() {
    const db = getDB();
    return db.collection("favorites").find().toArray();
  }
  static deleteById(delHomeId) {
    const db = getDB();
    return db.collection("favorites").deleteOne({ houseId: delHomeId });
  }
};
