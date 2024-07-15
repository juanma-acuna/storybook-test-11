import './Title.css';

import { StoryFn, Meta } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
  title: 'Title',
  component: Title,
} as Meta;

const Template: StoryFn<TitleProps> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  className: 'extra',
};
