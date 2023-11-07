import BaseView from '../base-view/BaseView.tsx';
import { TextInput } from '../text-input/TextInput.tsx';
import { CUSTOM_ICON } from '../../../constants/customIcon.constant.ts';
import { CustomIconProvider } from '../../../providers/CustomIconProvider.tsx';
import { twMerge } from 'tailwind-merge';
import { FC, useReducer } from 'react';
import { SelectItem, SelectProps, SelectState } from './Select.interface.ts';
import { CheckBox } from '../checkbox/CheckBox.tsx';

enum ActionType {
  SELECT = 'select',
  UNSELECT = 'unselect',
  SEARCH = 'search',
}

export const Select: FC<SelectProps> = (props) => {
  const { items, placeholder, onChange } = props;

  const [state, dispatch] = useReducer(
    (
      prevState: SelectState,
      action: {
        item?: SelectItem;
        type: ActionType;
        search?: string;
      },
    ) => {
      const actions: {
        [key: string]: () => SelectState;
      } = {
        [ActionType.SELECT]() {
          const newState = prevState.items.map((prevItem) => {
            if (prevItem.id === action.item!.id) {
              return { ...action.item!, value: true };
            }

            return prevItem;
          });

          onChange && onChange({ items: newState, selectItem: { ...action.item!, value: true } });

          return {
            ...prevState,
            items: newState,
          };
        },
        [ActionType.UNSELECT]() {
          const newState = prevState.items.map((prevItem) => {
            if (prevItem.id === action.item!.id) {
              return { ...action.item!, value: false };
            }

            return prevItem;
          });

          onChange && onChange({ items: newState, selectItem: { ...action.item!, value: false } });

          return {
            ...prevState,
            items: newState,
          };
        },
        [ActionType.SEARCH]() {
          return {
            ...prevState,
            search: action.search || '',
          };
        },
      };

      return actions[action.type]();
    },
    { items, search: '' },
  );

  const className = twMerge(`
   p-4 border rounded-md bg-slate-300 gap-4 h-full
  `);

  const _onChange = (item: SelectItem, value: boolean) => {
    dispatch({ type: value ? ActionType.SELECT : ActionType.UNSELECT, item });
  };

  return (
    <BaseView className={className}>
      <TextInput
        onChangeCallback={(value) => dispatch({ type: ActionType.SEARCH, search: value })}
        placeholder={placeholder}
        suffix={<CustomIconProvider icon={CUSTOM_ICON.SEARCH} size={14} iconClassName={'text-slate-500'} />}
      />

      <BaseView className={'overflow-y-auto'}>
        {state.items
          .sort((prev, current) => Number(current.value) - Number(prev.value))
          .map((item) => {
            if (!(item.label.toLowerCase().includes(state.search.toLowerCase()) || item.value)) {
              return;
            }

            return (
              <CheckBox
                key={item.id}
                label={item.label}
                value={item.value}
                onChange={(value) => _onChange(item, value)}
              />
            );
          })}
      </BaseView>
    </BaseView>
  );
};
