import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/common/select/Select.tsx';

const meta = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: '2', label: 'Label 1', value: true },
      { id: '3', label: 'Label 2', value: true },
      { id: '4', label: 'Label 3', value: true },
      { id: '5', label: 'Label 4', value: true },
      {
        id: '6',
        label: 'Label 5',
        value: true,
      },
    ],
  },
};
