import type { Meta, StoryObj } from "@storybook/react";
import Typography from "@repo/ui/typography";

const meta = {
  title: "Example/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Typography` component is used to render text with customizable size, weight, alignment, and other styles.",
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    as: "div",
    children: "Hello world",
    size: "base",
    weight: "bold",
    align: "left",
    className: "text-red-500",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the primary story of the `Typography` component, demonstrating a bold, left-aligned text with red color.",
      },
    },
  },
};
