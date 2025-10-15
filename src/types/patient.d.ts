export interface IBiodata {
  _id?: string;
  firstName: string;
  lastName: string;
  age: string;
  occupation: string;
  levelOfEducation: string;
  address: string;
  summary: string;
  hospital: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

export interface IPatient {
  biodata: IBiodata;
}
