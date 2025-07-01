import { ConfigProvider, Layout, theme as antdTheme } from "antd";
import { Outlet } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import type { ReactNode } from "react";

const { Content } = Layout;

/**
 * AuthLayout component serves as a minimal layout for authentication pages.
 * Features:
 * - Centered content
 * - Logo display at the top
 * - Consistent theming with the main app
 * - No navigation elements
 */
    const AuthLayout = () => {
  // Theme context to maintain consistent dark/light mode
  const { isDarkMode } = useTheme();

  return (
    // ConfigProvider ensures consistent theming with MainLayout
    <ConfigProvider
      theme={{
        algorithm: isDarkMode
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      {/* Full viewport layout with centered content */}
      <Layout className="min-h-screen bg-background">
        {/* Main content area centered both horizontally and vertically */}
        <Content className="flex flex-col items-center justify-center p-4">
          {/* Logo container with consistent spacing */}
          <div className="mb-8 flex justify-center">
            logo
          </div>
          
          {/* Authentication form/content area with consistent styling */}
          <div className="w-full max-w-md p-6 rounded-lg bg-lighter-background shadow-custom">
            <Outlet /> {/* Child routes will render here */}
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default AuthLayout;