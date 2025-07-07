import { Card, List, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useTheme } from "../../ThemeContext";
import ListItemTag from "./ListItemTag";
import { motion } from "framer-motion";

interface ListCardWithOutBackGroundWithTabsProps {
  titleText?: string;
  containerWidth?: string;
  classNameCard?: string;
  classNameTitle?: string;
  classNameCardBody?: string;
  listClassName?: string;
  loading?: boolean;

  // Tab configuration
  tabs?: Array<{
    key: string;
    label: string;
    listData: Array<{
      leftText?: string;
      rightValue?: string | number;
      tagType?: "none" | "NA" | "OT";
      isBold?: boolean;
      containerClassName?: string;
      leftTextClassName?: string;
      rightValueClassName?: string;
    }>;
  }>;

  // List item configuration (fallback if no tabs provided)
  leftText?: string;
  rightValue?: string | number;
  tagType?: "none" | "NA" | "OT";

  // ClassName props for list items
  containerClassName?: string;
  leftTextClassName?: string;
  rightValueClassName?: string;

  // Support for multiple list items (fallback if no tabs provided)
  listData?: Array<{
    leftText?: string;
    rightValue?: string | number;
    tagType?: "none" | "NA" | "OT";
    isBold?: boolean;
    containerClassName?: string;
    leftTextClassName?: string;
    rightValueClassName?: string;
  }>;
}

const defaultProps: Partial<ListCardWithOutBackGroundWithTabsProps> = {
  titleText: "List Card",
  containerWidth: "w-full",
  classNameCard: "",
  classNameTitle: "",
  classNameCardBody: "",
  listClassName: "",
  loading: false,

  // Default tabs configuration
  tabs: [
    {
      key: "tab1",
      label: "Tab 1",
      listData: [
        {
          leftText: "Item 1",
          rightValue: "100",
          tagType: "OT",
        },
        {
          leftText: "Item 2",
          rightValue: "50",
          tagType: "NA",
        },
      ],
    },
    {
      key: "tab2",
      label: "Tab 2",
      listData: [
        {
          leftText: "Item A",
          rightValue: "200",
          tagType: "none",
        },
        {
          leftText: "Item B",
          rightValue: "75",
          tagType: "OT",
        },
      ],
    },
  ],

  // Fallback list item defaults (used if no tabs provided)
  leftText: "Item text",
  rightValue: "0",
  tagType: "none",
  containerClassName: "",
  leftTextClassName: "",
  rightValueClassName: "",
};

const ListCardWithOutBackGroundWithTabs: React.FC<
  ListCardWithOutBackGroundWithTabsProps
> = (props) => {
  const {
    titleText,
    containerWidth,
    classNameCard,
    classNameTitle,
    classNameCardBody,
    listClassName,
    loading,
    tabs,
    listData = [], // Fallback if no tabs provided
    // ListItemTag props
    containerClassName,
    leftTextClassName,
    rightValueClassName,
    // Other props that might be passed to individual items
    ...restItemProps
  } = { ...defaultProps, ...props };

  const { isDarkMode } = useTheme();
  const bgColor = "var(--color-no-bg-card-background)";

  const renderListContent = (
    data: Array<{
      leftText?: string;
      rightValue?: string | number;
      tagType?: "none" | "NA" | "OT";
      isBold?: boolean;
      containerClassName?: string;
      leftTextClassName?: string;
      rightValueClassName?: string;
    }> = []
  ) => {
    // Separate items by tag type
    const noTagItems = data.filter((item) => item.tagType === "none");
    const otherItems = data.filter((item) => item.tagType !== "none");
    const hasItems = data.length > 0;

    return (
      <>
        {/* Show "No Data" only when there are no items at all */}
        {!hasItems && (
          <div className="text-center py-4 text-gray-500">No Data</div>
        )}

        {/* Show no-tag items if they exist */}
        {noTagItems.length > 0 && (
          <List
            dataSource={noTagItems}
            loading={loading}
            className={listClassName}
            locale={{ emptyText: "" }} // Hide default "No Data"
            renderItem={(item, index) => (
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
                <List.Item className="!p-2 !border-0 !mb-2 last:!mb-1">
                  <ListItemTag
                    {...restItemProps}
                    {...item}
                    containerClassName={
                      item.containerClassName || containerClassName
                    }
                    leftTextClassName={
                      item.leftTextClassName || leftTextClassName
                    }
                    rightValueClassName={
                      item.rightValueClassName || rightValueClassName
                    }
                  />
                </List.Item>
              </motion.div>
            )}
          />
        )}

        {/* Show "On Track?" section only if there are tagged items */}
        {otherItems.length > 0 && (
          <>
            <div className="my-4 text-center">
              <span className="text-xl font-bold text-orange-500">
                On Track?
              </span>
            </div>
            <List
              dataSource={otherItems}
              loading={loading}
              className={listClassName}
              locale={{ emptyText: "" }} // Hide default "No Data"
              renderItem={(item, index) => (
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
                  <List.Item className="!p-2 !border-0 !mb-2 last:!mb-0">
                    <ListItemTag
                      {...restItemProps}
                      {...item}
                      containerClassName={
                        item.containerClassName || containerClassName
                      }
                      leftTextClassName={
                        item.leftTextClassName || leftTextClassName
                      }
                      rightValueClassName={
                        item.rightValueClassName || rightValueClassName
                      }
                    />
                  </List.Item>
                </motion.div>
              )}
            />
          </>
        )}
      </>
    );
  };

  const items: TabsProps["items"] =
    tabs?.map((tab) => ({
      key: tab.key,
      label: tab.label,
      children: (
        <div
          className={`bg-no-bg-card p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}
        >
          {renderListContent(tab.listData)}
        </div>
      ),
    })) || [];

  // Fallback to single list if no tabs are provided
  const fallbackContent = (
    <div
      className={`bg-no-bg-card p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}
    >
      {renderListContent(listData)}
    </div>
  );

  return (
    <div className={containerWidth}>
      <Card
        bordered={true}
        className={`w-full rounded-[0.5rem] overflow-hidden shadow-custom p-0 m-0 ${classNameCard}`}
        styles={{
          header: {
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
          <div className="flex flex-col">
            <div
              className={`p-[0.3rem] md:px-[0.4rem] lg:px-[0.6rem] flex justify-center items-center text-bg-card-foreground bg-no-bg-card text-sm md:text-base lg:text-lg font-medium `}
            >
              <span
                className={`${
                  isDarkMode ? "text-white" : "text-gray-800"
                } ${classNameTitle}`}
              >
                {titleText || ""}
              </span>
            </div>
            {tabs && tabs.length > 0 && (
              <Tabs
                defaultActiveKey={tabs[0].key}
                items={items}
                className="bg-no-bg-card"
                tabBarStyle={{
                  marginBottom: 0,
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                }}
              />
            )}
          </div>
        }
      >
        {!tabs || tabs.length === 0 ? fallbackContent : null}
      </Card>
    </div>
  );
};

export default ListCardWithOutBackGroundWithTabs;

// List of all properties and what they affect with default values

// Property               | Type                      | Default            | Description
// -----------------------|---------------------------|--------------------|------------------------------------------------------
// titleText              | string                    | "List Card"        | Text displayed in the card header
// containerWidth         | string                    | "w-full"           | Tailwind width class for wrapper div
// classNameCard          | string                    | ""                 | Additional classes for Card component
// classNameTitle         | string                    | ""                 | Classes for the title text
// classNameCardBody      | string                    | ""                 | Classes for the card body container
// listClassName          | string                    | ""                 | Classes for the List component
// loading                | boolean                   | false              | Shows loading state when true
// tabs                   | Array<TabItem>            | See below          | Array of tab configurations with their own listData
//
// Fallback list item configuration (used when no tabs provided):
// leftText               | string                    | "Item text"        | Default left text for list items
// rightValue            | string | number           | "0"                | Default right value for list items
// tagType               | "none" | "NA" | "OT"      | "none"             | Default tag type for list items
// containerClassName     | string                    | ""                 | Default container class for list items
// leftTextClassName      | string                    | ""                 | Default left text class for list items
// rightValueClassName    | string                    | ""                 | Default right value class for list items
// listData              | Array<ListItemData>       | []                 | Fallback list items when no tabs provided

// Example of using this component with all properties

// <ListCardWithOutBackGroundWithTabs
//   // Header Section
//   titleText="Project Dashboard"
//   classNameTitle="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
//   // Container & Card Styling
//   containerWidth="w-full xl:w-4/5"
//   classNameCard="border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-all"
//   classNameCardBody="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
//   listClassName="divide-y divide-gray-200 dark:divide-gray-700"
//   // Loading State
//   loading={false}
//   // Fallback List Item Properties (used if no tabs provided)
//   leftText="Default Item"
//   rightValue={0}
//   tagType="none"
//   containerClassName="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-3 rounded"
//   leftTextClassName="font-medium text-gray-800 dark:text-gray-200"
//   rightValueClassName="font-semibold text-blue-600 dark:text-blue-400"
//   // Tab Configuration
//   tabs={[
//     {
//       key: "progress",
//       label: "Progress",
//       listData: [
//         {
//           leftText: "Frontend Completion",
//           rightValue: "85%",
//           tagType: "OT",
//           containerClassName: "bg-green-50/50 dark:bg-green-900/20",
//           rightValueClassName: "font-bold text-green-700 dark:text-green-300",
//         },
//         {
//           leftText: "Backend API",
//           rightValue: "92%",
//           tagType: "OT",
//           leftTextClassName: "font-semibold",
//           rightValueClassName: "font-bold",
//         },
//         {
//           leftText: "Database Migration",
//           rightValue: "45%",
//           tagType: "NA",
//           containerClassName: "bg-red-50/50 dark:bg-red-900/20",
//           rightValueClassName: "font-bold text-red-600 dark:text-red-400",
//         },
//       ],
//     },
//     {
//       key: "team",
//       label: "Team",
//       listData: [
//         {
//           leftText: "Developers",
//           rightValue: 8,
//           tagType: "none",
//           isBold: true,
//         },
//         {
//           leftText: "Designers",
//           rightValue: 3,
//           tagType: "none",
//         },
//         {
//           leftText: "QA Engineers",
//           rightValue: 2,
//           tagType: "OT",
//         },
//         {
//           leftText: "Blockers",
//           rightValue: 4,
//           tagType: "NA",
//           rightValueClassName: "text-red-600 dark:text-red-400 font-bold",
//         },
//       ],
//     },
//     {
//       key: "milestones",
//       label: "Milestones",
//       listData: [
//         {
//           leftText: "Sprint 1 Completed",
//           rightValue: "100%",
//           tagType: "OT",
//           containerClassName: "bg-blue-50/50 dark:bg-blue-900/20",
//         },
//         {
//           leftText: "Sprint 2 On Track",
//           rightValue: "75%",
//           tagType: "OT",
//         },
//         {
//           leftText: "Release Candidate",
//           rightValue: "30%",
//           tagType: "NA",
//           isBold: true,
//         },
//       ],
//     },
//   ]}
// />
