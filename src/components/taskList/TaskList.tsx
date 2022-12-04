import styles from './TaskList.module.css'

export function TaskList() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.tasksCreated}>
                    <p className={styles.text}>Tarefas criadas</p>
                    <span className={styles.counter}>0</span>
                </div>
                <div className={styles.completedTasks}>
                    <p className={styles.text}>Concluídas</p>
                    <span className={styles.counter}>0</span>
                </div>
            </header>
            <div className="task-list-container"></div>
        </div>
    )
}