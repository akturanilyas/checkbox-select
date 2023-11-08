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
    title: 'Kategoriler',
    items: [
      { id: '2', label: 'Label 1' },
      { id: '3', label: 'Label 2' },
      { id: '4', label: 'Label 3' },
      { id: '5', label: 'Label 4' },
      {
        id: '6',
        label: 'Label 5',
      },
    ],
  },
};
