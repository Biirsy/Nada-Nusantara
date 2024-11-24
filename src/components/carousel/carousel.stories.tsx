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

const sampleImages = [
  {
    id: 1,
    src: "https://picsum.photos/1600/900?random=1",
    alt: "Sample Image 1",
  },
  {
    id: 2,
    src: "https://picsum.photos/1600/900?random=2",
    alt: "Sample Image 2",
  },
  {
    id: 3,
    src: "https://picsum.photos/1600/900?random=3",
    alt: "Sample Image 3",
  },
];

export const Default: Story = {
  args: {
    images: sampleImages,
    autoPlay: true,
    interval: 4000,
    showArrows: true,
    height: "h-[500px]",
  },
};

export const WithoutControls: Story = {
  args: {
    images: sampleImages,
    autoPlay: true,
    interval: 4000,
    showArrows: false,
    height: "h-[500px]",
  },
};

export const ManualNavigation: Story = {
  args: {
    images: sampleImages,
    autoPlay: false,
    showArrows: true,
    height: "h-[500px]",
  },
};

export const CustomHeight: Story = {
  args: {
    images: sampleImages,
    autoPlay: true,
    interval: 4000,
    height: "h-[300px]",
  },
};
