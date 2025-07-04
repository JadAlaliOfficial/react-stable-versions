import { Card, List } from "antd";
import { useTheme } from "../ThemeContext";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import ListItemTag from "./ListItemTag";

interface InfoCardListProps {
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
  tagType?: 'none' | 'NA' | 'OT';
  
  // ClassName props for list items
  containerClassName?: string;
  leftTextClassName?: string;
  rightValueClassName?: string;
  
  // Support for multiple list items
  listData?: Array<{
    leftText?: string;
    rightValue?: string | number;
    tagType?: 'none' | 'NA' | 'OT';
    isBold?: boolean;
    // Individual classNames can be overridden per item
    containerClassName?: string;
    leftTextClassName?: string;
    rightValueClassName?: string;
  }>;
}

const defaultProps: Partial<InfoCardListProps> = {
  titleText: "List Card",
  containerWidth: 'w-full',
  classNameCard: '',
  classNameTitle: '',
  classNameCardBody: '',
  listClassName: '',
  loading: false,
  
  // List item defaults
  leftText: "Item text",
  rightValue: "0",
  tagType: 'none',
  
  // Default className props
  containerClassName: '',
  leftTextClassName: '',
  rightValueClassName: '',
  
  // Default list data
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
};

const InfoCardList: React.FC<InfoCardListProps> = (props) => {
  const {
    titleText,
    containerWidth,
    classNameCard,
    classNameTitle,
    classNameCardBody,
    listClassName,
    loading,
    listData,
    // ListItemTag props
    containerClassName,
    leftTextClassName,
    rightValueClassName,
    // Other props that might be passed to individual items
    ...restItemProps
  } = { ...defaultProps, ...props };

  const { isDarkMode } = useTheme();
  const bgColor = 'var(--color-no-bg-card-background)';

  // Separate items by tag type
  const noTagItems = listData?.filter(item => item.tagType === 'none') || [];
  const otherItems = listData?.filter(item => item.tagType !== 'none') || [];
  
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
          <div
            className={`p-[0.3rem] md:px-[0.4rem] lg:px-[0.6rem] flex justify-center items-center text-bg-card-foreground bg-no-bg-card text-sm md:text-base lg:text-lg font-medium `}
          >
            <span className={`${isDarkMode ? "text-white" : "text-gray-800"} ${classNameTitle}`}>
              {titleText || ''}
            </span>
          </div>
        }
      >
        <div className={`bg-no-bg-card p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem] ${classNameCardBody}`}>
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
        </div>
      </Card>
    </FadeContent>
  );
};

export default InfoCardList;