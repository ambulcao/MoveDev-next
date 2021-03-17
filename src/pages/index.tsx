import React, { useState } from 'react';
import Head from 'next/head';
import { ExperienceBar } from "../components/ExperienceBar";
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

const Home = () => {
    //const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
    const [theme, setTheme] = useState(dark);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.container}>
                <GlobalStyle />
                <Header toggleTheme={toggleTheme} /><br /><br />


                <Head>
                    <title>Início | Pomo-Developer</title>
                </Head>
                <ExperienceBar />

                <CountdownProvider>
                    <section className="homeSection">
                        <div className="column">
                            <Profile />
                            <CompletedChallenges />
                            <Countdown />
                        </div>
                        <div className="column">
                            <ChallengeBox />
                        </div>
                    </section>
                </CountdownProvider>
            </div>
        </ThemeProvider>
    )
}

export default Home;

