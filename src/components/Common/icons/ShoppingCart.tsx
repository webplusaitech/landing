import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const ShoppingCartIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 1664 1408">
        <path
          fill="currentColor"
          d="M640 1280q0 52-38 90t-90 38t-90-38t-38-90t38-90t90-38t90 38t38 90zm896 0q0 52-38 90t-90 38t-90-38t-38-90t38-90t90-38t90 38t38 90zm128-1088v512q0 24-16.5 42.5T1607 768L563 890q13 60 13 70q0 16-24 64h920q26 0 45 19t19 45t-19 45t-45 19H448q-26 0-45-19t-19-45q0-11 8-31.5t16-36t21.5-40T445 951L268 128H64q-26 0-45-19T0 64t19-45T64 0h256q16 0 28.5 6.5T368 22t13 24.5t8 26t5.5 29.5t4.5 26h1201q26 0 45 19t19 45z"
        />
      </svg>
    )}
  </Icon>
);
