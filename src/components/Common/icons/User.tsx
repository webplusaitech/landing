import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const UserIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
        />
      </svg>
    )}
  </Icon>
);
