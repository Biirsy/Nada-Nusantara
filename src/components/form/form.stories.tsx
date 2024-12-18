import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./form";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Input component with customizable size, border radius, and border color. Border radius is selected from predefined options.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password"],
      description: "Defines the input type (text or password).",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text displayed in the input field.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Sets the size of the input field.",
    },
    borderRadius: {
      control: { type: "select" },
      options: ["none", "small", "medium", "large", "full"],
      description: "Sets the border radius using predefined options.",
    },
    borderColor: {
      control: "text",
      description: "TailwindCSS class for setting border color.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Enter your text",
    size: "medium",
    borderRadius: "medium",
    borderColor: "border-gray-300",
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    size: "medium",
    borderRadius: "medium",
    borderColor: "border-gray-300",
  },
};

export const SearchInput: Story = {
  args: {
    type: "text",
    placeholder: "Search...",
    size: "medium",
    borderRadius: "medium",
    borderColor: "border-gray-300",
    variant: "search", // Specify the variant
  },
};
