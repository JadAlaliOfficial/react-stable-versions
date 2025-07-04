import { Card, List, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useTheme } from "../ThemeContext";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import ListItemTag from "./ListItemTag";

interface ListCardTagTabProps {
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
      tagType?: 'none' | 'NA' | 'OT';
      isBold?: boolean;
      containerClassName?: string;
      leftTextClassName?: string;
      rightValueClassName?: string;
    }>;
  }>;
  
  // List item configuration (fallback if no tabs provided)
  leftText?: string;
  rightValue?: string | number;
  tagType?: 'none' | 'NA' | 'OT';
  
  // ClassName props for list items
  containerClassName?: string;
  leftTextClassName?: string;
  rightValueClassName?: string;
  
  // Support for multiple list items (fallback if no tabs provided)
  listData?: Array<{
    leftText?: string;
    rightValue?: string | number;
    tagType?: 'none' | 'NA' | 'OT';
    isBold?: boolean;
    containerClassName?: string;
    leftTextClassName?: string;
    rightValueClassName?: string;
  }>;
}

const defaultProps: Partial<ListCardTagTabProps> = {
  titleText: "List Card",
  containerWidth: 'w-full',
  classNameCard: '',
  classNameTitle: '',
  classNameCardBody: '',
  listClassName: '',
  loading: false,
  
  // Default tabs configuration
  tabs: [
    {
      key: 'tab1',
      label: 'Tab 1',
      listData: [
        {
          leftText: "Item 1",
          rightValue: "100",
          tagType: 'OT'
        },
        {
          leftText: "Item 2",
          rightValue: "50",
          tagType: 'NA'
        }
      ]
    },
    {
      key: 'tab2',
      label: 'Tab 2',
      listData: [
        {
          leftText: "Item A",
          rightValue: "200",
          tagType: 'none'
        },
        {
          leftText: "Item B",
          rightValue: "75",
          tagType: 'OT'
        }
      ]
    }
  ],
  
  // Fallback list item defaults (used if no tabs provided)
  leftText: "Item text",
  rightValue: "0",
  tagType: 'none',
  containerClassName: '',
  leftTextClassName: '',
  rightValueClassName: '',
};

const ListCardTagTab: React.FC<ListCardTagTabProps> = (props) => {
  const {
    titleText,
    containerWidth,
    classNameCard,
    classNameTitle,
    classNameCardBody,
    listClassName,
    loading,
    tabs,
    listData, // Fallback if no tabs provided
    // ListItemTag props
    containerClassName,
    leftTextClassName,
    rightValueClassName,
    // Other props that might be passed to individual items
    ...restItemProps
  } = { ...defaultProps, ...props };

  const { isDarkMode } = useTheme();
  const bgColor = 'var(--color-no-bg-card-background)';

  const renderListContent = (data: Array<{
    leftText?: string;
    rightValue?: string | number;
    tagType?: 'none' | 'NA' | 'OT';
    isBold?: boolean;
    containerClassName?: string;
    leftTextClassName?: string;
    rightValueClassName?: string;
  }> = []) => {
    // Separate items by tag type
    const noTagItems = data?.filter(item => item.tagType === 'none') || [];
    const otherItems = data?.filter(item => item.tagType !== 'none') || [];
    
    return (
      <>
        {/* First render items with no tag */}
        <List
          dataSource={noTagItems}
          loading={loading}
          className={listClassName}
          renderItem={(item) => (
            <List.Item className="!p-2 !border-0 !mb-2 last:!mb-0">
              <ListItemTag
                {...restItemProps}
                {...item}
                containerClassName={item.containerClassName || containerClassName}
                leftTextClassName={item.leftTextClassName || leftTextClassName}
                rightValueClassName={item.rightValueClassName || rightValueClassName}
              />
            </List.Item>
          )}
        />

        {/* Add the "On Track?" warning text if there are other items */}
        {otherItems.length > 0 && (
          <div className="my-4 text-center">
            <span className="text-xl font-bold text-orange-500">On Track?</span>
          </div>
        )}

        {/* Then render the remaining items */}
        <List
          dataSource={otherItems}
          loading={loading}
          className={listClassName}
          renderItem={(item) => (
            <List.Item className="!p-2 !border-0 !mb-2 last:!mb-0">
              <ListItemTag
                {...restItemProps}
                {...item}
                containerClassName={item.containerClassName || containerClassName}
                leftTextClassName={item.leftTextClassName || leftTextClassName}
                rightValueClassName={item.rightValueClassName || rightValueClassName}
              />
            </List.Item>
          )}
        />
      </>
    );
  };

  const items: TabsProps['items'] = tabs?.map(tab => ({
    key: tab.key,
    label: tab.label,
    children: (
      <div className={`bg-no-bg-card p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}>
        {renderListContent(tab.listData)}
      </div>
    )
  })) || [];

  // Fallback to single list if no tabs are provided
  const fallbackContent = (
    <div className={`bg-no-bg-card p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}>
      {renderListContent(listData)}
    </div>
  );

  return (
    <FadeContent
      className={containerWidth}
      blur={true}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
    >
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
              <span className={`${isDarkMode ? "text-white" : "text-gray-800"} ${classNameTitle}`}>
                {titleText || ''}
              </span>
            </div>
            {tabs && tabs.length > 0 && (
              <Tabs 
                defaultActiveKey={tabs[0].key} 
                items={items}
                className="bg-no-bg-card"
                tabBarStyle={{
                  marginBottom: 0,
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem'
                }}
              />
            )}
          </div>
        }
      >
        {!tabs || tabs.length === 0 ? fallbackContent : null}
      </Card>
    </FadeContent>
  );
};

export default ListCardTagTab;