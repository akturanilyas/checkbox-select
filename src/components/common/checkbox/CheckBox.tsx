import BaseView from '../base-view/BaseView.tsx';
import { twMerge } from 'tailwind-merge';
import { FC, useRef, useState } from 'react';
import { CheckBoxProps } from './CheckBox.interface.ts';
import { InputType } from '../../../enums/common.enum.ts';
import { BaseText } from '../base-text/BaseText.tsx';

export const CheckBox: FC<CheckBoxProps> = (props) => {
  const { label, onChange, value, name } = props;
  const [_value, setValue] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const isChecked = value || _value;

  const className = twMerge(`
   flex-row gap-4 bg-slate-70
   items-center
  `);

  const inputClasses = twMerge(`
    checked:border-slate-400 z-50
    checked:bg-blue-700
    appearance-none w-3 h-3 bg-white
  `);

  const _onChange = (value: boolean) => {
    onChange && onChange(value);
    setValue(value);
  };

  return (
    <BaseView className={className} onClick={() => _onChange(!isChecked)}>
      <label htmlFor={name}>
        <BaseView className={'p-1 border border-slate-400 bg-white'}>
          <input
            id={name}
            ref={ref}
            name={name}
            type={InputType.CHECKBOX}
            className={inputClasses}
            data-testid={`input.${name || 'checkbox'}`}
            checked={isChecked}
            onChange={() => _onChange(!isChecked)}
          />

          <span id={name} />
        </BaseView>
      </label>

      <label htmlFor={name}>
        <BaseText label={label} textClassName={isChecked ? 'text-blue-800' : 'text-black'} />
      </label>
    </BaseView>
  );
};
