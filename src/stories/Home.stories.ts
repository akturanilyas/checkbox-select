import type { Meta, StoryObj } from '@storybook/react';
import { Home } from '../pages/Home.tsx';

const meta = {
  title: 'Home',
  component: Home,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
