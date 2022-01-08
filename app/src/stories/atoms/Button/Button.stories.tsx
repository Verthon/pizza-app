import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ThemeProvider } from "styled-components"

import { Button } from "../../../components/atoms/Button/Button"
import { GlobalStyle } from "../../../theme/GlobalStyles"
import { theme } from "../../../theme/theme"

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Button {...args} />
  </ThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  label: "Button Primary",
  children: "Button Primary",
  variant: "primary",
}

export const Large = Template.bind({})
Large.args = {
  $size: "large",
  children: "Button Primary Large",
  label: "Button",
}

export const Small = Template.bind({})
Small.args = {
  $size: "small",
  children: "Button Primary Small",
  label: "Button",
}
