import type {Meta, StoryObj} from '@storybook/react';
import {DataList} from './DataList';

const meta = {
  title: 'Data List',
  component: DataList,
  parameters: {
    layout: 'centered',
    controls: {},
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DataList>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    entries: [
      {
        term: 'Chord',
        description:
          'A group of notes played together, typically consisting of a root note, a third, and a fifth.',
      },
      {
        term: 'Scale',
        description:
          'A series of notes ordered by pitch, typically consisting of seven notes in a specific pattern of whole and half steps.',
      },
      {
        term: 'Harmony',
        description:
          'The combination of different musical notes played or sung simultaneously to produce a pleasing sound.',
      },
      {
        term: 'Melody',
        description:
          'A sequence of musical notes arranged in a particular rhythmic pattern, forming the main part of a song or piece of music.',
      },
      {
        term: 'Rhythm',
        description:
          'The pattern of sounds and silences in music, marked by the timing of notes and beats.',
      },
    ],
  },
};

export default meta;
export {Default};
