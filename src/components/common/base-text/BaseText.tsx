import BaseView from '../base-view/BaseView.tsx';
import { twMerge } from 'tailwind-merge';
import { FC } from 'react';
import { BaseTextProps } from './BaseText.interface.ts';

export const BaseText: FC<BaseTextProps> = (props) => {
  const { label, className, textClassName } = props;

  const classes = twMerge(`
   flex-row gap-4
   p-2
   ${className || ''}
  `);

  const textClasses = twMerge(`
   text-slate-400
   ${textClassName || ''}
  `);

  return (
    <BaseView className={classes}>
      <span className={textClasses}>{label}</span>
    </BaseView>
  );
};
