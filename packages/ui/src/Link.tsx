import * as React from 'react';
import { AnchorHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const linkVariants = cva('block', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    color: {
      black: 'text-black',
      red: 'text-red-500',
      green: 'text-green-500',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> & {
    children: React.ReactNode;
  };

export const Link = ({ size, color, ...rest }: LinkProps) => (
  <a className={linkVariants({ size, color })} {...rest} />
);
