import { ConfigProvider, theme as antdTheme } from 'antd';
import type { ReactNode } from 'react';
import { useTheme } from './ThemeContext';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isDarkMode } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      <div className={`min-h-screen p-8 text-center ${isDarkMode ? 'bg-black' : 'bg-gray-300'}`}>
        {children}
      </div>
    </ConfigProvider>
  );
};

export default MainLayout;
