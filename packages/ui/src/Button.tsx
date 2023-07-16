import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  [
    'bui',
    'font-body relative h-12 w-full border-2 px-4 text-sm font-bold leading-4 transition-colors duration-100 ease-in-out md:w-auto',
  ],
  {
    variants: {
      variant: {
        primary: '',
        secondary: 'bg-transparent',
        'secondary-ghost': 'bg-transparent',
      },
      intent: {
        commit: '',
        product: [
          'border-yellow-400',
          'hover:bg-yellow-500',
          'hover:border-yellow-500',
        ],
      },
      fullWidth: {
        true: ['w-full', 'md:w-full'],
      },
      disabled: {
        true: 'opacity-40',
      },
    },
    compoundVariants: [
      // Commital
      {
        intent: 'commit',
        variant: 'primary',
        className: [
          'bg-red-500',
          'border-red-500',
          'hover:bg-red-600',
          'hover:border-red-600',
          'fill-white',
          'text-white',
        ],
      },
      {
        intent: 'commit',
        variant: 'secondary',
        className: [
          'border-grey-500',
          'fill-grey-500',
          'hover:bg-grey-500',
          'hover:fill-grey-100',
          'hover:text-grey-100',
          'text-text',
        ],
      },
      {
        intent: 'commit',
        variant: 'secondary-ghost',
        className: [
          'border-grey-100',
          'fill-grey-100',
          'hover:bg-grey-100',
          'hover:fill-text',
          'hover:text-text',
          'text-white',
        ],
      },
      // Product
      {
        intent: 'product',
        variant: ['primary', 'secondary', 'secondary-ghost'],
        className: ['hover:fill-text', 'hover:text-text'],
      },
      {
        intent: 'product',
        variant: 'primary',
        className: ['bg-yellow-400', 'fill-text', 'text-text'],
      },
      {
        intent: 'product',
        variant: 'secondary-ghost',
        className: ['fill-grey-100', 'text-grey-100'],
      },
    ],
  }
);

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

export const Button = ({
  children,
  disabled,
  fullWidth = false,
  variant,
  intent,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={buttonVariants({ variant, intent, fullWidth, disabled })}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
