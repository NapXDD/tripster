export interface responseAPI<T> {
  message: string;
  status: string;
  messageData: T;
}
