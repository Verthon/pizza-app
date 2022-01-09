import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Page } from "./Page"
import * as Button from "./atoms/Button/Button.stories"

export default {
  title: "Example/Page",
  component: Page,
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = () => <Page />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...Button.Large.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...Button.Small.args,
}
