import { ReactNode } from 'react';

export interface TextInputProps {
  placeholder?: string;
  suffix?: ReactNode;
  suffixContainerClasses?: string;
  defaultValue?: string;
  onChangeCallback?: (value: string) => void;
}
