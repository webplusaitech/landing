import React, { ComponentProps, FC, ReactNode } from 'react';
import classnames from 'classnames';

type TextAreaProps = {
  label?: string;
  className?: string;
  icon?: ReactNode;
  error?: string;
} & ComponentProps<'textarea'>;

export const TextArea: FC<TextAreaProps> = ({
  className,
  color = 'yellow',
  name,
  label,
  placeholder,
  icon,
  required = false,
  error,
  ...restProps
}) => {
  return (
    <div>
      <div className="relative flex flex-col w-full box-content">
        {label && (
          <span className="text-white text-md mb-2">
            {label} {required ? '*' : ''}
          </span>
        )}
        <textarea
          className={classnames(
            'min-h-25 bg-white pt-3.5 pb-1.5 pr-5 pl-5 text-4 w-full text-primary-dark placeholder-gray-400 transition-all duration-75 border-2 border-gray-50 focus:border-blue-50',
            className
          )}
          name={name}
          placeholder={placeholder}
          rows={3}
          {...restProps}
        />
        {icon && <div className="absolute left-3.5 top-4 text-gray-100 flex">{icon}</div>}
      </div>
      {error && <p className="text-red text-sm ml-2 mt-1">{error}</p>}
    </div>
  );
};
