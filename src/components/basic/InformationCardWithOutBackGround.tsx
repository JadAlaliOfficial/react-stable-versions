// c:\xampp\htdocs\react-stable-versions\src\components\InformationCardWithOutBackGround.tsx
import { Card } from "antd";
import { useTheme } from "../../ThemeContext";
import { motion } from "framer-motion";

/**
 * InformationCardWithOutBackGround Component
 *
 * A customizable information card component with consistent background color.
 * This component supports dark/light mode and provides extensive customization options
 * for text content in each section.
 *
 * Features:
 * - Responsive design with different text sizes for various screen sizes
 * - Support for dark/light mode through ThemeContext
 * - Consistent background color for both header and body sections
 * - Customizable text content for daily and weekly sections
 * - Custom CSS classes for styling each part of the card
 */
interface InformationCardWithOutBackGroundProps {
  titleText?: string; // Text for the card title
  icon: React.ReactNode; // Icon to display in the header
  dailyText?: string; // Label for the daily section
  dailyValue?: string; // Value for the daily section
  weeklyText?: string; // Label for the weekly section
  weeklyValue?: string; // Value for the weekly section
  containerWidth?: string; // Width of the container (Tailwind class)
  classNameCard?: string; // Additional CSS class for the card
  classNameDailyText?: string; // Additional CSS class for daily text
  classNameDailyValue?: string; // Additional CSS class for daily value
  classNameWeeklyText?: string; // Additional CSS class for weekly text
  classNameWeeklyValue?: string; // Additional CSS class for weekly value
  classNameCardBody?: string; // Additional CSS class for the card body
  classNameTitle?: string; // Additional CSS class for the title text
}

// Define default props directly in the interface
// These values will be used if the corresponding props are not provided
const defaultProps: Partial<InformationCardWithOutBackGroundProps> = {
  titleText: "something",
  dailyText: "Daily",
  dailyValue: "0$",
  weeklyText: "Weekly",
  weeklyValue: "0$",
  containerWidth: "w-full",
  classNameCard: "",
  classNameDailyText: "",
  classNameDailyValue: "",
  classNameWeeklyText: "",
  classNameWeeklyValue: "",
  classNameCardBody: "",
};

/**
 * InformationCardWithOutBackGround Component Implementation
 *
 * Renders a card with consistent background color for header and body sections.
 * Uses global background/foreground colors from CSS variables and ThemeContext
 * for consistent theming across the application.
 */
const InformationCardWithOutBackGround: React.FC<
  InformationCardWithOutBackGroundProps
> = (props) => {
  // Merge the default props with the provided props
  const {
    titleText,
    icon,
    dailyText,
    dailyValue,
    weeklyText,
    weeklyValue,
    containerWidth,
    classNameCard,
    classNameDailyText,
    classNameDailyValue,
    classNameWeeklyText,
    classNameWeeklyValue,
    classNameCardBody,
    classNameTitle = "",
  } = { ...defaultProps, ...props };

  // Get the current theme mode (dark/light)
  const { isDarkMode } = useTheme();

  // Use the no-bg-card-background for both header and body
  const bgColor = "var(--color-no-bg-card-background)";

  return (
    // Main card container without FadeContent
    <motion.div
    whileHover={{ scale: 1.03 , boxShadow:"var(--shadow-custom-lg)"}}
      className={` rounded-[0.5rem] ${containerWidth}`} // Tailwind classes
      >
      {/* Main card component with customizable styling */}
      <Card
        bordered={true}
        className={`w-full rounded-[0.5rem] overflow-hidden shadow-custom p-0 m-0 ${classNameCard}`}
        styles={{
          header: {
            // Apply the same background color for header
            backgroundColor: bgColor,
            padding: 0,
            borderBottom: "none",
            height: "auto",
            minHeight: "auto",
          },
          body: {
            padding: "0",
          },
        }}
        title={
          // Card header with title and icon
          <div
            className={`p-[0.3rem] md:px-[0.4rem] lg:px-[0.6rem] flex justify-between items-center text-bg-card-foreground bg-no-bg-card text text-xs md:text-sm lg:text-base font-medium`}
          >
            {/* Regular text for title */}
            <span
              className={`${
                isDarkMode ? "text-white" : "text-gray-800"
              } ${classNameTitle}`}
            >
              {titleText || ""}
            </span>
            {icon}
          </div>
        }
      >
        {/* Card body with daily and weekly information */}
        <div
          className={`bg-no-bg-card p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}
        >
          {/* Daily information row with customizable text and styling */}
          <div className="text-xs text-bg-card-foreground md:text-base lg:text-lg flex justify-between font-bold mb-2">
            <span className={classNameDailyText}>{dailyText}</span>
            <span className={classNameDailyValue}>{dailyValue}</span>
          </div>
          {/* Weekly information row with customizable text and styling */}
          <div className="text-xs text-bg-card-foreground md:text-sm lg:text-base flex justify-between">
            <span className={classNameWeeklyText}>{weeklyText}</span>
            <span className={classNameWeeklyValue}>{weeklyValue}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default InformationCardWithOutBackGround;

//a list of all the properties and what they effect  and the default value

// Property             | Type             | Default       | Description
// ---------------------|------------------|---------------|------------------------------------------------------
// titleText            | string           | "something"   | Plain text card title
// icon                 | React.ReactNode  | (required)    | Icon displayed next to title
// dailyText            | string           | "Daily"       | Label for daily metric (left side)
// dailyValue           | string           | "0$"          | Value for daily metric (right side)
// weeklyText           | string           | "Weekly"      | Label for weekly metric (left side)
// weeklyValue          | string           | "0$"          | Value for weekly metric (right side)
// containerWidth       | string           | "w-full"      | Tailwind width class for wrapper (e.g., "w-1/2", "w-64")
// classNameCard        | string           | ""            | Additional classes for Card component
// classNameDailyText   | string           | ""            | Classes for daily label text
// classNameDailyValue  | string           | ""            | Classes for daily value text
// classNameWeeklyText  | string           | ""            | Classes for weekly label text
// classNameWeeklyValue | string           | ""            | Classes for weekly value text
// classNameCardBody    | string           | ""            | Classes for the entire content area below header
// classNameTitle       | string           | ""            | Classes for title text

//an example of using this component and use all it's properties

{/* <InformationCardWithOutBackGround
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
  containerWidth="w-96" // Fixed width of 384px
  classNameCard="border-2 border-gray-200 dark:border-gray-600" // Custom border
  // Text Styling Classes
  classNameTitle="text-lg font-bold uppercase tracking-wide" // Custom title style
  classNameDailyText="text-gray-700 dark:text-gray-300 text-sm"
  classNameDailyValue="text-green-600 dark:text-green-400 font-bold text-lg"
  classNameWeeklyText="text-gray-700 dark:text-gray-300 text-sm"
  classNameWeeklyValue="text-blue-600 dark:text-blue-400 font-bold"
  // Body Styling
  classNameCardBody="bg-opacity-90 hover:bg-opacity-100 transition-all"
/> */}
