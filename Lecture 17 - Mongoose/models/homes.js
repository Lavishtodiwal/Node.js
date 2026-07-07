const mongoose = require("mongoose");
const favorite = require("./favorite");

const homeSchema = mongoose.Schema({
  houseName: { type: String, required: true },
  priceNight: { type: Number, required: true },
  rating: { type: Number, required: true },
  location: { type: String, required: true },
  photo: String,
  description: String,
});

homeSchema.pre("findOneAndDelete", async function (next) {
  const homeId = this.getQuery()["_id"];
  await favorite.deleteMany({ houseId: homeId });
  // next();
});
module.exports = mongoose.model("Home", homeSchema);
