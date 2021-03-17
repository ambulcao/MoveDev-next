import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://craftpng.com/images/bt/web-development-software-developer-table.png" alt="Developer" />
            <div>
                <span>Developer</span>
                <div>
                    <p><img src="icons/level.svg" alt="level" /></p>
                <span>   
                    Level { level }
                </span>
                </div>
            </div>
        </div>
    )
}