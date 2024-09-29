import type { Meta, StoryObj } from '@storybook/react';
import Bonuses from '../components/BetCard/Bonuses';

const meta: Meta<typeof Bonuses> = {
  title: 'Components/Bonuses',
  component: Bonuses,
  argTypes: {
    bet: { control: 'number', description: 'Bet amount' },
    get: { control: 'number', description: 'Get amount' },
  },
};

export default meta;

type Story = StoryObj<typeof Bonuses>;

export const Default: Story = {
  args: {
    bet: 10,
    get: 400,
  },
};
