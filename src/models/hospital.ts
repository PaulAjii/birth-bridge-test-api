import mongoose from "mongoose";

const tierEnum = ["Primary", "Secondary", "Tertiary"];

const hospitalSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },

    lga: {
      type: String,
      required: true,
    },

    hospitalName: {
      type: String,
      required: true,
    },

    tier: {
      type: String,
      enum: tierEnum,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    phone_number: {
      type: String,
      required: true,
      minLength: 10,
    },

    email_address: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      required: true,
      type: String,
      minLength: 8,
    },

    healthCareWorkers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HealthCareWorker",
        required: true,
      },
    ],

    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
