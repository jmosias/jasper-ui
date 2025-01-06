import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@/app/components/jasper/Button";
import { CardDisplay } from "@/app/components/storybook/CardDisplay";

const meta = {
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    label: "Button",
  },
};

export const Glass: Story = {
  args: {
    type: "glass",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};
