export interface SelectProps {
  title?: string;
  className?: string;
  items: Array<SelectItem>;
  placeholder?: string;
  defaultValues?: Array<string>;
  onSubmit?: (items: Array<string>) => void;
}

export interface SelectItem {
  id: string;
  label: string;
}

export type SelectState = {
  items: Array<SelectItem>;
  search: string;
};
