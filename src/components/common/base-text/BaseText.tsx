import BaseView from '../base-view/BaseView.tsx';
import { twMerge } from 'tailwind-merge';
import { FC } from 'react';
import { BaseTextProps } from './BaseText.interface.ts';

export const BaseText: FC<BaseTextProps> = (props) => {
  const { label, className } = props;

  const classes = twMerge(`
   flex-row gap-4
   p-4
   ${className || ''}
  `);

  const textClasses = twMerge(`
   text-slate-400
  `);

  return (
    <BaseView className={classes}>
      <span className={textClasses}>{label}</span>
    </BaseView>
  );
};
