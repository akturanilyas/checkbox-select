import { createElement, FC } from 'react';
import { CustomIconProviderProps } from './CustomIconProvider.interface.ts';
import BaseView from '../components/common/base-view/BaseView.tsx';
import { twMerge } from 'tailwind-merge';

export const CustomIconProvider: FC<CustomIconProviderProps> = (props) => {
  const { icon, size, className, iconClassName } = props;

  const iconClasses = twMerge(`text-slate-300
   ${iconClassName}
  `);

  return (
    <BaseView className={className}>
      {createElement(icon, {
        className: iconClasses,
        width: size || 24,
        height: size || 24,
      })}
    </BaseView>
  );
};
