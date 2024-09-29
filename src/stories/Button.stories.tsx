import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/shared/Button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    title: { control: 'text', description: 'Button label' },
    onClick: { action: 'clicked', description: 'Click event handler' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    title: 'Click Me',
    onClick: () => console.log('Clicked'),
  },
  render: (args) => <Button {...args} />,
};
