import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {SearchInput} from './SearchInput';

const meta = {
  title: 'Form/Search Input',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['onChange'],
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
} satisfies Meta<typeof SearchInput>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    value: 'Search',
  },
};

export default meta;
export {Default};
