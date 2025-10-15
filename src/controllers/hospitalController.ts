import Hospital from "../models/hospital";
import { NextFunction, Request, Response } from "express";
// import { httpResponse } from "../types/response"
// import { IHospital } from "../types/hospital";
import { CustomError } from "../middleware/error.middleware";
import { isValidEmail, isValidPassword } from "../utils";

export const registerHospital = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      state,
      lga,
      hospitalName,
      tier,
      address,
      phone_number,
      email_address,
      password,
    } = req.body;

    if (
      !state ||
      !lga ||
      !hospitalName ||
      !tier ||
      !address ||
      !phone_number ||
      !email_address ||
      !password
    ) {
      const error = new Error("All fields are required!") as CustomError;
      error.statusCode = 400;
      throw error;
    }

    const isEmailValid = isValidEmail(email_address);

    if (!isEmailValid) {
      const error = new Error("Invalid Email!") as CustomError;
      error.statusCode = 400;
      throw error;
    }

    const isPasswordValid = isValidPassword(password);

    if (!isPasswordValid) {
      const error = new Error("Invalid Password!") as CustomError;
      error.statusCode = 400;
      throw error;
    }

    const isExistingEmail = await Hospital.findOne({ email_address });

    if (isExistingEmail) {
      const error = new Error("Email already exists!") as CustomError;
      error.statusCode = 400;
      throw error;
    }

    const hospital = new Hospital({
      state,
      lga,
      hospitalName,
      tier,
      address,
      phone_number,
      email_address,
      password,
      healthCareWorkers: [],
      patients: [],
    });

    const savedHospital = await hospital.save();

    res.status(201).json({
      status: "success",
      message: "Hospital Registered Successfully",
      data: savedHospital,
    });
  } catch (error: any) {
    console.error(error.message);
    next(error);
  }
};
