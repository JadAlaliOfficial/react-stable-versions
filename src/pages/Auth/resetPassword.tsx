import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, message } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

const { Title, Text } = Typography;

type ResetPasswordFormValues = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPasswordPage = () => {
  const [form] = Form.useForm<ResetPasswordFormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const onFinish = async (values: ResetPasswordFormValues) => {
    if (values.newPassword !== values.confirmPassword) {
      message.error("Passwords don't match!");
      return;
    }

    if (!token) {
      message.error("Invalid reset token");
      return;
    }

    setIsLoading(true);
    try {
      console.log("Reset password values:", values, "Token:", token);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      message.success("Password reset successfully!");
      setIsSuccess(true);
    } catch (error) {
      message.error("Password reset failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Title level={3} className="text-center text-foreground mb-2">
        {isSuccess ? "Password Updated" : "Reset Your Password"}
      </Title>
      <Text type="secondary" className="block text-lighter-foreground  text-center mb-6">
        {isSuccess
          ? "Your password has been successfully updated"
          : "Create a new password for your account"}
      </Text>

      {!isSuccess ? (
        <Form
          form={form}
          name="resetPassword"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="newPassword"
            label="New Password"
            rules={[
              { required: true, message: "Please input your new password!" },
              { min: 8, message: "Password must be at least 8 characters" },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Enter new password"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
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
              placeholder="Confirm new password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={isLoading}
            >
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div className="text-center">
          <Link to="/login">
            <Button type="primary">Back to Login</Button>
          </Link>
        </div>
      )}

      {!isSuccess && (
        <div className="mt-6 text-center">
          <Text type="secondary">
            Remember your password?{" "}
            <Link to="/auth/login" className="text-primary font-medium">
              Log in
            </Link>
          </Text>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordPage;