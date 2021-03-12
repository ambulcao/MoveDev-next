import Head from 'next/head';
import { ExperienceBar } from "../components/ExperienceBar";
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';

import GlobalStyle from '../styles/global';
import Header from '../components/Header';

export default function Home() {
    return (
        <ThemeProvider theme={light}>
            <div className="container">
                <GlobalStyle />
                <Header /><br /><br />

                <ExperienceBar />
            </div>
        </ThemeProvider>
    )
}

