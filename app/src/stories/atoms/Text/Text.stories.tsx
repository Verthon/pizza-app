import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components';

import { Text } from "../../../components/atoms/Text/Text"
import { GlobalStyle } from '../../../theme/GlobalStyles';
import { theme } from '../../../theme/theme';

export default {
    title: 'Example/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) =>
    <ThemeProvider theme={theme}>
        <GlobalStyle /><Text {...args} /></ThemeProvider>

export const DefaultParagraph = Template.bind({});
DefaultParagraph.args = {
    children: "Text Primary",
};

export const CenteredParagraph = Template.bind({});
DefaultParagraph.args = {
    children: "Text Primary",
    align: "center"
};

export const Span = Template.bind({});
Span.args = {
    variant: "span",
    children: "Span variant",
};
