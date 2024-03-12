import { StoryObj, Meta } from "@storybook/react";
import { Button } from "../components";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    text: "default",
  },
};
