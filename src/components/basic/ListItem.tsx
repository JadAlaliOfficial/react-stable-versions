import React from "react";
import { motion } from "framer-motion";

interface ListItemProps {
  leftIcon?: React.ReactNode;
  nameText?: string;
  percentageValue?: string;
  dollarValue?: string;
  percentageChange?: string;
  rightIcon?: React.ReactNode;
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
  nameText = "Item Name",
  percentageValue = "0%",
  dollarValue = "$0",
  percentageChange = "+0%",
  rightIcon,
  containerClassName = "",
  leftIconClassName = "",
  nameTextClassName = "",
  percentageValueClassName = "",
  dollarValueClassName = "",
  percentageChangeClassName = "",
  rightIconClassName = "",
  leftColumnClassName = "flex flex-col justify-center items-center",
  rightColumnClassName = "flex flex-col justify-center items-center",
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
      className={`grid grid-cols-4 gap-1 md:gap-2 items-center
        text-xs md:text-base lg:text-lg
        text-bg-card-foreground w-full ${containerClassName}`}
    >
      <div className={`flex justify-start ${leftIconClassName}`}>
        {leftIcon || <div className="w-6 h-6" />}
      </div>

      <div className={`flex flex-col overflow-hidden ${leftColumnClassName}`}>
        <span className={`truncate ${nameTextClassName}`}>{nameText}</span>
        <span className={`truncate ${percentageValueClassName}`}>
          {percentageValue}
        </span>
      </div>

      <div className={`flex flex-col overflow-hidden ${rightColumnClassName}`}>
        <span className={`truncate ${dollarValueClassName}`}>
          {dollarValue}
        </span>
        <span className={`truncate ${percentageChangeClassName}`}>
          {percentageChange}
        </span>
      </div>

      <div className={`flex justify-end ${rightIconClassName}`}>
        {rightIcon || <div className="w-6 h-6" />}
      </div>
    </motion.div>
  );
};

export default ListItem;
