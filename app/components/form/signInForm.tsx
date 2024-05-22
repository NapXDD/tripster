"use client";

import { openModal } from "@/lib/features/modal";
import { generateOTP, login, signup } from "@/utils/api/authenticate";
import { setEmail } from "@/lib/features/authenticate";
import { openOverLay } from "@/lib/features/overlay";
import { signIn, signOut } from "next-auth/react";
import { Button, Form, FormProps, Input } from "antd";
import { useAppDispatch } from "@/lib/hooks";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type FieldType = {
  email: string;
  password: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function SignInForm() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const openForgotModal = () => {
    dispatch(openModal("forgotpassword"));
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    dispatch(setEmail(values.email));
    setIsLoading(true);
    const response = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    if (response?.ok) {
      router.refresh();
      dispatch(openOverLay(false));
      setIsLoading(false);
    } else {
      if (response?.status === 401) {
        const response = await generateOTP({ email: values.email });
        if (response.status === "200" || response.status === "201") {
          dispatch(openModal("otp"));
        }
      } else {
        toast.error(`$HTTP Error ${response?.status}: ${response?.error}`);
      }
      setIsLoading(false);
    }
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
      <Fragment>
        <Form.Item>
          <Button
            disabled={isLoading}
            htmlType="button"
            onClick={openForgotModal}
            style={{ border: "none" }}
          >
            Forgot password ?
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            disabled={isLoading}
            style={{ border: "none" }}
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Fragment>
    </Form>
  );
}
