import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components';

import { ErrorMessage } from "../../../components/atoms/ErrorMessage/ErrorMessage"
import { GlobalStyle } from '../../../theme/GlobalStyles';
import { theme } from '../../../theme/theme';

export default {
    title: 'Example/ErrorMessage',
    component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>

const Template: ComponentStory<typeof ErrorMessage> = (args) =>
    <ThemeProvider theme={theme}>
        <GlobalStyle /><ErrorMessage {...args} /></ThemeProvider>

export const EmailErrorMessage = Template.bind({});
EmailErrorMessage.args = {
    error: {type: "validate", message: "Invalid email"}
};
