import BaseView from '../base-view/BaseView.tsx';
import { ChangeEvent, FC, useState } from 'react';
import { TextInputProps } from './TextInput.interface.ts';
import { twMerge } from 'tailwind-merge';
import { BaseText } from '../base-text/BaseText.tsx';

export const TextInput: FC<TextInputProps> = (props) => {
  const { placeholder, suffix, suffixContainerClasses, defaultValue = '', onChangeCallback, label, name } = props;

  const [value, setValue] = useState<string>(defaultValue);

  const classes = twMerge(`
    flex-row p-4
    border rounded border-slate-300 p-2
    bg-white justify-center
    items-center
  `);

  const inputClasses = twMerge(`
    text-sm bg-white placeholder:text-slate-350 font-medium
    text-slate-500 focus:outline-none w-full
  `);

  const suffixClasses = twMerge(`
  ${suffixContainerClasses || ''}
  `);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChangeCallback && onChangeCallback(event.target.value);
  };

  return (
    <BaseView className={classes}>
      <input
        id={name}
        name={name}
        className={inputClasses}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {label && (
        <label htmlFor={name}>
          <BaseText label={label} />
        </label>
      )}
      {suffix && <BaseView className={suffixClasses}>{suffix}</BaseView>}
    </BaseView>
  );
};
