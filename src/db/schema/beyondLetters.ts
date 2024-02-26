import mongoose from "mongoose";

const BeyondLettersSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: String,
    },
    userName: {
      required: true,
      type: String,
    },
    userImage: {
      required: true,
      type: String,
    },
    typeOfLetter: {
      type: String,
      enum: ["text", "video", "audio"],
      required: true,
    },
    sourceLink: {
      type: String,
      default: "source link hasnt provided",
    },
    letterText: {
      type: String,
      default: "letter text hasnt provided",
    },
    dateOfEmailSubmit: {
      type: Date,
      required: true,
    },
    emails: {
      type: Array,
    },
  },
  { timestamps: true }
);

export const BeyondLettersModel =
  mongoose.models.BeyondLetters ||
  mongoose.model("BeyondLetters", BeyondLettersSchema);
