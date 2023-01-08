import { Dispatch, ReactElement, ReactHTMLElement, useState } from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi";
import { ITask } from "../../interface/task.interface";
import styles from './TaskList.module.css'

export interface TaskComponent {
    tasks: ITask[];
    setTaskList: Dispatch<React.SetStateAction<ITask[]>>;
}

export function TaskList({ tasks, setTaskList }: TaskComponent) {
    function removeTask(id: number): void {
        const newStateTaskList = tasks.filter(task => task.id !== id)

        setTaskList(newStateTaskList)
    }

    function setInputCheckedState(event: any, task: ITask): void {
        const taskPosition = tasks.indexOf(task);
        const tasksCopy = [...tasks];

        tasksCopy[taskPosition].complete = !tasksCopy[taskPosition].complete;
        setTaskList([...tasksCopy]);
    }

    function setInputClassName(taskStatus: boolean): string {
        if (!taskStatus) {
            return styles.defaultInput
        }

        return styles.checkedInput
    }

    let taskIsComplete = (taskStatus: boolean): boolean => taskStatus === true;
    let checkedIcon: ReactElement<HTMLImageElement> = <img src="src/assets/checked.svg" alt="" />

    function setTextClassName(taskStatus: boolean): string {
        if (taskStatus) {
            return styles.completeTaskName
        }

        return styles.taskName
    }

    function setContainerClassName(taskStatus: boolean): string {
        if (taskStatus) {
            return styles.checkedContainer;
        }

        return styles.defaultContainer;
    }

    return (
        <div className={styles.taskList}>
            {
                tasks.map((task) => {
                    return (
                            <label 
                                htmlFor={task.name} 
                                key={task.name}
                                className={setContainerClassName(task.complete)}
                            >
                                <div className={styles.leftContent}>
                                    <label 
                                        htmlFor={task.name}
                                        className={setInputClassName(task.complete)}    
                                    >
                                        {
                                            taskIsComplete(task.complete)
                                            ? checkedIcon
                                            : ''
                                        }
                                    </label>
                                    <input 
                                        className={styles.input}
                                        type="checkbox" 
                                        id={task.name} 
                                        checked={task.complete}
                                        onChange={(event) => setInputCheckedState(event, task)}
                                    />
                                    <p className={setTextClassName(task.complete)}>{task.name}</p>
                                </div>
                                <button 
                                    className={styles.trash}
                                    onClick={() => removeTask(task.id)}
                                >
                                    <FiTrash2 display={'block'} />
                                </button>
                            </label>
                    )
                })
            }
        </div>
    )
}