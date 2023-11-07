import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../components/common/text-input/TextInput.tsx';
import { CustomIconProvider } from '../providers/CustomIconProvider.tsx';
import { createElement } from 'react';
import { CUSTOM_ICON } from '../constants/customIcon.constant.ts';

const meta = {
  title: 'TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    suffix: createElement(CustomIconProvider, { icon: CUSTOM_ICON.SEARCH, size: 14, iconClassName: 'text-slate-500' }),
  },
};
