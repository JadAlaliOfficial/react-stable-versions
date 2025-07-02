import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, message } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Title, Text } = Typography;

type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpPage = () => {
  const [form] = Form.useForm<SignUpFormValues>();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values: SignUpFormValues) => {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords don't match!");
      return;
    }

    setIsLoading(true);
    try {
      console.log("Sign up values:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      message.success("Account created successfully!");
      // Redirect to login or dashboard
    } catch (error) {
      message.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Title level={3} className="text-center mb-2">
        Create an Account
      </Title>
      <Text type="secondary" className="block text-center mb-6">
        Get started with our platform
      </Text>

      <Form
        form={form}
        name="signup"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            prefix={<UserOutlined className="text-gray-400" />}
            placeholder="Enter your full name"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-gray-400" />}
            placeholder="Enter your email"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-400" />}
            placeholder="Create a password"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-400" />}
            placeholder="Confirm your password"
            size="large"
          />
        </Form.Item>

        <Form.Item className="mb-6">
          <Text type="secondary">
            By creating an account, you agree to our{" "}
            <Link to="/terms" className="text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary">
              Privacy Policy
            </Link>
            .
          </Text>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={isLoading}
          >
            Create Account
          </Button>
        </Form.Item>
      </Form>

      <div className="mt-6 text-center">
        <Text type="secondary">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-primary font-medium">
            Log in
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default SignUpPage;