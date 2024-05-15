import { SignUpDTO } from "../DTO/signup";
import resposneAPI from "../entities/response";
import { SignUpEntity } from "../entities/signup";
import post from "./postAPI";

export async function signup(api: string, body: SignUpDTO) {
  const response = await post(api, body);
  if (response.status === 200) {
    return response;
  }
}

export async function signin() {}
