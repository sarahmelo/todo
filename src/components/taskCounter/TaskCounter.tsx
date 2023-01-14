import { useState } from 'react';
import { ITask } from '../../interface/task.interface'
import styles from './TaskCounter.module.css'

export interface TaskCounterComponent {
    taskList: ITask[]
}

export function TaskCounter({ taskList }: TaskCounterComponent) {
    const hasTasks: boolean = taskList.length !== 0;
    const tasksDoneCount = taskList.filter((task) => task.complete).length

    return (
        <>
            <header className={styles.header}>
                <div className={styles.tasksCreated}>
                    <p 
                        id='tarefas-criadas'
                        className={styles.text}
                    >
                       Todas
                    </p>
                    <span
                        aria-labelledby='tarefas-criadas' 
                        className={hasTasks ? styles.counterDefault : styles.counter}
                    >
                        {taskList.length}
                    </span>
                </div>
                <div className={styles.completedTasks}>
                    <p 
                        id='tarefas-concluidas'
                        className={styles.text}
                    >
                        Concluídas
                    </p>
                    <span 
                        aria-labelledby='tarefas-concluidas'
                        className={hasTasks ? styles.counterDefault : styles.counter}
                    >
                        {
                            hasTasks
                            ? `${tasksDoneCount} de ${taskList.length}`
                            : 0
                        }
                    </span>
                </div>
            </header>
            <div className="task-list-container"></div>
        </>
    )
}