import React, { useState }from 'react';
import Head from 'next/head';
import { ExperienceBar } from "../components/ExperienceBar";
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import GlobalStyle from '../styles/global';
import Header from '../components/Header';

const Home = () => {
    //const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
    const [theme, setTheme] = useState(dark);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <GlobalStyle />
                <Header toggleTheme={toggleTheme}/><br /><br />

                <ExperienceBar />
            </div>
        </ThemeProvider>
    )
}

export default Home;

