import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#333333', // Background color for AppBar
        },
        text: {
            primary: '#000000', // Default text color
            secondary: '#FFFFFF', // Text color for the scrolled state
        },
    },
    typography: {
        fontFamily: 'Libre Franklin, Arial, sans-serif',
        fontWeightMedium: 550,
        fontSize: 30,
        button: {
            textTransform: 'none', // Ensure buttons do not uppercase text
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#33333300', // Transparent background for the default state
                    color: '#000000', // Default text color
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    justifyContent: 'space-between',
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#333333', // Background color for mobile menu
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF', // Text color for menu items
                },
            },
        },
    },
});

export default theme;
