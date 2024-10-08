import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Icons } from "./icons";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    disabled: false,
  },
  argTypes: {
    asChild: { control: false },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
    style: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: "var(--font-sans)" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Icon: Story = {
  args: {
    children: <Icons.Settings size={22} />,
    size: "icon",
    variant: "ghost",
  },
};
