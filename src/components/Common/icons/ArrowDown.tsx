import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const ArrowDownIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <g id="feArrowDown0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g id="feArrowDown1" fill="currentColor">
            <path id="feArrowDown2" d="m6 7l6 6l6-6l2 2l-8 8l-8-8z" />
          </g>
        </g>
      </svg>
    )}
  </Icon>
);
