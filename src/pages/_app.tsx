import {ThemeProvider} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css'
import "../css/mycss.css"
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../themes/default';

export default function MyApp({ Component, pageProps }) {
    const { darkModeActive } = useDarkMode();
    // const theme = darkModeActive ? darkTheme : lightTheme;
    const theme = lightTheme;
    return (
        <ThemeProvider theme={{darkMode: darkModeActive, ...theme}}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}