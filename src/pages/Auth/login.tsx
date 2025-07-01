import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Title, Text } = Typography;

type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginPage = () => {
  const [form] = Form.useForm<LoginFormValues>();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values: LoginFormValues) => {
    setIsLoading(true);
    try {
      // Replace with your actual login logic
      console.log("Login values:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      message.success("Login successful!");
      // Redirect or handle successful login
    } catch (error) {
      message.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Title level={3} className="text-center text-foreground mb-2">
        Welcome Back
      </Title>
      <Text type="secondary" className="block text-center  mb-6">
        Please enter your details to log in
      </Text>

      <Form
        form={form}
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            prefix={<UserOutlined className="text-gray-400" />}
            placeholder="Enter your email"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-400" />}
            placeholder="Enter your password"
            size="large"
          />
        </Form.Item>

        <div className="flex justify-between mb-6">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link to="/forgot-password" className="text-primary">
            Forgot password?
          </Link>
        </div>

        <Form.Item>
          <Button
            type="dashed"
            htmlType="submit"
            block
            size="large"
            loading={isLoading}
          >
            Log In
          </Button>
        </Form.Item>
      </Form>

      <div className="mt-6 text-center">
        <Text type="secondary">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-primary font-medium">
            register
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default LoginPage;