export interface UpdateUserDTO {
  name: FormDataEntryValue | null;
  image: FormDataEntryValue | null;
}

export interface GetUserInfoDTO {
  userId: string
}