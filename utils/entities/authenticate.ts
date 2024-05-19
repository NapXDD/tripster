export interface SignUpEntity {
  user: {
    fullname: string;
    email: string;
  };
}

export interface LoginEntity {
  userId: string;
  name: string;
  email: string;
  image: string;
  token: string;
  expiresIn: string;
  active: number;
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
