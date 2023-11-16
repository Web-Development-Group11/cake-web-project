import { Card } from ".";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    status: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "hover",
    className: {},
  },
};
