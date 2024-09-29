import type { Meta, StoryObj } from '@storybook/react';
import BetCard from '../components/BetCard';

const meta: Meta<typeof BetCard> = {
  title: 'Components/BetCard',
  component: BetCard,
  argTypes: {
    casinoName: { control: 'text', description: 'Casino name' },
    betAmount: { control: 'number', description: 'Bet amount' },
    getAmount: { control: 'number', description: 'Get amount' },
    ratingCount: { control: 'number', description: 'Rating stars' },
    onClickBet: { action: 'Bet Now clicked', description: 'Bet button click handler' },
  },
};

export default meta;

type Story = StoryObj<typeof BetCard>;

export const Default: Story = {
  args: {
    casinoName: 'Grosvenor Casinos',
    betAmount: 10,
    getAmount: 400,
    ratingCount: 5,
  },
};
