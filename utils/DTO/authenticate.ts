export interface SignUpDTO {
  email: string;
  password: string;
}

export type LoginDTO = SignUpDTO;

export interface generateOtpDTO {
  email: string;
}

export interface VerifyOtpDTO {
  email: string;
  otp: string;
}

export interface ChangePasswordDTO {
  email: string;
  newPassword: string;
}
