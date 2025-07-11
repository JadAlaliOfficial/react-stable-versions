import {
  CarOutlined,
  RiseOutlined,
  FallOutlined,
  TagOutlined,
} from "@ant-design/icons";
import InfoCardBG from "../components/basicWithReactBits/InfoCardBG";
import InfoCardNoBG from "../components/basicWithReactBits/InfoCardNoBG";
import ListCardBG from "../components/basicWithReactBits/ListCardBG";
import { useTheme } from "../ThemeContext";
import ListCardNoBG from "../components/basicWithReactBits/ListCardNoBG";
import ListCardTagTabs from "../components/basicWithReactBits/ListCardTagTabs";

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  const listData = [
    {
      leftText: "Completed Transactions",
      rightValue: "1,245",
      tagType: "OT", // Green tag
      isBold: true,
    },
    {
      leftText: "Failed Transactions",
      rightValue: "12",
      tagType: "none",
    },
    {
      leftText: "Failed Transactions",
      rightValue: "12",
      tagType: "none",
    },

    {
      leftText: "Pending Transactions",
      rightValue: "87",
      tagType: "NA", // Red tag
      leftTextClassName: "text-yellow-500",
    },
    {
      leftText: "Failed Transactions",
      rightValue: "12",
      tagType: "none",
    },
    {
      leftText: "Failed Transactions",
      rightValue: "12",
      tagType: "none",
    },
    {
      leftText: "Failed Transactions",
      rightValue: "12",
      tagType: "none",
    },
  ];

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
        {/* <ListCardBG leftIcon ={<CarOutlined />} rightIcon={<CarOutlined />} /> */}
        {/* <ListCardBG /> */}
        {/* <ListCardBG titleText="My Custom Title" /> */}
        {/* <ListCardBG
          listData={[
            { nameText: "First Item", dollarValue: "$150" },
            { nameText: "Second Item", dollarValue: "$250" },
          ]}
        /> */}
        {/* <ListCardBG
          titleText="Financial Summary"
          listData={[
            {
              nameText: "Income",
              dollarValue: "$1,500",
              percentageChange: "+10%",
              percentageValue: "60%",
            },
            {
              nameText: "Expenses",
              dollarValue: "$1,000",
              percentageChange: "-5%",
              percentageValue: "40%",
            },
          ]}
          nameTextClassName="font-bold"
          dollarValueClassName="text-green-500"
          percentageChangeClassName="text-red-500"
        /> */}

        <ListCardBG
          titleText="Vehicle Statistics"
          classNameCard="border border-gray-200"
          listData={[
            {
              leftIcon: <CarOutlined className="text-blue-500 text-lg" />,
              nameText: "Sedans",
              percentageValue: "45%",
              dollarValue: "$45,000",
              percentageChange: "+12%",
              rightIcon: <RiseOutlined className="text-green-500" />,
              // Item-specific className overrides
              nameTextClassName: "font-semibold text-blue-800",
              percentageChangeClassName: "text-green-600 font-medium",
            },
            {
              leftIcon: <CarOutlined className="text-red-500 text-lg" />,
              nameText: "SUVs",
              percentageValue: "35%",
              dollarValue: "$38,000",
              percentageChange: "-5%",
              rightIcon: <FallOutlined className="text-red-500" />,
              nameTextClassName: "font-semibold text-red-800",
            },
            {
              leftIcon: <CarOutlined className="text-green-500 text-lg" />,
              nameText: "Electric Vehicles",
              percentageValue: "20%",
              dollarValue: "$52,000",
              percentageChange: "+25%",
              rightIcon: <RiseOutlined className="text-green-500" />,
              // More prominent styling for this item
              containerClassName: " rounded p-1",
              nameTextClassName: "font-bold text-green-800",
              dollarValueClassName: "font-bold",
            },
          ]}
          // Global className props (applied to all items unless overridden)
          // containerClassName="hover:bg-gray-100 transition-colors p-2 rounded",
          // leftIconClassName="mr-2",
          // rightIconClassName="ml-2",
          // percentageValueClassName="text-sm text-gray-600",
          // dollarValueClassName="font-medium"
        />
      </div>
      <div className="flex justify-between gap-2 mt-2">
        <ListCardNoBG
          titleText="Transaction Summary"
          listData={[
            {
              leftText: "Completed Transactions",
              rightValue: "1,245",
              tagType: "OT", // Green tag
              isBold: true,
            },
            {
              leftText: "Failed Transactions",
              rightValue: "12",
              tagType: "none",
            },
            {
              leftText: "Failed Transactions",
              rightValue: "12",
              tagType: "none",
            },

            {
              leftText: "Pending Transactions",
              rightValue: "87",
              tagType: "NA", // Red tag
              leftTextClassName: "text-yellow-500",
            },
            {
              leftText: "Failed Transactions",
              rightValue: "12",
              tagType: "none",
            },
            {
              leftText: "Failed Transactions",
              rightValue: "12",
              tagType: "none",
            },
            {
              leftText: "Failed Transactions",
              rightValue: "12",
              tagType: "none",
            },
          ]}
          containerWidth="w-full "
        />
        <ListCardNoBG
          titleText="Transaction Summary"
          icon={<TagOutlined />}
          listData={listData}
          containerWidth="w-full "
        />
        <ListCardNoBG
          titleText="Transaction Summary"
          icon={<TagOutlined />}
          listData={listData}
          containerWidth="w-full "
        />
      </div>
      <div className="flex justify-between gap-2 mt-2">
        <ListCardTagTabs
          titleText="My Tabbed Card"
          tabs={[
            {
              key: "performance",
              label: "Performance",
              listData: [
                { leftText: "Speed", rightValue: "90%", tagType: "OT" },
                { leftText: "Accuracy", rightValue: "85%", tagType: "NA" },
              ],
            },
            {
              key: "resources",
              label: "Resources",
              listData: [
                { leftText: "CPU", rightValue: "60%", tagType: "none" },
                { leftText: "Memory", rightValue: "45%", tagType: "none" },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default Dashboard;
