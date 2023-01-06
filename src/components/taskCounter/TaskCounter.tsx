import { ITask } from '../../interface/task.interface'
import styles from './TaskCounter.module.css'

export interface TaskCounterComponent {
    taskCounter: ITask[]
}

export function TaskCounter({ taskCounter }: TaskCounterComponent) {
    const hasTasks: boolean = taskCounter.length !== 0

    return (
        <>
            <header className={styles.header}>
                <div className={styles.tasksCreated}>
                    <p className={styles.text}>Tarefas criadas</p>
                    <span 
                        className={hasTasks ? styles.counterDefault : styles.counter}
                    >{taskCounter.length}</span>
                </div>
                <div className={styles.completedTasks}>
                    <p className={styles.text}>Concluídas</p>
                    <span 
                        className={hasTasks ? styles.counterDefault : styles.counter}
                    >0</span>
                </div>
            </header>
            <div className="task-list-container"></div>
        </>
    )
}