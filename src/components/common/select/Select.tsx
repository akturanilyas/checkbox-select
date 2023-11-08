import BaseView from '../base-view/BaseView.tsx';
import { TextInput } from '../text-input/TextInput.tsx';
import { CUSTOM_ICON } from '../../../constants/customIcon.constant.ts';
import { CustomIconProvider } from '../../../providers/CustomIconProvider.tsx';
import { twMerge } from 'tailwind-merge';
import { FC, useState } from 'react';
import { SelectItem, SelectProps } from './Select.interface.ts';
import { CheckBox } from '../checkbox/CheckBox.tsx';
import { BaseText } from '../base-text/BaseText.tsx';
import { Button } from '../button/Button.tsx';

export const Select: FC<SelectProps> = (props) => {
  const { title, className, items, placeholder, onSubmit, defaultValues = [] } = props;

  const [search, setSearch] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<Array<string>>(defaultValues);

  const classes = twMerge(`
   px-8 py-4 border rounded-md bg-slate-70 gap-4 h-full
   ${className}
  `);

  const _onChange = (item: SelectItem, value: boolean) => {
    if (value) {
      setSelectedItems((prevState) => [...prevState, item.id]);

      return;
    }

    setSelectedItems((prevState) => prevState.filter((prevItem) => prevItem !== item.id));
  };

  const renderCheckBox = (item: SelectItem, value: boolean) => (
    <CheckBox key={item.id} label={item.label} value={value} onChange={(value) => _onChange(item, value)} />
  );

  return (
    <BaseView className={classes}>
      <BaseView>
        {title && <BaseText label={title} className={'px-0'} textClassName={'font-medium text-lg text-black'} />}

        <TextInput
          onChangeCallback={(value) => setSearch(value)}
          placeholder={placeholder || 'Kategori Ara...'}
          suffix={<CustomIconProvider icon={CUSTOM_ICON.SEARCH} size={14} iconClassName={'text-slate-500'} />}
        />
      </BaseView>

      <BaseView className={'overflow-y-auto'}>
        {items.filter((item) => selectedItems.includes(item.id)).map((item) => renderCheckBox(item, true))}

        {items
          .filter((item) => !selectedItems.includes(item.id))
          .map((item) => {
            if (!item.label.toLowerCase().includes(search.toLowerCase())) {
              return;
            }

            return renderCheckBox(item, false);
          })}
      </BaseView>

      {onSubmit && <Button label={'Submit'} onClick={() => onSubmit(selectedItems)} />}
    </BaseView>
  );
};
