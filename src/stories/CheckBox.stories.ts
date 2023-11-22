import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from '../components/common/checkbox/CheckBox.tsx';

const meta = {
  title: 'CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { name: 'name', label: 'Label' },
};
