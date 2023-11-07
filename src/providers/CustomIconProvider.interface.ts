import { FC } from 'react';

export interface CustomIconProviderProps {
  className?: string;
  icon: FC<IconProps>;
  size?: number;
  iconClassName?: string;
}

export interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}
