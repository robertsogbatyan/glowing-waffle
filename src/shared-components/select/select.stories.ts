import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Select} from './Select';

const meta = {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['options', 'onChange'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    options: [
      {
        value: 'opt1',
        label: 'Option 1',
      },
      {
        value: 'opt2',
        label: 'Option 2',
      },
      {
        value: 'option-with-no-label',
      },
    ],
    value: 'opt2',
  },
};

export default meta;
export {Default};
