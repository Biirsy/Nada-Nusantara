import type { Meta, StoryObj } from "@storybook/react";
import ArticleCard from "./articleCard";

const meta: Meta<typeof ArticleCard> = {
  title: "Components/ArticleCard",
  component: ArticleCard,
  argTypes: {
    buttonVariant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
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

type Story = StoryObj<typeof ArticleCard>;

export const DefaultArticleCard: Story = {
  args: {
    id: "1",
    title: "Default Article Title",
    writer: "Jane Doe",
    readTime: 10,
    imageUrl: "/images/bg2.jpg",
    imageAlt: "Sample Article Image",
    buttonText: "Baca Artikel",
    buttonVariant: "primary",
    buttonSize: "sm",
    buttonRadius: "md",
    onButtonClick: () => {},
  },
};
