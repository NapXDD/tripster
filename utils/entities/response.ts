export interface responseAPI<T> {
  message: string;
  status: string;
  messageData: T;
}

export interface error {
  status: string;
  code: string;
  message: string;
}
