import {createTheme, DEFAULT_THEME} from '@mantine/core';

import * as components from './components';


const mainTheme = createTheme({
    fontFamily: 'Montserrat',
    headings: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    lineHeights: {
        base: '1.5',
    },
    colors: {
        blue: ['#223F6A', '#3A5E8C', '#4D6F9E', '#5F80B0', '#7181C2', '#8392D4', '#95A3E6', '#A7B4F8', '#B9C5FA', '#CBD6FC'],
    },
    primaryColor: 'blue',
    primaryShade: 0,
    components
});

export default mainTheme;