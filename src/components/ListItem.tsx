import React from 'react';

interface ListItemProps {
  leftIcon?: React.ReactNode;
  nameText?: string;
  percentageValue?: string;
  dollarValue?: string;
  percentageChange?: string;
  rightIcon?: React.ReactNode;
  // Added className props for each element
  containerClassName?: string;
  leftIconClassName?: string;
  nameTextClassName?: string;
  percentageValueClassName?: string;
  dollarValueClassName?: string;
  percentageChangeClassName?: string;
  rightIconClassName?: string;
  leftColumnClassName?: string;
  rightColumnClassName?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  leftIcon,
  nameText = 'Item Name',
  percentageValue = '0%',
  dollarValue = '$0',
  percentageChange = '+0%',
  rightIcon,
  // Default values for className props
  containerClassName = '',
  leftIconClassName = '',
  nameTextClassName = '',
  percentageValueClassName = '',
  dollarValueClassName = '',
  percentageChangeClassName = '',
  rightIconClassName = '',
  leftColumnClassName = 'flex flex-col',
  rightColumnClassName = 'flex flex-col',
}) => {
  return (
    <div
      className={`text-xs md:text-base lg:text-lg
      text-bg-card-foreground w-full flex justify-between items-center ${containerClassName}`}
    >
      {leftIcon && <div className={leftIconClassName}>{leftIcon}</div>}
      <div className={leftColumnClassName}>
        <span className={nameTextClassName}>{nameText}</span>
        <span className={percentageValueClassName}>{percentageValue}</span>
      </div>
      <div className={rightColumnClassName}>
        <span className={dollarValueClassName}>{dollarValue}</span>
        <span className={percentageChangeClassName}>{percentageChange}</span>
      </div>
      {rightIcon && <div className={rightIconClassName}>{rightIcon}</div>}
    </div>
  );
};

export default ListItem;