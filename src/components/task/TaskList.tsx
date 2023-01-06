import { Dispatch, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { ITask } from "../../interface/task.interface";
import styles from './TaskList.module.css'

export interface TaskComponent {
    tasks: ITask[];
    setTaskList: Dispatch<React.SetStateAction<ITask[]>>;
}

export function TaskList({ tasks, setTaskList }: TaskComponent) {
    function removeTask(id: number): void {
        const newStateTaskList = tasks.filter(t => t.id !== id)

        
        setTaskList(newStateTaskList)
    }

    return (
        <div className={styles.taskList}>
            {
                tasks.map((task) => {
                    return (
                        <>
                            <label 
                                htmlFor={task.name} 
                                key={task.name}
                                className={styles.box}
                            >
                                <div className={styles.leftContent}>
                                    <input 
                                        type="checkbox" 
                                        id={task.name} 
                                    />
                                    <p className={styles.taskName}>{task.name}</p>
                                </div>
                                <button 
                                    className={styles.trash}
                                    onClick={() => removeTask(task.id)}>
                                    <FiTrash2 display={'block'} />
                                </button>
                            </label>
                        </>
                    )
                })
            }
        </div>
    )
}