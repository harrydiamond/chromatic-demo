import { Link, LinkProps } from '@acme/ui/src/Link';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Link> = {
  tags: ['autodocs'],
  title: 'Components/Link',
  component: Link,
  args: {
    children: 'I am a link',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllSizes: Story = {
  render: (args) => {
    const sizes = [undefined, null, 'sm', 'md', 'lg', 'xl'] as const;
    return (
      <>
        {sizes.map((size) => (
          <Link {...args} size={size}>
            Link Size: {String(size)}
          </Link>
        ))}
      </>
    );
  },
};

export const SizeSm: Story = {
  args: {
    size: 'sm',
  },
};

export const SizeMd: Story = {
  args: {
    size: 'md',
  },
};

export const SizeLg: Story = {
  args: {
    size: 'lg',
  },
};

export const SizeXl: Story = {
  args: {
    size: 'xl',
  },
};

export const ColorBlack: Story = {
  args: {
    color: 'black',
  },
};

/** Useful for destructive actions */
export const ColorRed: Story = {
  args: {
    color: 'red',
  },
};

/** Useful for positive actions such as saving */
export const ColorGreen: Story = {
  args: {
    color: 'green',
  },
};
