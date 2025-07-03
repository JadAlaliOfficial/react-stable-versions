import { CarOutlined } from "@ant-design/icons";
import InfoCardBG from "../components/InfoCardBG";
import InfoCardNoBG from "../components/InfoCardNoBG";
import ListCardBG from "../components/ListCardBG";
import { useTheme } from "../ThemeContext";

const Dashboard = () => {
  const { isDarkMode } = useTheme();


  
  return (
    <>
      <div className="flex justify-between gap-2">
        <InfoCardBG
          titleText="Waste Altmetrics"
          icon={
            <CarOutlined
              className={`text-xs md:text-base lg:text-lg text-bg-card`}
            />
          }
          headerLightBgColor="bg-[#777]"
          headerDarkBgColor="bg-[#777]"
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
          headerLightBgColor="bg-[#777]"
          headerDarkBgColor="bg-[#777]"
          dailyText="Daily"
          dailyValue="344"
          weeklyText="Weekly"
          weeklyValue="511"
          classNameDailyText="text-blue-400"
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
          headerLightBgColor="bg-[#777]"
          headerDarkBgColor="bg-[#777]"
          dailyText="Daily"
          dailyValue="344"
          weeklyText="Weekly"
          weeklyValue="511"
          classNameDailyText="text-blue-400"
        />
        <InfoCardBG
          icon={
            <CarOutlined
              className={`text-xs md:text-base lg:text-lg   ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            />
          }
        />
      </div>
      <div className="flex justify-between gap-2 mt-2">
        <InfoCardNoBG icon={<CarOutlined />} />
        <InfoCardNoBG icon={<CarOutlined />} />
        <InfoCardNoBG icon={<CarOutlined />} />
        <InfoCardNoBG icon={<CarOutlined />} />
      </div>
      <div className="flex justify-between gap-2 mt-2">
        <ListCardBG leftIcon ={<CarOutlined />} rightIcon={<CarOutlined />} />
      </div>
    </>
  );
};

export default Dashboard;
