import { Card, List } from "antd";
import { useTheme } from "../../ThemeContext";
import ListItemTag from "./ListItemTag";

interface ListCardWithOutBackGroundProps {
  titleText?: string;
  containerWidth?: string;
  classNameCard?: string;
  classNameTitle?: string;
  classNameCardBody?: string;
  listClassName?: string;
  loading?: boolean;

  // List item configuration
  leftText?: string;
  rightValue?: string | number;
  tagType?: "none" | "NA" | "OT";

  // ClassName props for list items
  containerClassName?: string;
  leftTextClassName?: string;
  rightValueClassName?: string;

  // Support for multiple list items
  listData?: Array<{
    leftText?: string;
    rightValue?: string | number;
    tagType?: "none" | "NA" | "OT";
    isBold?: boolean;
    // Individual classNames can be overridden per item
    containerClassName?: string;
    leftTextClassName?: string;
    rightValueClassName?: string;
  }>;
}

const defaultProps: Partial<ListCardWithOutBackGroundProps> = {
  titleText: "List Card",
  containerWidth: "w-full",
  classNameCard: "",
  classNameTitle: "",
  classNameCardBody: "",
  listClassName: "",
  loading: false,

  // List item defaults
  leftText: "Item text",
  rightValue: "0",
  tagType: "none",

  // Default className props
  containerClassName: "",
  leftTextClassName: "",
  rightValueClassName: "",

  // Default list data
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
};

const ListCardWithOutBackGround: React.FC<ListCardWithOutBackGroundProps> = (
  props
) => {
  const {
    titleText,
    containerWidth,
    classNameCard,
    classNameTitle,
    classNameCardBody,
    listClassName,
    loading,
    listData = [],
    // ListItemTag props
    containerClassName,
    leftTextClassName,
    rightValueClassName,
    // Other props that might be passed to individual items
    ...restItemProps
  } = { ...defaultProps, ...props };

  const { isDarkMode } = useTheme();
  const bgColor = "var(--color-no-bg-card-background)";

  // Separate items by tag type
  const noTagItems = listData.filter((item) => item.tagType === "none");
  const otherItems = listData.filter((item) => item.tagType !== "none");

  // Check if there are any items at all
  const hasItems = listData.length > 0;

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
        }
      >
        <div
          className={`bg-no-bg-card p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}
        >
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
              renderItem={(item) => (
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
              )}
            />
          )}

          {/* Show "On Track?" section only if there are tagged items */}
          {otherItems.length > 0 && (
            <>
              <div className="my-4 text-center">
                <span className="text-base md:text-xl font-bold text-orange-500">
                  On Track?
                </span>
              </div>
              <List
                dataSource={otherItems}
                loading={loading}
                className={listClassName}
                locale={{ emptyText: "" }} // Hide default "No Data"
                renderItem={(item) => (
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
                )}
              />
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ListCardWithOutBackGround;

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
// leftText               | string                    | "Item text"        | Default left text for list items
// rightValue            | string | number           | "0"                | Default right value for list items
// tagType               | "none" | "NA" | "OT"      | "none"             | Default tag type for list items
// containerClassName     | string                    | ""                 | Default container class for list items
// leftTextClassName      | string                    | ""                 | Default left text class for list items
// rightValueClassName    | string                    | ""                 | Default right value class for list items
// listData              | Array<ListItemData>       | See below          | Array of list items with their own properties

//an example of using this component and use all it's properties

{/* <ListCardWithOutBackGround
  // Header Section
  titleText="Project Milestones"
  classNameTitle="text-xl font-bold text-blue-600 dark:text-blue-400"
  // Container & Card Styling
  containerWidth="w-full lg:w-2/3"
  classNameCard="border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-colors"
  classNameCardBody="bg-gray-50 dark:bg-gray-800/50"
  listClassName="divide-y divide-gray-200 dark:divide-gray-700"
  // Loading State
  loading={false}
  // Default List Item Properties
  leftText="Default Item"
  rightValue={0}
  tagType="none"
  // Default List Item Classes
  containerClassName="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-3 rounded-lg"
  leftTextClassName="font-medium text-gray-700 dark:text-gray-300"
  rightValueClassName="font-semibold text-green-600 dark:text-green-400"
  // Custom List Items
  listData={[
    {
      leftText: "Design Phase",
      rightValue: "100%",
      tagType: "OT",
      containerClassName: "bg-green-50 dark:bg-green-900/20",
      rightValueClassName: "font-bold text-green-700 dark:text-green-300",
    },
    {
      leftText: "Development",
      rightValue: 75,
      tagType: "OT",
      leftTextClassName: "font-semibold text-blue-600 dark:text-blue-400",
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
      leftTextClassName: "font-extrabold text-purple-600 dark:text-purple-400",
    },
    {
      leftText: "Deployment",
      rightValue: "0%",
      tagType: "none",
      containerClassName: "bg-yellow-50 dark:bg-yellow-900/20",
      rightValueClassName: "text-yellow-600 dark:text-yellow-400",
    },
  ]}
/> */}
