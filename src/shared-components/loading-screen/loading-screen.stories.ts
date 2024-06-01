import type {Meta, StoryObj} from '@storybook/react';
import {LoadingScreen} from './LoadingScreen';

const meta = {
  title: 'Loading / Screen',
  component: LoadingScreen,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['options', 'onChange'],
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoadingScreen>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {},
};

export default meta;
export {Default};
