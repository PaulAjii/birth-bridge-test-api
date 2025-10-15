import { Types } from "mongoose";

export interface IHospital {
  _id?: Types.ObjectId;
  state: string;
  lga: string;
  hospitalName: string;
  tier: string;
  address: string;
  phone_number: string;
  email_address: string;
  password: string;
  healthCareWorkers: Types.ObjectId[];
  patients: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
