import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

hospitalSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
