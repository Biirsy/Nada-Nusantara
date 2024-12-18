import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "success", "warning"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    size: "md",
    radius: "md",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    size: "md",
    radius: "md",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    children: "Small Button",
    size: "sm",
    radius: "md",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    children: "Large Button",
    size: "lg",
    radius: "md",
  },
};

export const Rounded: Story = {
  args: {
    variant: "primary",
    children: "Rounded Button",
    size: "md",
    radius: "full",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    size: "md",
    radius: "md",
    disabled: true,
  },
};
