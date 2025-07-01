import { CarOutlined } from "@ant-design/icons";
import InfoCardBG from "../components/InfoCardBG";
import { useTheme } from "../ThemeContext";

const Dashboard = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex justify-between gap-2">
      <InfoCardBG
        titleText="Waste Altmetrics"
        icon={
          <CarOutlined
            className={`text-xs md:text-base lg:text-lg text-foreground`}
          />
        }
        lightBgColor="bg-[#777]"
        darkBgColor="bg-[#777]"
        dailyText="Daily"
        dailyValue="100"
        weeklyText="Weekly"
        weeklyValue="200"
      />
      <InfoCardBG
        titleText="Waste"
        icon={
          <CarOutlined
            className={`text-xs md:text-base lg:text-lg   ${
              isDarkMode ? "text-black" : "text-white"
            }`}
          />
        }
        lightBgColor="bg-[#777]"
        darkBgColor="bg-[#777]"
        dailyText="Daily"
        dailyValue="344"
        weeklyText="Weekly"
        weeklyValue="511"
      />
    </div>
  );
};

export default Dashboard;
