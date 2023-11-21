export interface CheckBoxProps {
  name: string;
  label: string;
  onChange?: (value: boolean) => void;
  value?: boolean;
}
