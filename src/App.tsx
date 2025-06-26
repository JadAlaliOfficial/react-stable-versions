import { ThemeProvider, useTheme } from './ThemeContext';
import MainLayout from './MainLayout';
import ShinyCard from './ShinyCard';

const InnerApp = () => {
  const { toggleTheme } = useTheme();

  return (
    <MainLayout>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 mb-4 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Toggle Theme
      </button>
      <ShinyCard />
    </MainLayout>
  );
};

const App = () => (
  <ThemeProvider>
    <InnerApp />
  </ThemeProvider>
);

export default App;
