import { FC } from 'react';
import { ButtonProps } from './Button.interface.ts';
import BaseView from '../base-view/BaseView.tsx';
import { twMerge } from 'tailwind-merge';

export const Button: FC<ButtonProps> = (props) => {
  const { label, className, onClick } = props;

  const classes = twMerge(`
    bg-blue-800 
    ${className || ''}
  `);

  return (
    <BaseView>
      <button className={classes} onClick={onClick}>
        {label}
      </button>
    </BaseView>
  );
};
