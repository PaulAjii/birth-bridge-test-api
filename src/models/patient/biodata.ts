import mongoose from "mongoose";

const biodataSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    age: {
      type: String,
      required: true,
    },

    occupation: {
      type: String,
      required: true,
    },

    religion: {
      type: String,
      required: true,
    },

    levelOfEducation: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    summary: {
      type: String,
      required: true,
    },

    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
  },
  { timestamps: true }
);

const Biodata = mongoose.model("Biodata", biodataSchema);

export default Biodata;
