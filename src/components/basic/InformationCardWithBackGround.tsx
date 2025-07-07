// c:\xampp\htdocs\react-stable-versions\src\components\InformationCardWithBackGround.tsx
import { Card } from "antd";
import { useTheme } from "../../ThemeContext";

/**
 * InformationCardWithBackGround Component
 *
 * A customizable information card component with global background and foreground colors.
 * This component supports dark/light mode and provides extensive customization options
 * for colors and text content in each section.
 *
 * Features:
 * - Responsive design with different text sizes for various screen sizes
 * - Support for dark/light mode through ThemeContext
 * - Customizable header background colors for both dark and light modes
 * - Customizable text content for daily and weekly sections
 * - Custom CSS classes for styling each part of the card
 */
interface InformationCardWithBackGroundProps {
  titleText?: string; // Text for the card title
  icon: React.ReactNode; // Icon to display in the header
  headerLightBgColor?: string; // Background color for header in light mode
  headerDarkBgColor?: string; // Background color for header in dark mode
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
const defaultProps: Partial<InformationCardWithBackGroundProps> = {
  titleText: "something",
  // Global background colors from CSS variables for consistent theming
  headerLightBgColor: `var(--color-bg-card-header-background)`,
  headerDarkBgColor: `var(--color-bg-card-header-background)`,
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
  classNameTitle: "",
};

/**
 * InformationCardWithBackGround Component Implementation
 *
 * Renders a card with customizable header and body sections.
 * Uses global background/foreground colors from CSS variables and ThemeContext
 * for consistent theming across the application.
 */
const InformationCardWithBackGround: React.FC<InformationCardWithBackGroundProps> = (props) => {
  // Merge the default props with the provided props
  const {
    titleText,
    icon,
    headerLightBgColor,
    headerDarkBgColor,
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
    classNameTitle,
  } = { ...defaultProps, ...props };

  // Get the current theme mode (dark/light)
  const { isDarkMode } = useTheme();

  return (
    <div className={containerWidth}>
      {/* Main card component with customizable styling */}
      <Card
        bordered={true}
        className={`w-full rounded-[0.5rem] overflow-hidden shadow-custom p-0 m-0 ${classNameCard}`}
        styles={{
          header: {
            // Apply different background colors based on theme mode
            backgroundColor: ` ${
              isDarkMode ? headerLightBgColor : headerDarkBgColor
            }`,
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
            className={`p-[0.3rem] md:px-[0.4rem] lg:px-[0.6rem] flex justify-between items-center text-bg-card-foreground ${
              isDarkMode ? headerLightBgColor : headerDarkBgColor
            }  text text-xs md:text-sm lg:text-base font-medium 
            `}
          >
            {/* Regular text for title */}
            <span className={classNameTitle}>{titleText}</span>
            {icon}
          </div>
        }
      >
        {/* Card body with daily and weekly information */}
        <div
          className={`bg-bg-card-body p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}
        >
          {/* Daily information row with customizable text and styling */}
          <div className="text-xs text-bg-card-foreground md:text-base lg:text-lg  flex justify-between font-bold mb-2">
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
    </div>
  );
};

export default InformationCardWithBackGround;

//a list of all the properties and what they effect  and the default value

// Property             | Type             | Default       | Description
// ---------------------|------------------|---------------|------------------------------------------------------
// titleText            | string           | "something"   | Plain text card title
// icon                 | React.ReactNode  | (required)    | Icon displayed next to title
// headerLightBgColor   | string           | CSS variable  | Header background color in light mode
// headerDarkBgColor    | string           | CSS variable  | Header background color in dark mode
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
// classNameTitle       | string           | ""            | Classes for title text (replaces ShinyText)


//an example of using this component and use all it's properties

{/* <InformationCardWithBackGround
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
  classNameCard="hover:shadow-lg transition-shadow" // Adds hover effect
  // Text Styling Classes
  classNameTitle="text-lg text-white dark:text-black font-mono italic" // Custom title style
  classNameDailyText="text-gray-600 dark:text-gray-300"
  classNameDailyValue="text-green-600 font-bold"
  classNameWeeklyText="text-gray-600 dark:text-gray-300"
  classNameWeeklyValue="text-blue-600 font-bold"
  // Body Styling
  classNameCardBody="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
/> */}
