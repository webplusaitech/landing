import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const PriceTagIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m10.904 2.1l9.9 1.414l1.414 9.9l-9.193 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.413L10.905 2.1Zm.707 2.121L3.833 12l8.485 8.485l7.779-7.778l-1.061-7.425l-7.425-1.06Zm2.122 6.364a2 2 0 1 1 2.828-2.828a2 2 0 0 1-2.828 2.828Z"
        />
      </svg>
    )}
  </Icon>
);
