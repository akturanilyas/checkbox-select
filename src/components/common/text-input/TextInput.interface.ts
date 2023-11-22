import { ReactNode } from 'react';

export interface TextInputProps {
  placeholder?: string;
  name?: string;
  label?: string;
  suffix?: ReactNode;
  suffixContainerClasses?: string;
  defaultValue?: string;
  onChangeCallback?: (value: string) => void;
}
