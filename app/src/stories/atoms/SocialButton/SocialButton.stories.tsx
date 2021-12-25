import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components';

import { SocialButton } from "../../../components/atoms/SocialButton/SocialButton"
import { GlobalStyle } from '../../../theme/GlobalStyles';
import { theme } from '../../../theme/theme';

export default {
    title: 'Example/SocialButton',
    component: SocialButton,
} as ComponentMeta<typeof SocialButton>

const Template: ComponentStory<typeof SocialButton> = (args) =>
    <ThemeProvider theme={theme}>
        <GlobalStyle /><SocialButton {...args} /></ThemeProvider>

export const GoogleSocialButton = Template.bind({});
GoogleSocialButton.args = {
    children: "Google login",
    provider: "google"
};

export const FacebookSocialButton = Template.bind({});
FacebookSocialButton.args = {
    children: "Facebook login",
    provider: "facebook"
};
