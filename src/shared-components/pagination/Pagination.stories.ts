import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Pagination} from './Pagination';

const meta = {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: 'onClick',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
    },
    totalPages: {
      control: 'number',
    },
  },
  args: {
    onPageChange: fn(),
  },
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 20,
  },
};

export default meta;
export {Default};
