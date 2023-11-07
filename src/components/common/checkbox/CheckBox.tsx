import BaseView from '../base-view/BaseView.tsx';
import { twMerge } from 'tailwind-merge';
import { FC, useRef, useState } from 'react';
import { CheckBoxProps } from './CheckBox.interface.ts';
import { InputType } from '../../../enums/common.enum.ts';
import { BaseText } from '../base-text/BaseText.tsx';

export const CheckBox: FC<CheckBoxProps> = (props) => {
  const { label, onChange, value } = props;
  const [_value, setValue] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const className = twMerge(`
   flex-row gap-4 bg-slate-100 items-center
   px-2
  `);

  const inputClasses = twMerge(`
    checked:border-slate-400 z-50
    checked:bg-blue-700
    appearance-none w-4 h-4 rounded-sm bg-white 
  `);

  const _onChange = (value: boolean) => {
    onChange && onChange(value);
    setValue(value);
  };

  return (
    <BaseView className={className} onClick={() => _onChange(!(value || _value))}>
      <BaseView className={'p-1 border border-slate-400 bg-slate-200'}>
        <input
          ref={ref}
          type={InputType.CHECKBOX}
          className={inputClasses}
          checked={value || _value}
          onChange={() => _onChange(!(value || _value))}
        />
      </BaseView>

      <BaseText label={label} />
    </BaseView>
  );
};
