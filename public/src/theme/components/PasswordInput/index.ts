import {MantineTheme, PasswordInput} from "@mantine/core";

export default PasswordInput.extend({
    styles: (theme : MantineTheme) => ({
        innerInput: {
            paddingLeft: '30px',
            color: theme.colors.blue[0],
            fontSize: '16px',
            fontWeight: 500,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            height: 40,
            borderRadius: '12px',
            border: '0.5px solid    #223F6A',
        }
    }),
});
