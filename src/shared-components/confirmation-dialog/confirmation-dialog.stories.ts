import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ConfirmationDialog} from './ConfirmationDialog';

const meta = {
  title: 'Confirmation dialog',
  component: ConfirmationDialog,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['options', 'onChange'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isVisible: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    confirmButtonText: {
      control: 'text',
    },
    cancelButtonText: {
      control: 'text',
    },
  },
  args: {
    onCancel: fn(),
    onConfirm: fn(),
  },
} satisfies Meta<typeof ConfirmationDialog>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    isVisible: true,
    title: 'Delete item',
    message: 'Are you sure you want to delete this item',
    confirmButtonText: 'Delete',
  },
};

export default meta;
export {Default};
