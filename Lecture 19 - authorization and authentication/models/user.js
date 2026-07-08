const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      enum: ["guest", "host"],
      default: "guest",
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Home",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
