// Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/shared/Card';

const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
  argTypes: {
    children: { control: 'text', description: 'Content inside the card' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a card content',
  },
};
