"use client";

import { openModal } from "@/lib/features/modal";
import { useAppDispatch } from "@/lib/hooks";
import { signup } from "@/utils/api/authenticate";
import { Button, Form, FormProps, Input } from "antd";
import { Fragment, useState } from "react";

type FieldType = {
  email: string;
  password: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function CredentialButton({
  type,
}: {
  type: "signin" | "signup";
}) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const openForgotModal = () => {
    dispatch(openModal("forgotpassword"));
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setIsLoading(true);
    if (type === "signin") {
      try {
        const response = await signup("/auth/signin", {
          email: values.email,
          password: values.password,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await signup("/auth/signup", {
          email: values.email,
          password: values.password,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
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
      {type === "signin" ? (
        <Fragment>
          <Form.Item>
            <Button onClick={openForgotModal} style={{ border: "none" }}>
              Forgot password ?
            </Button>
          </Form.Item>

          <Form.Item>
            <Button style={{ border: "none" }} htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Fragment>
      ) : (
        <Form.Item>
          <Button
            disabled={isLoading}
            style={{ border: "none" }}
            htmlType="submit"
          >
            Sign up
          </Button>
        </Form.Item>
      )}
    </Form>
  );
}
