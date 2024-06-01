import type {Meta, StoryObj} from '@storybook/react';
import {ErrorScreen} from './ErrorScreen';

const meta = {
  title: 'Error Screen',
  component: ErrorScreen,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['options', 'onChange'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    action: {
      control: 'text',
    },
  },
  args: {},
} satisfies Meta<typeof ErrorScreen>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    title: '404',
    message: 'Page Not Found',
  },
};

export default meta;
export {Default};
