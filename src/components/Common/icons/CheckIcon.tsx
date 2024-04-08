import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const CheckIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={16} baseHeight={16} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 16 16">
        <path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M7,12L3.48,8.48l1.414-1.414L7,9.172l4.71-4.71	l1.414,1.414L7,12z" />
      </svg>
    )}
  </Icon>
);
