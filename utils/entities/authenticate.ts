export interface SignUpEntity {
  user: {
    fullname: string;
    email: string;
  };
}

export interface LoginEntity {
  token: string;
  expireIn: string;
}

export interface GenerateOtpEntity {}

export interface VerifyOtpEntity {
  user: {
    id: string;
    fullname: string;
    avatar: string;
    email: string;
    role: string;
    otp: string;
    create_otp: string;
    isActivated: number;
  };
}

export interface ChangePasswordEntity {}