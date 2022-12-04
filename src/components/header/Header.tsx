import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.headerPage}>
            <img src="src/assets/rocket.svg" alt="logo rocket" />
            <h1>
                <span className={styles.firstWord}>To</span>
                <span className={styles.twoWord}>do</span>
            </h1>
        </div>
    )
}