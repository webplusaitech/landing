import React, { FC, MouseEventHandler, ReactElement, useMemo } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

type ButtonVariant = 'standard' | 'outline';
type ButtonColor = 'default' | 'primary' | 'info' | 'green' | 'red' | 'white' | string;
type IconPosition = 'left' | 'right';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  rounded?: boolean;
  icon?: ReactElement;
  iconPosition?: IconPosition;
  iconClass?: string;
  type?: 'button' | 'submit' | 'reset';
  link?: string;
  href?: string;
  disabled?: boolean;
  responsive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
}

export const Button: FC<IButtonProps> = ({
  children,
  className = '',
  variant = 'standard',
  color = 'primary',
  rounded = false,
  iconPosition = 'left',
  iconClass = '',
  icon,
  responsive = true,
  link,
  href,
  size = 'md',
  ...props
}) => {
  const buttonTheme = useMemo(() => {
    const classes: string[] = [];
    if (variant === 'outline') {
      classes.push('border border-black-light hover:bg-black hover:text-white transition-all');
    }
    switch (color) {
      case 'primary':
        if (variant === 'standard') {
          classes.push('bg-primary text-white hover:bg-blue-100 hover:text-black');
        } else {
          classes.push('text-primary border-primary hover:bg-primary hover:text-white');
        }
        break;

      case 'secondary':
        if (variant === 'standard') {
          classes.push('bg-secondary text-white hover:bg-blue-400');
        } else {
          classes.push('text-primary border-primary hover:bg-primary hover:text-white');
        }
        break;

      case 'blue':
        if (variant === 'standard') {
          classes.push('bg-blue-dark hover:bg-blue-light text-white');
        } else {
          classes.push('text-info border-info hover:bg-info hover:text-white');
        }
        break;

      case 'white':
        if (variant === 'standard') {
          classes.push(
            'bg-white text-secondary hover:bg-secondary border-2 border-white hover:text-white'
          );
        } else {
          classes.push('text-white border-white hover:bg-white hover:text-black');
        }
        break;
      case 'green':
        if (variant === 'standard') {
          classes.push('bg-green-dark text-white hover:bg-green-light');
        } else {
          classes.push('text-green-dark border-green-dark hover:bg-green-dark hover:text-white');
        }
        break;
      case 'red':
        if (variant === 'standard') {
          classes.push('bg-red text-white hover:bg-primary');
        } else {
          classes.push('text-red border-red hover:bg-red hover:text-white');
        }
        break;
    }

    return classes;
  }, [variant, color]);
  const button = (
    <button
      className={classnames(
        'min-w-[52px]',
        'inline-flex items-center justify-center py-4 px-12 rounded-0 whitespace-nowrap',
        'outline-none transition-all duration-300',
        rounded && '!rounded-full',
        size === 'sm' && 'py-2 px-6',
        buttonTheme,
        className
      )}
      {...props}
    >
      {iconPosition === 'left' && !!icon && (
        <div className={classnames('flex-shrink-0 flex items-center', iconClass || 'mr-2')}>
          {icon}
        </div>
      )}
      {children}
      {iconPosition === 'right' && !!icon && (
        <div className={classnames('flex-shrink-0 flex items-center', iconClass || 'ml-2')}>
          {icon}
        </div>
      )}
    </button>
  );

  if (link) {
    return <Link href={link}>{button}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank">
        {button}
      </a>
    );
  }

  return button;
};
