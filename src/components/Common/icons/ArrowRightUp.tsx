import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const ArrowRightUpIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414Z"
        />
      </svg>
    )}
  </Icon>
);
