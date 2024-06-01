import type {Meta, StoryObj} from '@storybook/react';
import {LoadingSpinner} from './LoadingSpinner';

const meta = {
  title: 'Loading / Spinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['options', 'onChange'],
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoadingSpinner>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {},
};

export default meta;
export {Default};
