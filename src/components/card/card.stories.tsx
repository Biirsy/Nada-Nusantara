import type { Meta, StoryObj } from "@storybook/react";
import Card from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    buttonVariant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "success", "warning"],
    },
    buttonSize: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    buttonRadius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "full"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    imageSrc: "/images/default.jpg",
    imageAlt: "Default Event",
    title: "Default Event",
    description: "A default card example",
    buttonText: "Learn More",
    buttonVariant: "primary",
    buttonSize: "sm",
    buttonRadius: "md",
  },
};
