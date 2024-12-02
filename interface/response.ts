export interface IResponse<T> {
  data?: T;
  error?: string;
  status: "success" | "error";
}
