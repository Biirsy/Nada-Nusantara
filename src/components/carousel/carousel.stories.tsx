import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./carousel";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    autoPlay: {
      control: "boolean",
      description: "Whether the carousel should auto-play",
    },
    interval: {
      control: "number",
      description: "Auto-play interval in milliseconds",
    },
    showArrows: {
      control: "boolean",
      description: "Show navigation arrows",
    },
    height: {
      control: "text",
      description: "Height of the carousel",
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

const heroImages = [
  {
    id: 1,
    src: "/images/bg1.jpg",
    alt: "Hero Image 1",
  },
  {
    id: 2,
    src: "/images/bg2.jpg",
    alt: "Hero Image 2",
  },
];

export const Default: Story = {
  args: {
    images: heroImages,
    autoPlay: true,
    interval: 4000,
    showArrows: true,
    height: "h-[500px]",
  },
};

export const WithoutControls: Story = {
  args: {
    images: heroImages,
    autoPlay: true,
    interval: 4000,
    showArrows: false,
    height: "h-[500px]",
  },
};

export const ManualNavigation: Story = {
  args: {
    images: heroImages,
    autoPlay: false,
    showArrows: true,
    height: "h-[500px]",
  },
};

export const CustomHeight: Story = {
  args: {
    images: heroImages,
    autoPlay: true,
    interval: 4000,
    height: "h-[300px]",
  },
};
