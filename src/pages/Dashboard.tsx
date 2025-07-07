import {
  ThunderboltOutlined,
  DollarOutlined,
  CarOutlined,
  RightOutlined,
  StarOutlined,
  CheckCircleOutlined,
  LineChartOutlined,
  WarningOutlined,
  ShoppingOutlined,
  PieChartOutlined,
  InfoCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";
import InformationCardWithBackGround from "../components/basic/InformationCardWithBackGround";
import InformationCardWithOutBackGround from "../components/basic/InformationCardWithOutBackGround";
import ListCardWithBackGround from "../components/basic/ListCardWithBackGround";
import ListCardNoBG from "../components/basicWithReactBits/ListCardNoBG";
import ListCardWithOutBackGround from "../components/basic/ListCardWithOutBackGround";
import ListCardTagTabs from "../components/basicWithReactBits/ListCardTagTabs";
import ListCardWithOutBackGroundWithTabs from "../components/basic/ListCardWithOutBackGroundWithTabs";
import { useTheme } from "../ThemeContext";

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
      <div className="flex justify-between gap-4 mb-4">
        <InformationCardWithBackGround
          // Title & Icon
          titleText="Performance Metrics"
          icon={<ThunderboltOutlined className="text-yellow-500" />}
          // Header Background Colors (overrides CSS variables)
          headerLightBgColor="#e6f7ff" // Light blue
          headerDarkBgColor="#003a8c" // Dark blue
          // Daily Section
          dailyText="Today's Revenue"
          dailyValue="$2,450"
          // Weekly Section
          weeklyText="7-Day Total"
          weeklyValue="$14,780"
          // Container & Card Styling
          containerWidth="w-full"
          classNameCard=" transition-shadow" // Adds hover effect
          // Text Styling Classes
          classNameTitle="text-white dark:text-black font-mono italic" // Custom title style
          classNameDailyText="text-gray-600 dark:text-gray-300"
          classNameDailyValue="text-green-600 "
          classNameWeeklyText="text-gray-600 dark:text-gray-300"
          classNameWeeklyValue="text-blue-600 "
          // Body Styling
          classNameCardBody="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
        />
        <InformationCardWithBackGround
          // Title & Icon
          titleText="Performance Metrics"
          icon={<ThunderboltOutlined className="text-yellow-500" />}
          // Header Background Colors (overrides CSS variables)
          headerLightBgColor="#e6f7ff" // Light blue
          headerDarkBgColor="#003a8c" // Dark blue
          // Daily Section
          dailyText="Today's Revenue"
          dailyValue="$2,450"
          // Weekly Section
          weeklyText="7-Day Total"
          weeklyValue="$14,780"
          // Container & Card Styling
          containerWidth="w-full"
          classNameCard=" transition-shadow" // Adds hover effect
          // Text Styling Classes
          classNameTitle="text-white dark:text-black font-mono italic" // Custom title style
          classNameDailyText="text-gray-600 dark:text-gray-300"
          classNameDailyValue="text-green-600 "
          classNameWeeklyText="text-gray-600 dark:text-gray-300"
          classNameWeeklyValue="text-blue-600 "
          // Body Styling
          classNameCardBody="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
        />
        <InformationCardWithBackGround
          // Title & Icon
          titleText="Performance Metrics"
          icon={<ThunderboltOutlined className="text-yellow-500" />}
          // Header Background Colors (overrides CSS variables)
          headerLightBgColor="#e6f7ff" // Light blue
          headerDarkBgColor="#003a8c" // Dark blue
          // Daily Section
          dailyText="Today's Revenue"
          dailyValue="$2,450"
          // Weekly Section
          weeklyText="7-Day Total"
          weeklyValue="$14,780"
          // Container & Card Styling
          containerWidth="w-full"
          classNameCard=" transition-shadow" // Adds hover effect
          // Text Styling Classes
          classNameTitle="text-white dark:text-black font-mono italic" // Custom title style
          classNameDailyText="text-gray-600 dark:text-gray-300"
          classNameDailyValue="text-green-600 "
          classNameWeeklyText="text-gray-600 dark:text-gray-300"
          classNameWeeklyValue="text-blue-600 "
          // Body Styling
          classNameCardBody="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
        />
        <InformationCardWithBackGround
          // Title & Icon
          titleText="Performance Metrics"
          icon={<ThunderboltOutlined className="text-yellow-500" />}
          // Header Background Colors (overrides CSS variables)
          headerLightBgColor="#e6f7ff" // Light blue
          headerDarkBgColor="#003a8c" // Dark blue
          // Daily Section
          dailyText="Today's Revenue"
          dailyValue="$2,450"
          // Weekly Section
          weeklyText="7-Day Total"
          weeklyValue="$14,780"
          // Container & Card Styling
          containerWidth="w-full"
          classNameCard=" transition-shadow" // Adds hover effect
          // Text Styling Classes
          classNameTitle="text-white dark:text-black font-mono italic" // Custom title style
          classNameDailyText="text-gray-600 dark:text-gray-300"
          classNameDailyValue="text-green-600 "
          classNameWeeklyText="text-gray-600 dark:text-gray-300"
          classNameWeeklyValue="text-blue-600 "
          // Body Styling
          classNameCardBody="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
        />
      </div>
      <div className="flex justify-between gap-4 mb-4">
        <InformationCardWithOutBackGround
          // Title & Icon
          titleText="Sales Dashboard"
          icon={<DollarOutlined className="text-green-500" />}
          // Daily Section
          dailyText="Today's Sales"
          dailyValue="$3,850"
          // Weekly Section
          weeklyText="This Week"
          weeklyValue="$22,450"
          // Container & Card Styling
          containerWidth="w-full" // Fixed width of 384px
          classNameCard="border-2 border-gray-200 dark:border-gray-600" // Custom border
          // Text Styling Classes
          classNameTitle="text-lg font-bold uppercase tracking-wide" // Custom title style
          classNameDailyText="text-gray-700 dark:text-gray-300 text-sm"
          classNameDailyValue="text-green-600 dark:text-green-400 font-bold text-lg"
          classNameWeeklyText="text-gray-700 dark:text-gray-300 text-sm"
          classNameWeeklyValue="text-blue-600 dark:text-blue-400 font-bold"
          // Body Styling
          classNameCardBody="bg-opacity-90  transition-all"
        />
        <InformationCardWithOutBackGround
          // Title & Icon
          titleText="Sales Dashboard"
          icon={<DollarOutlined className="text-green-500" />}
          // Daily Section
          dailyText="Today's Sales"
          dailyValue="$3,850"
          // Weekly Section
          weeklyText="This Week"
          weeklyValue="$22,450"
          // Container & Card Styling
          containerWidth="w-full" // Fixed width of 384px
          classNameCard="border-2 border-gray-200 dark:border-gray-600" // Custom border
          // Text Styling Classes
          classNameTitle="text-lg font-bold uppercase tracking-wide" // Custom title style
          classNameDailyText="text-gray-700 dark:text-gray-300 text-sm"
          classNameDailyValue="text-green-600 dark:text-green-400 font-bold text-lg"
          classNameWeeklyText="text-gray-700 dark:text-gray-300 text-sm"
          classNameWeeklyValue="text-blue-600 dark:text-blue-400 font-bold"
          // Body Styling
          classNameCardBody="bg-opacity-90  transition-all"
        />
        <InformationCardWithOutBackGround
          // Title & Icon
          titleText="Sales Dashboard"
          icon={<DollarOutlined className="text-green-500" />}
          // Daily Section
          dailyText="Today's Sales"
          dailyValue="$3,850"
          // Weekly Section
          weeklyText="This Week"
          weeklyValue="$22,450"
          // Container & Card Styling
          containerWidth="w-full" // Fixed width of 384px
          classNameCard="border-2 border-gray-200 dark:border-gray-600" // Custom border
          // Text Styling Classes
          classNameTitle="text-lg font-bold uppercase tracking-wide" // Custom title style
          classNameDailyText="text-gray-700 dark:text-gray-300 text-sm"
          classNameDailyValue="text-green-600 dark:text-green-400 font-bold text-lg"
          classNameWeeklyText="text-gray-700 dark:text-gray-300 text-sm"
          classNameWeeklyValue="text-blue-600 dark:text-blue-400 font-bold"
          // Body Styling
          classNameCardBody="bg-opacity-90 transition-all"
        />
        <InformationCardWithOutBackGround
          // Title & Icon
          titleText="Sales Dashboard"
          icon={<DollarOutlined className="text-green-500" />}
          // Daily Section
          dailyText="Today's Sales"
          dailyValue="$3,850"
          // Weekly Section
          weeklyText="This Week"
          weeklyValue="$22,450"
          // Container & Card Styling
          containerWidth="w-full" // Fixed width of 384px
          classNameCard="border-2 border-gray-200 dark:border-gray-600" // Custom border
          // Text Styling Classes
          classNameTitle="text-lg font-bold uppercase tracking-wide" // Custom title style
          classNameDailyText="text-gray-700 dark:text-gray-300 text-sm"
          classNameDailyValue="text-green-600 dark:text-green-400 font-bold text-lg"
          classNameWeeklyText="text-gray-700 dark:text-gray-300 text-sm"
          classNameWeeklyValue="text-blue-600 dark:text-blue-400 font-bold"
          // Body Styling
          classNameCardBody="bg-opacity-90 transition-all"
        />
      </div>
      <div className="flex justify-between gap-2 mb-4">

        <ListCardWithBackGround
          // Header Section
          titleText="Financial Overview"
          headerLightBgColor="#f0f9ff" // Light blue
          headerDarkBgColor="#1e3a8a" // Dark blue
          classNameTitle="text-lg text-white dark:text-black font-mono italic" // Custom title style
          // Container & Card Styling
          containerWidth="w-full"
          classNameCard=" transition-all duration-300"
          classNameCardBody="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
          // Default List Item Properties
          leftIcon={<DollarOutlined className="text-green-500" />}
          rightIcon={<InfoCircleOutlined className="text-blue-500" />}
          nameText="Default Item"
          percentageValue="100%"
          dollarValue="$1,000"
          percentageChange="+10%"
          // Default List Item Classes
          containerClassName=" p-2 rounded"
          leftIconClassName="text-xl mr-2"
          nameTextClassName="font-medium text-gray-800 dark:text-gray-200"
          percentageValueClassName="font-bold text-purple-600 dark:text-purple-400"
          dollarValueClassName="font-semibold text-green-600 dark:text-green-400"
          percentageChangeClassName="text-sm text-red-600 dark:text-red-400"
          rightIconClassName="text-lg ml-2"
          leftColumnClassName="flex flex-row items-center"
          rightColumnClassName="flex flex-col items-end"
          // Custom List Items
          listData={[
            {
              leftIcon: <PieChartOutlined className="text-blue-500" />,
              nameText: "Revenue",
              percentageValue: "45%",
              dollarValue: "$4,500",
              percentageChange: "+12%",
              isBold: true,
              containerClassName:
                "bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg",
              percentageChangeClassName:
                "text-sm text-green-600 dark:text-green-400",
            },
            {
              leftIcon: <ShoppingOutlined className="text-orange-500" />,
              nameText: "Expenses",
              percentageValue: "30%",
              dollarValue: "$3,000",
              percentageChange: "-5%",
              nameTextClassName:
                "font-semibold text-orange-600 dark:text-orange-400",
              rightIcon: <WarningOutlined className="text-yellow-500" />,
            },
            {
              leftIcon: <LineChartOutlined className="text-green-500" />,
              nameText: "Profit",
              percentageValue: "25%",
              dollarValue: "$2,500",
              percentageChange: "+18%",
              rightIcon: <CheckCircleOutlined className="text-green-500" />,
              percentageValueClassName:
                "font-extrabold text-green-700 dark:text-green-300",
            },
            {
              nameText: "Custom Item",
              leftIcon: <StarOutlined className="text-yellow-500" />,
              rightIcon: <RightOutlined />,
              dollarValue: "$750",
              percentageValue: "7.5%",
              percentageChange: "+2.5%",
              leftColumnClassName:
                "flex flex-row-reverse justify-end items-center",
              rightColumnClassName: "flex flex-row items-center gap-2",
            },
          ]}
        />
        <ListCardWithBackGround
          // Header Section
          titleText="Financial Overview"
          headerLightBgColor="#f0f9ff" // Light blue
          headerDarkBgColor="#1e3a8a" // Dark blue
          classNameTitle="text-lg text-white dark:text-black font-mono italic" // Custom title style
          // Container & Card Styling
          containerWidth="w-full"
          classNameCard=" transition-all duration-300"
          classNameCardBody="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
          // Default List Item Properties
          leftIcon={<DollarOutlined className="text-green-500" />}
          rightIcon={<InfoCircleOutlined className="text-blue-500" />}
          nameText="Default Item"
          percentageValue="100%"
          dollarValue="$1,000"
          percentageChange="+10%"
          // Default List Item Classes
          containerClassName="p-2 rounded"
          leftIconClassName="text-xl mr-2"
          nameTextClassName="font-medium text-gray-800 dark:text-gray-200"
          percentageValueClassName="font-bold text-purple-600 dark:text-purple-400"
          dollarValueClassName="font-semibold text-green-600 dark:text-green-400"
          percentageChangeClassName="text-sm text-red-600 dark:text-red-400"
          rightIconClassName="text-lg ml-2"
          leftColumnClassName="flex flex-row items-center"
          rightColumnClassName="flex flex-col items-end"
          // Custom List Items
          listData={[
            {
              leftIcon: <PieChartOutlined className="text-blue-500" />,
              nameText: "Revenue",
              percentageValue: "45%",
              dollarValue: "$4,500",
              percentageChange: "+12%",
              isBold: true,
              containerClassName:
                "bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg",
              percentageChangeClassName:
                "text-sm text-green-600 dark:text-green-400",
            },
            {
              leftIcon: <ShoppingOutlined className="text-orange-500" />,
              nameText: "Expenses",
              percentageValue: "30%",
              dollarValue: "$3,000",
              percentageChange: "-5%",
              nameTextClassName:
                "font-semibold text-orange-600 dark:text-orange-400",
              rightIcon: <WarningOutlined className="text-yellow-500" />,
            },
            {
              leftIcon: <LineChartOutlined className="text-green-500" />,
              nameText: "Profit",
              percentageValue: "25%",
              dollarValue: "$2,500",
              percentageChange: "+18%",
              rightIcon: <CheckCircleOutlined className="text-green-500" />,
              percentageValueClassName:
                "font-extrabold text-green-700 dark:text-green-300",
            },
            {
              nameText: "Custom Item",
              leftIcon: <StarOutlined className="text-yellow-500" />,
              rightIcon: <RightOutlined />,
              dollarValue: "$750",
              percentageValue: "7.5%",
              percentageChange: "+2.5%",
              leftColumnClassName:
                "flex flex-row-reverse justify-end items-center",
              rightColumnClassName: "flex flex-row items-center gap-2",
            },
          ]}
        />
        
      
      </div>
      <div className="flex justify-between gap-2 mb-4">
        
        <ListCardWithOutBackGround
          // Header Section
          titleText="Project Milestones"
          classNameTitle="font-bold text-blue-600 dark:text-blue-400"
          // Container & Card Styling
          containerWidth="w-full lg:w-2/3"
          classNameCard="border-2 border-gray-200 dark:border-gray-600  transition-colors"
          classNameCardBody="bg-gray-50 dark:bg-gray-800/50"
          listClassName="divide-y divide-gray-200 dark:divide-gray-700"
          // Loading State
          loading={false}
          // Default List Item Properties
          leftText="Default Item"
          rightValue={0}
          tagType="none"
          // Default List Item Classes
          containerClassName="px-4 py-3 rounded-lg"
          leftTextClassName="font-medium text-gray-700 dark:text-gray-300"
          rightValueClassName="font-semibold text-green-600 dark:text-green-400"
          // Custom List Items
          listData={[
            {
              leftText: "Design Phase",
              rightValue: "100%",
              tagType: "OT",
              containerClassName: "bg-green-50 dark:bg-green-900/20",
              rightValueClassName:
                "font-bold text-green-700 dark:text-green-300",
            },
            {
              leftText: "Development",
              rightValue: 75,
              tagType: "OT",
              leftTextClassName:
                "font-semibold text-blue-600 dark:text-blue-400",
              rightValueClassName: "text-blue-600 dark:text-blue-400",
            },
            {
              leftText: "Testing",
              rightValue: "25%",
              tagType: "NA",
              containerClassName: "bg-red-50 dark:bg-red-900/20",
              rightValueClassName: "font-bold text-red-600 dark:text-red-400",
            },
            {
              leftText: "Documentation",
              rightValue: "10%",
              isBold: true,
              tagType: "none",
              leftTextClassName:
                "font-extrabold text-purple-600 dark:text-purple-400",
            },
            {
              leftText: "Deployment",
              rightValue: "0%",
              tagType: "none",
              containerClassName: "bg-yellow-50 dark:bg-yellow-900/20",
              rightValueClassName: "text-yellow-600 dark:text-yellow-400",
            },
          ]}
        />
        <ListCardWithOutBackGround
          // Header Section
          titleText="Project Milestones"
          classNameTitle="font-bold text-blue-600 dark:text-blue-400"
          // Container & Card Styling
          containerWidth="w-full lg:w-2/3"
          classNameCard="border-2 border-gray-200 dark:border-gray-600  transition-colors"
          classNameCardBody="bg-gray-50 dark:bg-gray-800/50"
          listClassName="divide-y divide-gray-200 dark:divide-gray-700"
          // Loading State
          loading={false}
          // Default List Item Properties
          leftText="Default Item"
          rightValue={0}
          tagType="none"
          // Default List Item Classes
          containerClassName="px-4 py-3 rounded-lg"
          leftTextClassName="font-medium text-gray-700 dark:text-gray-300"
          rightValueClassName="font-semibold text-green-600 dark:text-green-400"
          // Custom List Items
          listData={[
            {
              leftText: "Design Phase",
              rightValue: "100%",
              tagType: "OT",
              containerClassName: "bg-green-50 dark:bg-green-900/20",
              rightValueClassName:
                "font-bold text-green-700 dark:text-green-300",
            },
            {
              leftText: "Development",
              rightValue: 75,
              tagType: "OT",
              leftTextClassName:
                "font-semibold text-blue-600 dark:text-blue-400",
              rightValueClassName: "text-blue-600 dark:text-blue-400",
            },
            {
              leftText: "Testing",
              rightValue: "25%",
              tagType: "NA",
              containerClassName: "bg-red-50 dark:bg-red-900/20",
              rightValueClassName: "font-bold text-red-600 dark:text-red-400",
            },
            {
              leftText: "Documentation",
              rightValue: "10%",
              isBold: true,
              tagType: "none",
              leftTextClassName:
                "font-extrabold text-purple-600 dark:text-purple-400",
            },
            {
              leftText: "Deployment",
              rightValue: "0%",
              tagType: "none",
              containerClassName: "bg-yellow-50 dark:bg-yellow-900/20",
              rightValueClassName: "text-yellow-600 dark:text-yellow-400",
            },
          ]}
        />
        <ListCardWithOutBackGround
          // Header Section
          titleText="Project Milestones"
          classNameTitle="font-bold text-blue-600 dark:text-blue-400"
          // Container & Card Styling
          containerWidth="w-full lg:w-2/3"
          classNameCard="border-2 border-gray-200 dark:border-gray-600  transition-colors"
          classNameCardBody="bg-gray-50 dark:bg-gray-800/50"
          listClassName="divide-y divide-gray-200 dark:divide-gray-700"
          // Loading State
          loading={false}
          // Default List Item Properties
          leftText="Default Item"
          rightValue={0}
          tagType="none"
          // Default List Item Classes
          containerClassName=" px-4 py-3 rounded-lg"
          leftTextClassName="font-medium text-gray-700 dark:text-gray-300"
          rightValueClassName="font-semibold text-green-600 dark:text-green-400"
          // Custom List Items
          listData={[
            {
              leftText: "Design Phase",
              rightValue: "100%",
              tagType: "OT",
              containerClassName: "bg-green-50 dark:bg-green-900/20",
              rightValueClassName:
                "font-bold text-green-700 dark:text-green-300",
            },
            {
              leftText: "Development",
              rightValue: 75,
              tagType: "OT",
              leftTextClassName:
                "font-semibold text-blue-600 dark:text-blue-400",
              rightValueClassName: "text-blue-600 dark:text-blue-400",
            },
            {
              leftText: "Testing",
              rightValue: "25%",
              tagType: "NA",
              containerClassName: "bg-red-50 dark:bg-red-900/20",
              rightValueClassName: "font-bold text-red-600 dark:text-red-400",
            },
            {
              leftText: "Documentation",
              rightValue: "10%",
              isBold: true,
              tagType: "none",
              leftTextClassName:
                "font-extrabold text-purple-600 dark:text-purple-400",
            },
            {
              leftText: "Deployment",
              rightValue: "0%",
              tagType: "none",
              containerClassName: "bg-yellow-50 dark:bg-yellow-900/20",
              rightValueClassName: "text-yellow-600 dark:text-yellow-400",
            },
          ]}
        />
      </div>
      <div className="flex justify-between gap-2 mb-4">
        <ListCardWithOutBackGroundWithTabs
          // Header Section
          titleText="Project Dashboard"
          classNameTitle="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          // Container & Card Styling
          containerWidth="w-full xl:w-4/5"
          classNameCard="border border-gray-300 dark:border-gray-600  transition-all"
          classNameCardBody="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          listClassName="divide-y divide-gray-200 dark:divide-gray-700"
          // Loading State
          loading={false}
          // Fallback List Item Properties (used if no tabs provided)
          leftText="Default Item"
          rightValue={0}
          tagType="none"
          containerClassName="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-3 rounded"
          leftTextClassName="font-medium text-gray-800 dark:text-gray-200"
          rightValueClassName="font-semibold text-blue-600 dark:text-blue-400"
          // Tab Configuration
          tabs={[
            {
              key: "progress",
              label: "Progress",
              listData: [
                {
                  leftText: "Frontend Completion",
                  rightValue: "85%",
                  tagType: "OT",
                  containerClassName: "bg-green-50/50 dark:bg-green-900/20",
                  rightValueClassName:
                    "font-bold text-green-700 dark:text-green-300",
                },
                {
                  leftText: "Backend API",
                  rightValue: "92%",
                  tagType: "OT",
                  leftTextClassName: "font-semibold",
                  rightValueClassName: "font-bold",
                },
                {
                  leftText: "Database Migration",
                  rightValue: "45%",
                  tagType: "NA",
                  containerClassName: "bg-red-50/50 dark:bg-red-900/20",
                  rightValueClassName:
                    "font-bold text-red-600 dark:text-red-400",
                },
              ],
            },
            {
              key: "team",
              label: "Team",
              listData: [
                {
                  leftText: "Developers",
                  rightValue: 8,
                  tagType: "none",
                  isBold: true,
                },
                {
                  leftText: "Designers",
                  rightValue: 3,
                  tagType: "none",
                },
                {
                  leftText: "QA Engineers",
                  rightValue: 2,
                  tagType: "OT",
                },
                {
                  leftText: "Blockers",
                  rightValue: 4,
                  tagType: "NA",
                  rightValueClassName:
                    "text-red-600 dark:text-red-400 font-bold",
                },
              ],
            },
            {
              key: "milestones",
              label: "Milestones",
              listData: [
                {
                  leftText: "Sprint 1 Completed",
                  rightValue: "100%",
                  tagType: "OT",
                  containerClassName: "bg-blue-50/50 dark:bg-blue-900/20",
                },
                {
                  leftText: "Sprint 2 On Track",
                  rightValue: "75%",
                  tagType: "OT",
                },
                {
                  leftText: "Release Candidate",
                  rightValue: "30%",
                  tagType: "NA",
                  isBold: true,
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default Dashboard;
