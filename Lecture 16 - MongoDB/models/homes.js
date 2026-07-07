const { ObjectId } = require("mongodb");
const { mongoConnect, getDB } = require("../utils/databaseUtils");

module.exports = class Home {
  constructor(
    houseName,
    priceNight,
    rating,
    location,
    photo,
    description,
    _id,
  ) {
    this.houseName = houseName;
    this.priceNight = priceNight;
    this.rating = rating;
    this.location = location;
    this.photo = photo;
    this.description = description;
    if (_id) {
      this._id = _id;
    }
  }
  save() {
    const db = getDB();
    if (this._id) {
      //update case
      const updateFields = {
        houseName: this.houseName,
        priceNight: this.priceNight,
        rating: this.rating,
        location: this.location,
        photo: this.photo,
        description: this.description,
      };
      return db
        .collection("homes")
        .updateOne(
          { _id: new ObjectId(String(this._id)) },
          { $set: updateFields },
        );
    } else {
      //edit
      return db.collection("homes").insertOne(this);
    }
  }
  static fetchAll() {
    const db = getDB();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getDB();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }
  static deleteById(homeId) {
    const db = getDB();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};
