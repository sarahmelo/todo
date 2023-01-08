import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.headerPage}>
            <img src="src/assets/rocket.svg" alt="logo rocket" />
            <div className={styles.title}>
                <h1 className={styles.to}>to</h1>
                <h1 className={styles.do}>do</h1>
            </div>
        </div>
    )
}