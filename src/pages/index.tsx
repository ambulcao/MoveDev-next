import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
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
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {    
        level: number;
        currentExperience: number;
        challengesCompleted: number;
    }

const Home = (props: HomeProps) => {
    //const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
    const [theme, setTheme] = useState(dark);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ChallengesProvider 
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
        <ThemeProvider theme={theme}>
            <div className={styles.container}>
                <GlobalStyle />
                <Header toggleTheme={toggleTheme} /><br /><br />


                <Head>
                    <title>Início | Pomo-Developer</title>
                </Head>
                <ExperienceBar />

                <CountdownProvider>
                    <section>
                        <div>
                            <Profile />
                            <CompletedChallenges />
                            <Countdown />
                        </div>
                        <div>
                            <ChallengeBox />
                        </div>
                    </section>
                </CountdownProvider>
            </div>
        </ThemeProvider>
        </ChallengesProvider>
    )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies; 

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}