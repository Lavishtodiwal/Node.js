const db = require("../utils/databaseUtils");

let registeredHomes = [];

module.exports = class Home {
  constructor(
    houseName,
    priceNight,
    rating,
    location,
    photo,
    description,
    id = null,
  ) {
    this.houseName = houseName;
    this.priceNight = priceNight;
    this.rating = rating;
    this.location = location;
    this.photo = photo;
    this.description = description;
    this.id = id;
  }
  save() {
    if (this.id) {
      //update case
      return db.execute(
        `UPDATE homes
   SET houseName=?, priceNight=?, rating=?, location=?, photo=?, description=?
   WHERE id=?`,
        [
          this.houseName,
          this.priceNight,
          this.rating,
          this.location,
          this.photo,
          this.description,
          this.id,
        ],
      );
    } else {
      //add case
      return db.execute(
        `INSERT INTO homes
    (houseName, priceNight, rating, location, photo, description)
    VALUES (?, ?, ?, ?, ?, ?)`,
        [
          this.houseName,
          this.priceNight,
          this.rating,
          this.location,
          this.photo,
          this.description,
        ],
      );
    }
  }
  static fetchAll() {
    return db.execute("SELECT * FROM homes"); //this will return  promise
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id =?", [homeId]); //this will return  promise
  }
  static deleteById(homeId) {
    return db.execute("DELETE FROM homes WHERE id =?", [homeId]); //this will return  promise
  }
};
