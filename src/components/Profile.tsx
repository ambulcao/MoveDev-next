import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://craftpng.com/images/bt/web-development-software-developer-table.png" alt="Developer" />
            <div>
                <strong>Exercite-se</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    
                    Level 1
                </p>
            </div>
        </div>
    )
}