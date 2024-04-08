import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const LineChartIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={36} baseHeight={36} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 2048 1536">
        <path
          fill="currentColor"
          d="M2048 1408v128H0V0h128v1408h1920zM1920 160v435q0 21-19.5 29.5T1865 617l-121-121l-633 633q-10 10-23 10t-23-10L832 896l-416 416l-192-192l585-585q10-10 23-10t23 10l233 233l464-464l-121-121q-16-16-7.5-35.5T1453 128h435q14 0 23 9t9 23z"
        />
      </svg>
    )}
  </Icon>
);
