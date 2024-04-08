import React, { ComponentProps, FC, ReactNode } from 'react';
import classnames from 'classnames';

type InputProps = {
  label?: string;
  className?;
  icon?: ReactNode;
  error?: string;
} & ComponentProps<'input'>;

export const Input: FC<InputProps> = ({
  className,
  color = 'yellow',
  name,
  label,
  placeholder,
  required = false,
  icon,
  error,
  ...restProps
}) => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col w-full box-content">
        {label && (
          <span className="text-gray-100 text-md mb-2">
            {label} {required ? '*' : ''}
          </span>
        )}
        <input
          className={classnames(
            'h-13.5 py-1.5 pr-5 pl-5 text-4 text-primary-dark w-full placeholder-gray-400 transition-all duration-75 bg-white border-2 border-gray-50 focus:border-blue-100',
            icon && '!pl-10',
            className
          )}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-100 flex">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="text-red text-sm ml-2 mt-1">{error}</p>}
    </div>
  );
};
