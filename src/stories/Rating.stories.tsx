import type { Meta, StoryObj } from '@storybook/react';
import Rating from '../components/BetCard/Rating';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    name: { control: 'text', description: 'Casino name' },
    count: { control: 'number', description: 'Number of stars', defaultValue: 5 },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    name: 'Grosvenor Casinos',
    count: 5,
  },
};
