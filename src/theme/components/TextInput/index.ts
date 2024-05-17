import {MantineTheme, TextInput} from '@mantine/core';

export default TextInput.extend({
    styles: (theme : MantineTheme) => ({
        input:{
            paddingLeft: '30px',
            height: 40,
            fontSize: '16px',
            fontWeight: 500,
            color: theme.colors.blue[0],
            borderRadius: '12px',
            border: '0.5px solid #223F6A',
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }
    }),
});