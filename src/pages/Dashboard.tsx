import ShinyCard from '../ShinyCard';
import { useTheme } from '../ThemeContext';

const Dashboard = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 mb-4 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Toggle Theme
      </button>
      <ShinyCard />
    </div>
  );
};

export default Dashboard;
