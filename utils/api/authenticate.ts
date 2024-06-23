import {
  ChangePasswordDTO,
  LoginDTO,
  SignUpDTO,
  VerifyOtpDTO,
  generateOtpDTO,
} from "../DTO/authenticate";
import {
  ChangePasswordEntity,
  LoginEntity,
  SignUpEntity,
  VerifyOtpEntity,
} from "../entities/authenticate";
import post, { postNoToken } from "./postAPI";

export async function signup(body: SignUpDTO) {
  const response = await postNoToken<SignUpDTO, SignUpEntity>(
    "/auth/signup",
    body
  );
  return response;
}

export async function login(body: LoginDTO) {
  const response = await postNoToken<LoginDTO, LoginEntity>(
    "/auth/login",
    body
  );
  return response;
}

export async function generateOTP(body: generateOtpDTO) {
  const response = await postNoToken<generateOtpDTO, LoginEntity>(
    "/auth/generate-otp",
    body
  );
  return response;
}

export async function verifyOTP(body: VerifyOtpDTO) {
  const response = await postNoToken<VerifyOtpDTO, VerifyOtpEntity>(
    "/auth/verify-otp",
    body
  );
  return response;
}

export async function changePassword(body: ChangePasswordDTO) {
  const response = await postNoToken<ChangePasswordDTO, ChangePasswordEntity>(
    "/auth/change-password",
    body
  );
  return response;
}
