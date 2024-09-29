// CardImage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CardImage from '../components/BetCard/CardImage';

import casinoLogo from '../assets/casino_logo.svg';

const meta: Meta<typeof CardImage> = {
  title: 'Components/CardImage',
  component: CardImage,
};

export default meta;

type Story = StoryObj<typeof CardImage>;

export const Default: Story = {
  args: {
    src: casinoLogo,
  },
};
