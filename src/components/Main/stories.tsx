import { Meta, StoryObj } from '@storybook/react';

import Main from '.';

const meta: Meta<typeof Main> = {
  title: 'Main',
  tags: ['autodocs'],
  component: Main
};

export default meta;

type Story = StoryObj<typeof Main>;

export const Basic: Story = {
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
};
