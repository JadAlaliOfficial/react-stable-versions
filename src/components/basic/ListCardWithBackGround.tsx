// c:\xampp\htdocs\react-stable-versions\src\components\ListCardWithBackGround.tsx
import { Card, List } from "antd";
import { useTheme } from "../../ThemeContext";
import ListItem from "./ListItem";
import React from "react";
import { motion } from "framer-motion";

/**
 * ListCardWithBackGround Component
 *
 * A customizable list card component with global background and foreground colors.
 * This component supports dark/light mode and provides extensive customization options
 * for colors and text content in each section.
 *
 * Features:
 * - Responsive design with different text sizes for various screen sizes
 * - Support for dark/light mode through ThemeContext
 * - Customizable header background colors for both dark and light modes
 * - List items displayed using Ant Design List component
 * - Custom CSS classes for styling each part of the card
 * - Full support for all ListItem component props
 */
interface ListCardWithBackGroundProps {
  titleText?: string; // Text for the card title
  headerLightBgColor?: string; // Background color for header in light mode
  headerDarkBgColor?: string; // Background color for header in dark mode
  containerWidth?: string; // Width of the container (Tailwind class)
  classNameCard?: string; // Additional CSS class for the card
  classNameCardBody?: string; // Additional CSS class for the card body
  classNameTitle?: string; // Additional CSS class for the title text

  // List item props (matching ListItemProps)
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  nameText?: string;
  percentageValue?: string;
  dollarValue?: string;
  percentageChange?: string;

  // ClassName props from ListItem
  containerClassName?: string;
  leftIconClassName?: string;
  nameTextClassName?: string;
  percentageValueClassName?: string;
  dollarValueClassName?: string;
  percentageChangeClassName?: string;
  rightIconClassName?: string;
  leftColumnClassName?: string;
  rightColumnClassName?: string;

  // Support for multiple list items
  listData?: Array<{
    leftIcon?: React.ReactNode;
    nameText?: string;
    percentageValue?: string;
    dollarValue?: string;
    percentageChange?: string;
    rightIcon?: React.ReactNode;
    isBold?: boolean;
    // Individual classNames can be overridden per item
    containerClassName?: string;
    leftIconClassName?: string;
    nameTextClassName?: string;
    percentageValueClassName?: string;
    dollarValueClassName?: string;
    percentageChangeClassName?: string;
    rightIconClassName?: string;
    leftColumnClassName?: string;
    rightColumnClassName?: string;
  }>;
}

// Define default props directly in the interface
// These values will be used if the corresponding props are not provided
const defaultProps: Partial<ListCardWithBackGroundProps> = {
  titleText: "Card Title",
  // Global background colors from CSS variables for consistent theming
  headerLightBgColor: `var(--color-bg-card-header-background)`,
  headerDarkBgColor: `var(--color-bg-card-header-background)`,
  containerWidth: "w-full",
  classNameCard: "",
  classNameCardBody: "",

  // List item defaults
  leftIcon: null,
  rightIcon: null,
  nameText: "Item Name",
  percentageValue: "0%",
  dollarValue: "$0",
  percentageChange: "+0%",

  // Default className props
  containerClassName: "",
  leftIconClassName: "",
  nameTextClassName: "",
  percentageValueClassName: "",
  dollarValueClassName: "",
  percentageChangeClassName: "",
  rightIconClassName: "",
  leftColumnClassName: "flex flex-col justify-center items-center",
  rightColumnClassName: "flex flex-col justify-center items-center",
  classNameTitle: "",
  // Default list data
  listData: [
    {
      isBold: true,
      nameText: "Item 1",
      percentageValue: "50%",
      dollarValue: "$100",
      percentageChange: "+5%",
    },
    {
      isBold: false,
      nameText: "Item 2",
      percentageValue: "30%",
      dollarValue: "$60",
      percentageChange: "-2%",
    },
  ],
};

/**
 * ListCardWithBackGround Component Implementation
 *
 * Renders a card with customizable header and body sections.
 * Uses global background/foreground colors from CSS variables and ThemeContext
 * for consistent theming across the application.
 */
const ListCardWithBackGround: React.FC<ListCardWithBackGroundProps> = (
  props
) => {
  // Merge the default props with the provided props
  const {
    titleText,
    headerLightBgColor,
    headerDarkBgColor,
    containerWidth,
    classNameCard,
    classNameCardBody,
    listData,
    // ListItem props
    containerClassName,
    leftIconClassName,
    nameTextClassName,
    percentageValueClassName,
    dollarValueClassName,
    percentageChangeClassName,
    rightIconClassName,
    leftColumnClassName,
    rightColumnClassName,
    classNameTitle,
    // Other props that might be passed to individual items
    ...restItemProps
  } = { ...defaultProps, ...props };

  const { isDarkMode } = useTheme();

  return (
    <div className={containerWidth}>
      {/* Main card component with customizable styling */}
      <Card
        bordered={true}
        className={`w-full rounded-[0.5rem] overflow-hidden border-none shadow-custom p-0 m-0 ${classNameCard}`}
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
          // Card header with title
          <div
            className={`p-[0.3rem] md:px-[0.4rem] lg:px-[0.6rem] flex justify-center items-center text-bg-card-foreground ${
              isDarkMode ? headerLightBgColor : headerDarkBgColor
            } text-sm md:text-base lg:text-lg font-medium 
            `}
          >
            {/* Regular text for title */}
            <span className={classNameTitle}>{titleText}</span>
          </div>
        }
      >
        {/* Card body with List component */}
        <div
          className={`bg-bg-card-body p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}
        >
          <List
            dataSource={listData}
            renderItem={(item,index) => (
              <motion.div
                initial={{ x: 50, y: 50 }}
                animate={{ x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.05, // Stagger the animations
                }}
              >
              <List.Item>
                <ListItem
                  {...restItemProps}
                  {...item}
                  // Apply global classNames unless overridden by item-specific ones
                  containerClassName={
                    item.containerClassName || containerClassName
                  }
                  leftIconClassName={
                    item.leftIconClassName || leftIconClassName
                  }
                  nameTextClassName={
                    item.nameTextClassName || nameTextClassName
                  }
                  percentageValueClassName={
                    item.percentageValueClassName || percentageValueClassName
                  }
                  dollarValueClassName={
                    item.dollarValueClassName || dollarValueClassName
                  }
                  percentageChangeClassName={
                    item.percentageChangeClassName || percentageChangeClassName
                  }
                  rightIconClassName={
                    item.rightIconClassName || rightIconClassName
                  }
                  leftColumnClassName={
                    item.leftColumnClassName || leftColumnClassName
                  }
                  rightColumnClassName={
                    item.rightColumnClassName || rightColumnClassName
                  }
                />
              </List.Item>
              </motion.div>
            )}
          />
        </div>
      </Card>
    </div>
  );
};

export default ListCardWithBackGround;

// List of all properties and what they affect with default values

// Property                     | Type                      | Default                          | Description
// -----------------------------|---------------------------|----------------------------------|------------------------------------------------------
// titleText                    | string                    | "Card Title"                     | Text displayed in the card header
// headerLightBgColor           | string                    | CSS variable                     | Header background color in light mode
// headerDarkBgColor            | string                    | CSS variable                     | Header background color in dark mode
// containerWidth               | string                    | "w-full"                         | Tailwind width class for wrapper div
// classNameCard                | string                    | ""                               | Additional classes for Card component
// classNameCardBody            | string                    | ""                               | Classes for the card body container
// leftIcon                     | React.ReactNode           | null                             | Default left icon for list items
// rightIcon                    | React.ReactNode           | null                             | Default right icon for list items
// nameText                     | string                    | "Item Name"                      | Default name text for list items
// percentageValue              | string                    | "0%"                             | Default percentage value for list items
// dollarValue                  | string                    | "$0"                             | Default dollar value for list items
// percentageChange             | string                    | "+0%"                            | Default percentage change for list items
// containerClassName           | string                    | ""                               | Default container class for list items
// leftIconClassName            | string                    | ""                               | Default left icon class for list items
// nameTextClassName            | string                    | ""                               | Default name text class for list items
// percentageValueClassName     | string                    | ""                               | Default percentage value class for list items
// dollarValueClassName         | string                    | ""                               | Default dollar value class for list items
// percentageChangeClassName    | string                    | ""                               | Default percentage change class for list items
// rightIconClassName           | string                    | ""                               | Default right icon class for list items
// leftColumnClassName          | string                    | "flex flex-col justify-center..."| Default left column class for list items
// rightColumnClassName         | string                    | "flex flex-col justify-center..."| Default right column class for list items
// listData                     | Array<ListItemData>       | See below                        | Array of list items with their own properties

// Example of using this component with all properties

// <ListCardWithBackGround
//   // Header Section
//   titleText="Financial Overview"
//   headerLightBgColor="#f0f9ff" // Light blue
//   headerDarkBgColor="#1e3a8a" // Dark blue
//   classNameTitle="text-lg text-white dark:text-black font-mono italic" // Custom title style
//   // Container & Card Styling
//   containerWidth="w-full md:w-1/2 lg:w-1/3"
//   classNameCard="hover:shadow-xl transition-all duration-300"
//   classNameCardBody="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
//   // Default List Item Properties
//   leftIcon={<DollarOutlined className="text-green-500" />}
//   rightIcon={<InfoCircleOutlined className="text-blue-500" />}
//   nameText="Default Item"
//   percentageValue="100%"
//   dollarValue="$1,000"
//   percentageChange="+10%"
//   // Default List Item Classes
//   containerClassName="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
//   leftIconClassName="text-xl mr-2"
//   nameTextClassName="font-medium text-gray-800 dark:text-gray-200"
//   percentageValueClassName="font-bold text-purple-600 dark:text-purple-400"
//   dollarValueClassName="font-semibold text-green-600 dark:text-green-400"
//   percentageChangeClassName="text-sm text-red-600 dark:text-red-400"
//   rightIconClassName="text-lg ml-2"
//   leftColumnClassName="flex flex-row items-center"
//   rightColumnClassName="flex flex-col items-end"
//   // Custom List Items
//   listData={[
//     {
//       leftIcon: <PieChartOutlined className="text-blue-500" />,
//       nameText: "Revenue",
//       percentageValue: "45%",
//       dollarValue: "$4,500",
//       percentageChange: "+12%",
//       isBold: true,
//       containerClassName: "bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg",
//       percentageChangeClassName: "text-sm text-green-600 dark:text-green-400",
//     },
//     {
//       leftIcon: <ShoppingOutlined className="text-orange-500" />,
//       nameText: "Expenses",
//       percentageValue: "30%",
//       dollarValue: "$3,000",
//       percentageChange: "-5%",
//       nameTextClassName: "font-semibold text-orange-600 dark:text-orange-400",
//       rightIcon: <WarningOutlined className="text-yellow-500" />,
//     },
//     {
//       leftIcon: <LineChartOutlined className="text-green-500" />,
//       nameText: "Profit",
//       percentageValue: "25%",
//       dollarValue: "$2,500",
//       percentageChange: "+18%",
//       rightIcon: <CheckCircleOutlined className="text-green-500" />,
//       percentageValueClassName:
//         "font-extrabold text-green-700 dark:text-green-300",
//     },
//     {
//       nameText: "Custom Item",
//       leftIcon: <StarOutlined className="text-yellow-500" />,
//       rightIcon: <RightOutlined />,
//       dollarValue: "$750",
//       percentageValue: "7.5%",
//       percentageChange: "+2.5%",
//       leftColumnClassName: "flex flex-row-reverse justify-end items-center",
//       rightColumnClassName: "flex flex-row items-center gap-2",
//     },
//   ]}
// />;
