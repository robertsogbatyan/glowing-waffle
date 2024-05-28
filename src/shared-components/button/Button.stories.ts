import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button} from './Button';

const meta = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: 'onClick',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
    },
    size: {
      control: 'inline-radio',
    },
    href: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Button',
  },
};

const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Button',
  },
};

const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export default meta;
export {Medium, Primary, Secondary, Small};
