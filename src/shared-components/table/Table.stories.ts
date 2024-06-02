import type {Meta, StoryObj} from '@storybook/react';
import {Table} from './Table';

const meta = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['columns', 'data'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
  },
  args: {},
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    columns: [
      {
        name: 'name',
        label: 'Name',
        width: '80%',
      },
      {
        name: 'email',
        label: 'Email',
        width: '80%',
      },
      {
        name: 'age',
        label: 'Age',
        width: '10%',
      },
      {
        name: 'actions',
        width: '10%',
      },
    ],
    data: [
      {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        age: 30,
      },
      {
        id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        age: 25,
      },
      {
        id: 3,
        name: 'Charlie',
        email: 'charlie@example.com',
        age: 35,
      },
      {
        id: 4,
        name: 'Diana',
        email: 'diana@example.com',
        age: 28,
      },
    ],
    isLoading: false,
  },
};

export default meta;
export {Default};
