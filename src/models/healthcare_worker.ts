import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const healthCareWorkerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    license_number: {
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

    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
  },
  { timestamps: true }
);

healthCareWorkerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const HealthCareWorker = mongoose.model(
  "HealthCareWorker",
  healthCareWorkerSchema
);

export default HealthCareWorker;
