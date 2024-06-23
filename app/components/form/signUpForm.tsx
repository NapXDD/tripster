"use client";
import { Button, Form, FormProps, Input } from "antd";
import OpenOverlayButton from "../button/openOverlayButton";
import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { openModal } from "@/lib/features/modal";
import { setEmail } from "@/lib/features/authenticate";
import { generateOTP, signup } from "@/utils/api/authenticate";
import { error } from "@/utils/entities/response";
import { toast } from "react-toastify";

type FieldType = {
  email: string;
  password: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    dispatch(setEmail(values.email));
    setIsLoading(true);
    try {
      const response = await signup({
        email: values.email,
        password: values.password,
      });
      if (response.status === "201" || response.status === "200") {
        dispatch(setEmail(values.email));
        const response = await generateOTP({ email: values.email });
        if (response.status === "200" || response.status === "201") {
          dispatch(openModal("otp"));
        }
      }
    } catch (e) {
      const error = e as error;
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      className="w-full flex flex-col gap-2 items-center justify-center"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        style={{ marginBottom: 0 }}
        className="w-full"
        name="email"
        rules={[{ required: true, message: "Please input your Email" }]}
      >
        <Input size="large" placeholder="Email" />
      </Form.Item>

      <Form.Item<FieldType>
        style={{ marginBottom: 0 }}
        className="w-full"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password size="large" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button
          disabled={isLoading}
          style={{ border: "none" }}
          htmlType="submit"
        >
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}
