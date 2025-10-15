export interface httpResponse<T> {
  status: string;
  message: string;
  data?: T;
  accessToken?: string;
}
