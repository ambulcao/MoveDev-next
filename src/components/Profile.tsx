import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://craftpng.com/images/bt/web-development-software-developer-table.png" alt="Developer" />
            <div>
                <span>Exercite-se</span>
                <div>
                    <p><img src="icons/level.svg" alt="level" /></p>
                <span>
                    
                    Level 1
                </span>
                </div>
            </div>
        </div>
    )
}