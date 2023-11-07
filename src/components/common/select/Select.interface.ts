export interface SelectProps {
  items: Array<SelectItem>;
  placeholder?: string;
  onChange?: ({ items, selectItem }: { items: Array<SelectItem>; selectItem: SelectItem }) => void;
}

export interface SelectItem {
  id: string;
  label: string;
  value: boolean;
}

export type SelectState = {
  items: Array<SelectItem>;
  search: string;
};
