import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Input} from './Input';

const meta = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: 'onChange',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    value: 'Input',
  },
};

export default meta;
export {Default};
