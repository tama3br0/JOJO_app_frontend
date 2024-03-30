import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: '#4CAF50',
        secondary: '#2196F3',
        // 他の色も定義可能
    },
    fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Montserrat, sans-serif',
    },
    space: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
  // 他のプロパティも定義可能
});

export default theme;