import {
  ChangePasswordDTO,
  LoginDTO,
  SignUpDTO,
  VerifyOtpDTO,
} from "../DTO/authenticate";
import {
  ChangePasswordEntity,
  LoginEntity,
  SignUpEntity,
  VerifyOtpEntity,
} from "../entities/authenticate";
import { responseAPI } from "../entities/response";
import post from "./postAPI";

export async function signup(api: string, body: SignUpDTO) {
  const response = await post<SignUpDTO, responseAPI<SignUpEntity>>(api, body);
  if (response.status === "201") {
    return response;
  } else {
    return Error(response.message);
  }
}

export async function login(api: string, body: LoginDTO) {
  const response = await post<LoginDTO, responseAPI<LoginEntity>>(api, body);
  if (response.status === "201") {
    return response;
  } else {
    return Error(response.message);
  }
}

export async function generateOTP(api: string, body: LoginDTO) {
  const response = await post<LoginDTO, responseAPI<LoginEntity>>(api, body);
  if (response.status === "201") {
    return response;
  } else {
    return Error(response.message);
  }
}

export async function verifyOTP(api: string, body: VerifyOtpDTO) {
  const response = await post<VerifyOtpDTO, responseAPI<VerifyOtpEntity>>(
    api,
    body
  );
  if (response.status === "200") {
    return response;
  } else {
    return Error(response.message);
  }
}

export async function changePassword(api: string, body: ChangePasswordDTO) {
  const response = await post<
    ChangePasswordDTO,
    responseAPI<ChangePasswordEntity>
  >(api, body);
  if (response.status === "200") {
    return response;
  } else {
    return Error(response.message);
  }
}
