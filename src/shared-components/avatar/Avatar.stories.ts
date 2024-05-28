import type {Meta, StoryObj} from '@storybook/react';
import {Avatar} from './Avatar';

const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: 'onChange',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
  },
  args: {},
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;

const Small: Story = {
  args: {
    size: 'sm',
    src: 'https://people.com/thmb/fsQ9KNbIzkdEwVxiuJcV_jEED-U=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(299x0:301x2):format(webp)/rick-astley-600-d31de1cb3fb248e6b714e5fa789b104d.jpg',
    title: 'John Doe',
  },
};

const Large: Story = {
  args: {
    size: 'lg',
    src: 'https://people.com/thmb/fsQ9KNbIzkdEwVxiuJcV_jEED-U=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(299x0:301x2):format(webp)/rick-astley-600-d31de1cb3fb248e6b714e5fa789b104d.jpg',
    title: 'John Doe',
  },
};

const Alt: Story = {
  args: {
    size: 'lg',
    alt: 'JD',
    title: 'John Doe',
  },
};

export default meta;
export {Alt, Large, Small};
