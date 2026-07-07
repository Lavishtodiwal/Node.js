const { default: mongoose } = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("favorite", favoriteSchema);
