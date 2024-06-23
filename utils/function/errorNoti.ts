import { error } from "../entities/response";

export default function errorNoti(error: error) {
  return `HTTP error ${error.code}: ${error.message}`;
}
