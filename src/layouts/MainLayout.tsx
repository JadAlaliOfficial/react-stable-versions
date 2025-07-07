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
  SunOutlined,
  MoonOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
// Add this to your imports at the top
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";
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
  const { isDarkMode, toggleTheme } = useTheme();

  // Router location for breadcrumbs
  const location = useLocation();

  // State for sidebar collapse (desktop) and visibility (mobile)
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [siderVisible, setSiderVisible] = useState(false);
  // Add this line near your other hooks
  const navigate = useNavigate();

  /**
   * Effect hook to handle responsive behavior:
   * - Checks viewport width on mount and resize
   * - Manages sidebar visibility based on screen size
   * - Desktop: sidebar visible by default
   * - Mobile: sidebar hidden by default
   * - Uses debouncing to limit resize event handler execution
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

    // Debounce function to limit how often the resize handler executes
    const debounce = (func: (...args: any[]) => void, delay: number) => {
      let timeoutId: ReturnType<typeof setTimeout>;
      return function(...args: any[]) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          func.apply(null, args);
        }, delay);
      };
    };

    // Create debounced version of checkMobile with 100ms delay
    const debouncedCheckMobile = debounce(checkMobile, 100);

    // Initial check without debouncing
    checkMobile();
    
    // Add event listener with debounced handler
    window.addEventListener("resize", debouncedCheckMobile);
    
    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", debouncedCheckMobile);
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
                 items-center px-2 sticky top-0 z-10 justify-between h-12 md:h-16 text-header-foreground bg-header-background border-b-header-border`}
        >
          <div className="flex items-center ">
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
              className={`text-header-foreground text-xl flex items-center justify-center mr-3`}
              aria-label={isMobile ? (siderVisible ? "Close menu" : "Open menu") : (collapsed ? "Expand sidebar" : "Collapse sidebar")}
              aria-expanded={isMobile ? siderVisible : !collapsed}
              aria-controls="main-navigation"
            />
            {/* Application title */}
            <div className={`text-lg font-bold text-header-foreground`}>
              SaaS Platform
            </div>
          </div>

          {/* Header right section with notification and profile icons */}
          <div className="flex items-center gap-4">
            <Button
              // onClick={toggleTheme}
              type="text"
              className={`flex items-center justify-center text-xl text-header-foreground`}
              icon={<BellOutlined />}
              aria-label="Notifications"
            />
            <Button
              onClick={toggleTheme}
              type="text"
              className={`flex items-center justify-center text-xl text-header-foreground`}
              icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={isDarkMode}
            />

            <Button
              onClick={() => navigate("/auth/login")}
              type="text"
              className={`flex items-center justify-center text-xl text-header-foreground`}
              icon={<UserOutlined />}
              aria-label="User profile"
            />
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
              aria-hidden="true"
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
                bg-sidebar-background border-r-sidebar-border
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
              id="main-navigation"
              aria-label="Main navigation"
            >
              {/* Navigation menu with items defined in sideNavItems */}
              <Menu
                mode="inline"
                defaultOpenKeys={["sub1"]}
                className={`h-full bg-sidebar-background `}
                items={sideNavItems}
                theme={isDarkMode ? "dark" : "light"}
                inlineCollapsed={!isMobile && collapsed}
                role="menu"
                aria-label="Site navigation"
              />
            </Sider>
          )}

          {/* Main content area that adjusts based on sidebar state */}
          <Layout
            className={`transition-all duration-300 ease-in-out p-0 md:px-2 lg:px-4 bg-content-background `}
            style={{
              marginLeft: isMobile ? 0 : undefined,
            }}
          >
            {/* Breadcrumb navigation showing current location */}
            <Breadcrumb
              items={[
                { title: "Home" },
                { title: location.pathname.split("/")[1] || "Dashboard" },
              ]}
              className="my-4 ml-2"
            />

            {/* Main content container where routes will be rendered */}
            <Content
              className={`m-1 p-2 md:p-4 lg:p-6 min-h-[280px] rounded-lg bg-lighter-background shadow-custom`}
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
