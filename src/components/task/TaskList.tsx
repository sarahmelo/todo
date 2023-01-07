import { Dispatch, ReactElement, ReactHTMLElement, useState } from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi";
import { ITask } from "../../interface/task.interface";
import styles from './TaskList.module.css'

export interface TaskComponent {
    tasks: ITask[];
    setTaskList: Dispatch<React.SetStateAction<ITask[]>>;
}

export function TaskList({ tasks, setTaskList }: TaskComponent) {
    const [inputAttributeChecked, setInputAttributeChecked] = useState<boolean>()
    const [completeStats, setCompleteStatus] = useState<boolean>();

    function removeTask(id: number): void {
        const newStateTaskList = tasks.filter(task => task.id !== id)

        setTaskList(newStateTaskList)
    }

    function setInputCheckedState(event: any, task: ITask): void {
        //console.log(tasks.filter(t => t.name !==  task.name))

        let reAtribuitionTasks = tasks.filter(t => t.name !==  task.name);

        const getTaskPosition = tasks.indexOf(task)

        let getTask: ITask = tasks[getTaskPosition]


        if (getTask.complete === true) {
            getTask.complete = false;
            setTaskList([...reAtribuitionTasks, getTask])
            console.log('===> task:',getTask)
            console.log('tasks:', tasks)

            return;
        }

        getTask.complete = true;
        setTaskList([...reAtribuitionTasks, getTask])



        console.log('===> task:',getTask)
        console.log('tasks:', tasks)

        // setTaskList()
        
        //setInputAttributeChecked(event.target.checked)
    }

    function setInputClassName(): string {
        if (!inputAttributeChecked) {
            return styles.defaultInput
        }

        return styles.checkedInput
    }

    let taskIsComplete = (): boolean => inputAttributeChecked === true;
    let checkedIcon: ReactElement<HTMLImageElement> = <img src="src/assets/checked.svg" alt="" />

    function setTextClassName(): string {
        if (inputAttributeChecked) {
            return styles.completeTaskName
        }

        return styles.taskName
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
                                    <label 
                                        htmlFor={task.name}
                                        className={setInputClassName()}    
                                    >
                                        
                                        {
                                            taskIsComplete()
                                            ? checkedIcon
                                            : ''
                                        }
                                    </label>
                                    <input 
                                        type="checkbox" 
                                        id={task.name} 
                                        checked={task.complete}
                                        onChange={(event) => setInputCheckedState(event, task)}
                                    />
                                    <p className={setTextClassName()}>{task.name}</p>
                                </div>
                                <button 
                                    className={styles.trash}
                                    onClick={() => removeTask(task.id)}
                                >
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