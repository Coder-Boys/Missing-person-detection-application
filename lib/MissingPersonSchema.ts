import mongoose, { Schema } from "mongoose";

const missingPersonSchema = new Schema(
  {
    name: { type: String, required: false },
    age: { type: String, required: false },
    height: { type: String, required: false },
    gender: { type: String, required: true },
    imageUrl: { type: String, require: true },
    userId: { type: String, required: false },

    // photo: { type: String, required: true },
  },
  { timestamps: true }
);

const MissingPerson =
  mongoose.models?.MissingPerson ||
  mongoose.model("MissingPerson", missingPersonSchema);

export default MissingPerson;
