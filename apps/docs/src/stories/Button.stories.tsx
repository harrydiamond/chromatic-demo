import { Button } from '@acme/ui/src/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: 'Default',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    intent: 'commit',
    children: 'Base',
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    intent: 'commit',
    children: 'Base',
    disabled: true,
  },
};

export const CommitPrimary: Story = {
  args: {
    variant: 'primary',
    intent: 'commit',
    children: 'Add to cart',
  },
};

export const CommitSecondary: Story = {
  args: {
    variant: 'secondary',
    intent: 'commit',
    children: 'Add to cart',
  },
};

export const CommitSecondaryGhost: Story = {
  args: {
    variant: 'secondary-ghost',
    intent: 'commit',
    children: 'Add to cart',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const ProductPrimary: Story = {
  args: {
    variant: 'primary',
    intent: 'product',
    children: 'Add to cart',
  },
};

export const ProductSecondary: Story = {
  args: {
    variant: 'secondary',
    intent: 'product',
    children: 'Add to cart',
  },
};
export const ProductSecondaryGhost: Story = {
  args: {
    variant: 'secondary-ghost',
    intent: 'product',
    children: 'Add to cart',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
