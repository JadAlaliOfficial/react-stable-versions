import {
  ConfigProvider,
  Layout,
  Menu,
  Breadcrumb,
  theme as antdTheme,
  Button,
} from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { useState, useEffect } from "react";

const { Header, Content, Sider } = Layout;

/**
 * MainLayout component serves as the primary layout structure for the application.
 * It includes:
 * - A responsive header with navigation controls
 * - A collapsible sidebar for navigation
 * - A main content area with breadcrumbs
 * - Dark/light theme support
 * - Mobile-responsive behavior
 */
const MainLayout = () => {
  // Theme context to manage dark/light mode
  const { isDarkMode } = useTheme();

  // Router location for breadcrumbs
  const location = useLocation();

  // State for sidebar collapse (desktop) and visibility (mobile)
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [siderVisible, setSiderVisible] = useState(false);

  /**
   * Effect hook to handle responsive behavior:
   * - Checks viewport width on mount and resize
   * - Manages sidebar visibility based on screen size
   * - Desktop: sidebar visible by default
   * - Mobile: sidebar hidden by default
   */
  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768; // Tailwind's 'md' breakpoint
      setIsMobile(isMobileView);

      // Adjust sidebar visibility based on screen size
      if (isMobileView) {
        setSiderVisible(false);
      } else {
        setSiderVisible(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Toggle sidebar collapse state (desktop)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // Toggle sidebar visibility (mobile)
  const toggleSiderVisible = () => {
    setSiderVisible(!siderVisible);
  };

  // Close sidebar when clicking outside (mobile)
  const handleOutsideClick = () => {
    if (isMobile && siderVisible) {
      setSiderVisible(false);
    }
  };

  /**
   * Navigation items for the sidebar menu
   * Structure includes:
   * - Dashboard link
   * - User submenu with profile and account links
   * - Files link
   */
  const sideNavItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "sub1",
      icon: <UserOutlined />,
      label: "User",
      children: [
        {
          key: "3",
          label: <Link to="/profile">Profile</Link>,
        },
        {
          key: "4",
          label: <Link to="/account">Account</Link>,
        },
      ],
    },
    {
      key: "7",
      icon: <FileOutlined />,
      label: <Link to="/files">Files</Link>,
    },
  ];

  return (
    // ConfigProvider sets the theme for all Ant Design components
    <ConfigProvider
      theme={{
        algorithm: isDarkMode
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      {/* Main layout container with full viewport height */}
      <Layout className="min-h-screen">
        {/* Header section with navigation controls and branding */}
        <Header
          className={`flex border-b
                 items-center px-2 sticky top-0 z-10 justify-between h-12 md:h-16 ${
            isDarkMode ? "bg-black border-b-[#9ca3af88]" : "bg-white border-b-gray-400"
          }`}
        >
          <div className="flex items-center">
            {/* Button to toggle sidebar (different behavior on mobile/desktop) */}
            <Button
              type="text"
              icon={
                isMobile ? (
                  siderVisible ? (
                    <MenuFoldOutlined />
                  ) : (
                    <MenuUnfoldOutlined />
                  )
                ) : collapsed ? (
                  <MenuUnfoldOutlined />
                ) : (
                  <MenuFoldOutlined />
                )
              }
              onClick={isMobile ? toggleSiderVisible : toggleCollapsed}
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-xl flex items-center justify-center mr-3`}
            />
            {/* Application title */}
            <div
              className={`text-lg font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              SaaS Platform
            </div>
          </div>

          {/* Header right section with notification and profile icons */}
          <div className="flex items-center gap-4">
            <BellOutlined className="text-xl" />
            <UserOutlined className="text-xl" />
          </div>
        </Header>

        {/* Main content area with sidebar and content */}
        <Layout>
          {/* Mobile overlay that appears when sidebar is open on mobile */}
          {isMobile && (
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ease-in-out ${
                siderVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={handleOutsideClick}
            />
          )}

          {/* Sidebar navigation - conditionally rendered based on visibility */}
          {(siderVisible || !isMobile) && (
            <Sider
              width={200}
              collapsible
              collapsed={!isMobile && collapsed}
              trigger={null}
              collapsedWidth={isMobile ? 0 : 80}
              className={`
                border-r
                ${isDarkMode ? "bg-black border-r-[#9ca3af88]" : "bg-white border-r-gray-400"}
                overflow-auto
                
                h-[calc(100vh+0em)]
                md:h-[calc(100vh-4rem)]
                fixed
                md:sticky
                top-0
                md:top-16
                left-0
                transition-all duration-300 ease-in-out
                ${isMobile ? "z-30" : "z-0"}
                ${
                  isMobile && !siderVisible
                    ? "-translate-x-full"
                    : "translate-x-0"
                }
              `}
              theme={isDarkMode ? "dark" : "light"}
            >
              {/* Navigation menu with items defined in sideNavItems */}
              <Menu
                mode="inline"
                defaultOpenKeys={["sub1"]}
                className={`h-full  ${isDarkMode ? "bg-black" : "bg-white"} `}
                items={sideNavItems}
                theme={isDarkMode ? "dark" : "light"}
                inlineCollapsed={!isMobile && collapsed}
              />
            </Sider>
          )}

          {/* Main content area that adjusts based on sidebar state */}
          <Layout
            className={`transition-all duration-300 ease-in-out ${isDarkMode ? "bg-black" : "bg-white"} `}
            style={{
              padding: "0 24px 24px",
              marginLeft: isMobile ? 0 : undefined,
            }}
          >
            {/* Breadcrumb navigation showing current location */}
            <Breadcrumb
              items={[
                { title: "Home" },
                { title: location.pathname.split("/")[1] || "Dashboard" },
              ]}
              className="my-4"
            />

            {/* Main content container where routes will be rendered */}
            <Content
              className={`p-6 my-0 min-h-[280px] rounded-lg  ${
                isDarkMode ? "bg-[#0a0a0a] shadow-custom-dark" : "bg-[#f7f7f7] shadow-custom"
              }`}
            >
              <Outlet /> {/* This is where child routes will be rendered */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
