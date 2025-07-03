// c:\xampp\htdocs\react-stable-versions\src\components\ListCardBG.tsx
import { Card, List } from "antd";
import { useTheme } from "../ThemeContext";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import ListItem from "./ListItem";

/**
 * ListCardBG Component
 *
 * A customizable list card component with global background and foreground colors.
 * This component supports dark/light mode and provides extensive customization options
 * for colors and text content in each section except for the title which uses ShinyText animation.
 *
 * Features:
 * - Responsive design with different text sizes for various screen sizes
 * - Support for dark/light mode through ThemeContext
 * - Customizable header background colors for both dark and light modes
 * - List items displayed using Ant Design List component
 * - Custom CSS classes for styling each part of the card
 * - Fade-in animation effect when the component mounts
 */
interface ListCardBGProps {
  titleText?: string; // Text for the card title (uses ShinyText animation)
  headerLightBgColor?: string; // Background color for header in light mode
  headerDarkBgColor?: string; // Background color for header in dark mode
  containerWidth?: string; // Width of the container (Tailwind class)
  classNameCard?: string; // Additional CSS class for the card
  classNameCardBody?: string; // Additional CSS class for the card body
  leftIcon?: React.ReactNode; // Icon to display on the left side of the list item
  rightIcon?: React.ReactNode; // Icon to display on the right side of the list item
  nameText?: string; // Name text to display
  percentageValue?: string; // Percentage value to display
  dollarValue?: string; // Dollar value to display
  percentageChange?: string; // Percentage change to display
}

// Define default props directly in the interface
// These values will be used if the corresponding props are not provided
const defaultProps: Partial<ListCardBGProps> = {
  titleText: "something",
  // Global background colors from CSS variables for consistent theming
  headerLightBgColor: `var(--color-bg-card-header-background)`,
  headerDarkBgColor: `var(--color-bg-card-header-background)`,
  containerWidth: "w-full",
  classNameCard: "",
  classNameCardBody: "",
  leftIcon: null,
  rightIcon: null,
  nameText: "Item Name",
  percentageValue: "0%",
  dollarValue: "$0",
  percentageChange: "+0%",
};

/**
 * ListCardBG Component Implementation
 *
 * Renders a card with customizable header and body sections.
 * Uses global background/foreground colors from CSS variables and ThemeContext
 * for consistent theming across the application.
 */
const ListCardBG: React.FC<ListCardBGProps> = (props) => {
  // Merge the default props with the provided props
  const {
    titleText,
    headerLightBgColor,
    headerDarkBgColor,
    containerWidth,
    classNameCard,
    classNameCardBody,
    leftIcon,
    rightIcon,
    nameText,
    percentageValue,
    dollarValue,
    percentageChange,
  } = { ...defaultProps, ...props };

  // Get the current theme mode (dark/light)
  const { isDarkMode } = useTheme();

  // Create list data from props
  const listData = [
    {
      isBold: true,
      leftIcon: leftIcon,
      nameText: nameText,
      percentageValue: percentageValue,
      dollarValue: dollarValue,
      percentageChange: percentageChange,
      rightIcon: rightIcon,
    },
    {
      isBold: false,
      leftIcon: leftIcon,
      nameText: nameText,
      percentageValue: percentageValue,
      dollarValue: dollarValue,
      percentageChange: percentageChange,
      rightIcon: rightIcon,
    },
  ];

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
        bordered={false}
        className={`w-full rounded-[0.5rem] overflow-hidden shadow-for-card p-0 m-0 ${classNameCard}`}
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
            {/* ShinyText animation for title - not customizable in terms of styling */}
            <ShinyText
              text={titleText || ""}
              disabled={false}
              speed={3}
              className={
                isDarkMode ? "custom-class  light-mode" : "custom-class"
              }
            />
          </div>
        }
      >
        {/* Card body with List component */}
        <div
          className={`bg-bg-card-body p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}
        >
          <List
            dataSource={listData}
            renderItem={(item) => (
              <List.Item
               
              >
                <ListItem {...item} />
              </List.Item>
            )}
          />
        </div>
      </Card>
    </FadeContent>
  );
};

export default ListCardBG;
