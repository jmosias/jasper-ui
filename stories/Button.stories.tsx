import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonProps } from "@/app/components/jasper/Button";
import { CardDisplay } from "@/app/components/storybook/CardDisplay";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <CardDisplay>
        <Story />
      </CardDisplay>
    ),
  ],
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;
const defaultLabel = "Button";

export const Primary = Template.bind({});
Primary.args = { type: "primary", label: defaultLabel };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary", label: defaultLabel };

export const Glass = Template.bind({});
Glass.args = { type: "glass", label: defaultLabel };

export const Medium = Template.bind({});
Medium.args = { size: "medium", label: defaultLabel };

export const Large = Template.bind({});
Large.args = { size: "large", label: defaultLabel };
