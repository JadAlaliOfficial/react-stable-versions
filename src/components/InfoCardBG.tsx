// c:\xampp\htdocs\react-stable-versions\src\components\InfoCardBG.tsx
import { Card } from "antd";
import { useTheme } from "../ThemeContext";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";

/**
 * InfoCardBG Component
 * 
 * A customizable information card component with global background and foreground colors.
 * This component supports dark/light mode and provides extensive customization options
 * for colors and text content in each section except for the title which uses ShinyText animation.
 * 
 * Features:
 * - Responsive design with different text sizes for various screen sizes
 * - Support for dark/light mode through ThemeContext
 * - Customizable header background colors for both dark and light modes
 * - Customizable text content for daily and weekly sections
 * - Custom CSS classes for styling each part of the card
 * - Fade-in animation effect when the component mounts
 */
interface InfoCardBGProps {
  titleText?: string;                // Text for the card title (uses ShinyText animation)
  icon: React.ReactNode;             // Icon to display in the header
  headerLightBgColor?: string;       // Background color for header in light mode
  headerDarkBgColor?: string;        // Background color for header in dark mode
  dailyText?: string;                // Label for the daily section
  dailyValue?: string;               // Value for the daily section
  weeklyText?: string;               // Label for the weekly section
  weeklyValue?: string;              // Value for the weekly section
  containerWidth?: string;           // Width of the container (Tailwind class)
  classNameCard?: string;            // Additional CSS class for the card
  classNameDailyText?: string;       // Additional CSS class for daily text
  classNameDailyValue?: string;      // Additional CSS class for daily value
  classNameWeeklyText?: string;      // Additional CSS class for weekly text
  classNameWeeklyValue?: string;     // Additional CSS class for weekly value
  classNameCardBody?: string;        // Additional CSS class for the card body
}

// Define default props directly in the interface
// These values will be used if the corresponding props are not provided
const defaultProps: Partial<InfoCardBGProps> = {
  titleText: "something",
  // Global background colors from CSS variables for consistent theming
  headerLightBgColor: `var(--color-bg-card-header-background)`,
  headerDarkBgColor: `var(--color-bg-card-header-background)`,
  dailyText: "Daily",
  dailyValue: "0$",
  weeklyText: "Weekly",
  weeklyValue: "0$",
  containerWidth: 'w-full',
  classNameCard: '',
  classNameDailyText: '',
  classNameDailyValue: '',
  classNameWeeklyText: '',
  classNameWeeklyValue: '',
  classNameCardBody: ''
};

/**
 * InfoCardBG Component Implementation
 * 
 * Renders a card with customizable header and body sections.
 * Uses global background/foreground colors from CSS variables and ThemeContext
 * for consistent theming across the application.
 */
const InfoCardBG: React.FC<InfoCardBGProps> = (props) => {
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
    classNameCardBody
  } = { ...defaultProps, ...props };

  // Get the current theme mode (dark/light)
  const { isDarkMode } = useTheme();
  return (
    // FadeContent provides animation when the component mounts
    <FadeContent
      className={containerWidth}
      blur={true}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
    >
      {/* Main card component with customizable styling */}
      <Card
        bordered={true}
        className={`w-full rounded-[0.5rem] overflow-hidden shadow-custom p-0 m-0 ${classNameCard}`}
        styles={{
          header: {
            // Apply different background colors based on theme mode
            backgroundColor: ` ${isDarkMode ? headerLightBgColor : headerDarkBgColor}`,
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
            {/* ShinyText animation for title - not customizable in terms of styling */}
            <ShinyText
              text={titleText || ''}
              disabled={false}
              speed={3}
              className={
                isDarkMode ? "custom-class  light-mode" : "custom-class"
              }
            />
            {icon}
          </div>
        }
      >
        {/* Card body with daily and weekly information */}
        <div className={`bg-bg-card-body p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}>
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
    </FadeContent>
  );
};

export default InfoCardBG;
