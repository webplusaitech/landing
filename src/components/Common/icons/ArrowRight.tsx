import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const ArrowRightIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5v-2Z"
        />
      </svg>
    )}
  </Icon>
);
