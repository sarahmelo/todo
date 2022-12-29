import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.headerPage}>
            <img src="src/assets/rocket.svg" alt="logo rocket" />
            <h1 className={styles.h1}>
                <div className={styles.firstWord}>to</div>
                <div className={styles.twoWord}>do</div>
            </h1>
        </div>
    )
}