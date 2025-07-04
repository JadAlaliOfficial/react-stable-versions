import React from 'react';
import { Tag } from 'antd';

interface ListItemTagProps {
  leftText?: string;
  rightValue?: string | number;
  tagType?: 'none' | 'NA' | 'OT';
  containerClassName?: string;
  leftTextClassName?: string;
  rightValueClassName?: string;
}

const ListItemTag: React.FC<ListItemTagProps> = ({
  leftText = 'Description text',
  rightValue = '0',
  tagType = 'none',
  containerClassName = '',
  leftTextClassName = '',
  rightValueClassName = '',
}) => {
  return (
    <div
      className={`flex justify-between items-center text-xs md:text-base w-full ${containerClassName}`}
    >
      <span className={`text-bg-card-foreground/55 ${leftTextClassName}`}>
        {leftText}
      </span>
      
      <div className="flex  items-center gap-2">
        <span className={`text-bg-card-foreground font-semibold ${rightValueClassName}`}>
          {rightValue}
        </span>
        {tagType === 'NA' && (
          <Tag color="red" className='m-0'>NA</Tag>
        )}
        {tagType === 'OT' && (
          <Tag color="green" className='m-0'>OT</Tag>
        )}
      </div>
    </div>
  );
};

export default ListItemTag;