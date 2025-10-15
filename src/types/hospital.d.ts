export interface IHospital {
  _id?: string;
  state: string;
  lga: string;
  hospitalName: string;
  tier: string;
  address: string;
  phone_number: string;
  email_address: string;
  password: string;
  healthCareWorkers: string;
  patients: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
