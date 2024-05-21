"use client";

import { Form, FormProps, Input, InputProps } from "antd";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Button from "../button/button";
import { EditOutlined } from "@ant-design/icons";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { error } from "@/utils/entities/response";
import { updateUserInfo } from "@/utils/api/user";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import errorNoti from "@/utils/function/errorNoti";
import { openOverLay } from "@/lib/features/overlay";
import { useRouter } from "next/navigation";
import { UpdateUserDTO } from "@/utils/DTO/user";
import user, { setUser } from "@/lib/features/user";

interface FieldType {
  username: string;
  image?: File;
}

export default function ProfileEditForm() {
  const currentUser = useAppSelector((state) => state.user.value.user);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [username, setUsername] = useState(currentUser.name);
  const [isLoading, setIsLoading] = useState(false);
  const isOpenOverLay = useAppSelector((state) => state.overlay.value);
  const dispatch = useAppDispatch();
  const session = useSession();

  const handleSubmit: FormProps<FieldType>["onFinish"] = async (values) => {
    const uploadData = new FormData();
    uploadData.append("name", values.username);
    if (image) {
      uploadData.append("image", image, image.name);
    }
    setIsLoading(true);
    try {
      const response = await updateUserInfo(uploadData, currentUser.token);
      if (response.status === "200" && imagePreview) {
        toast.success("Cập nhật thông tin thành công");
        dispatch(
          setUser({
            ...currentUser,
            image: response.messageData.avatar,
            name: response.messageData.fullname,
          })
        );
        session.update({
          newUser: {
            ...currentUser,
            image: response.messageData.avatar,
            name: response.messageData.fullname,
          },
        });
        dispatch(openOverLay(false));
      }
    } catch (e) {
      const error = e as error;
      toast.error(errorNoti(error));
    }
    setIsLoading(false);
  };

  const handleChangeUsername: InputProps["onChange"] = (event) => {
    setUsername(event.target.value);
  };

  const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (isOpenOverLay === false) {
      setImage(null);
      setImagePreview(null);
      setUsername(currentUser.name);
    }
  }, [isOpenOverLay]);

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="avatar">
        <div className="flex flex-col justify-center gap-2">
          <div className="w-full flex justify-center items-center">
            <div className="flex aspect-square w-[140px] h-[140px] rounded-full relative">
              <Image
                src={imagePreview === null ? currentUser.image : imagePreview}
                alt="avatar"
                width={200}
                height={200}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <label
                className="aspect-square cursor-pointer bgRed w-[25%] h-[25%] absolute rounded-full
                      bottom-0 right-0 text-white
                      items-center hover:bgRedHover"
              >
                <div className="flex absolute w-full h-full justify-center items-center">
                  <EditOutlined />
                </div>
                <input
                  onChange={handleSetImage}
                  className="!hidden"
                  type="file"
                />
              </label>
            </div>
          </div>
        </div>
      </Form.Item>
      <Form.Item
        style={{ width: "100%" }}
        name="username"
        label="Username"
        rules={[{ required: true, message: "Username là bắt buộc" }]}
      >
        <Input value={username} onChange={handleChangeUsername} />
      </Form.Item>

      <div className="flex justify-end">
        <Button
          isLoading={isLoading}
          className="px-4 py-2"
          type="theme"
          htmlType="submit"
        >
          Chỉnh sửa
        </Button>
      </div>
    </Form>
  );
}
