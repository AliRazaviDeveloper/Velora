import type { Meta, StoryObj } from "@storybook/react";
import Color from "@repo/ui/color";

const meta = {
  title: "Example/Color",
  component: Color,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
