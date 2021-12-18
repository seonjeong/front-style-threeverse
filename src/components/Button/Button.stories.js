import { useArgs } from '@storybook/client-api';
import { Button } from './';

export default {
  title: 'Button/Button',
  component: Button,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  return <Button {...args} />;
};

export const Priamry = Template.bind({});
Priamry.args = {
  title: 'Button',
  type: 'default',
  variant: 'primary',
};

export const Seconcary = Template.bind({});
Seconcary.args = {
  title: 'Button',
  type: 'default',
  variant: 'secondary',
};
